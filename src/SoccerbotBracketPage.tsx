import React, { useMemo, useState } from 'react';
import { ArrowLeft, Trophy } from 'lucide-react';
import {
  MatchDef,
  MatchScore,
  MatchState,
  buildDoubleEliminationTemplate,
  computeBracket,
  nextPowerOfTwo,
} from './bracketUtils';

const cardClass = 'bg-white border border-slate-200 rounded-xl p-4 shadow-sm min-w-[230px]';

const MatchCard = ({
  match,
  score,
  onScoreChange,
}: {
  match: MatchState;
  score: MatchScore;
  onScoreChange: (id: string, side: 'a' | 'b', value: string) => void;
}) => {
  const disabled = !match.playable || !match.teamA || !match.teamB;

  const tieError =
    !disabled &&
    score.a !== '' &&
    score.b !== '' &&
    Number.isFinite(Number(score.a)) &&
    Number.isFinite(Number(score.b)) &&
    Number(score.a) === Number(score.b);

  const teamRow = (team: string | null, side: 'a' | 'b') => (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-slate-50 border border-slate-200 rounded-md px-2 py-1 text-sm font-medium text-slate-700 min-h-[34px] flex items-center">
        {team ?? 'TBD'}
      </div>
      <input
        type="number"
        min={0}
        value={score[side]}
        onChange={(e) => onScoreChange(match.id, side, e.target.value)}
        disabled={disabled}
        className="w-16 border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:opacity-50"
      />
    </div>
  );

  return (
    <div className={cardClass}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-[#0056B3] uppercase tracking-wide">{match.label}</span>
        {match.winner ? (
          <span className="text-[10px] uppercase bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">Winner set</span>
        ) : (
          <span className="text-[10px] uppercase bg-slate-100 text-slate-500 px-2 py-1 rounded-full font-bold">Pending</span>
        )}
      </div>

      <div className="space-y-2">
        {teamRow(match.teamA, 'a')}
        {teamRow(match.teamB, 'b')}
      </div>

      {tieError && <p className="text-xs text-red-600 mt-2">Scores cannot be tied. Please enter a winning score.</p>}
      {!match.playable && <p className="text-xs text-slate-500 mt-2">Waiting for team assignment / auto-advance from BYE.</p>}

      {match.winner && <p className="text-xs text-emerald-700 font-semibold mt-2">Winner: {match.winner}</p>}
    </div>
  );
};

const groupByRound = (matches: MatchState[]) => {
  const rounds = new Map<number, MatchState[]>();
  matches.forEach((m) => {
    const list = rounds.get(m.round) ?? [];
    list.push(m);
    rounds.set(m.round, list);
  });
  return Array.from(rounds.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([round, items]) => ({
      round,
      items: items.sort((x, y) => x.order - y.order),
    }));
};

export default function SoccerbotBracketPage() {
  const [teamInput, setTeamInput] = useState('');
  const [defs, setDefs] = useState<MatchDef[] | null>(null);
  const [seeds, setSeeds] = useState<string[]>([]);
  const [scores, setScores] = useState<Record<string, MatchScore>>({});
  const [error, setError] = useState<string>('');

  const generated = useMemo(() => {
    if (!defs || seeds.length === 0) return null;
    return computeBracket(defs, seeds, scores);
  }, [defs, seeds, scores]);

  const winnersMatches = useMemo(
    () => (generated ? Object.values(generated.matches).filter((m) => m.bracket === 'W') : []),
    [generated],
  );
  const losersMatches = useMemo(
    () => (generated ? Object.values(generated.matches).filter((m) => m.bracket === 'L') : []),
    [generated],
  );
  const grandFinalMatches = useMemo(() => {
    if (!generated) return [];
    const gf1 = generated.matches.GF1 ? [generated.matches.GF1] : [];
    if (generated.showResetFinal && generated.resetFinal) {
      gf1.push(generated.resetFinal);
    }
    return gf1;
  }, [generated]);

  const handleGenerate = () => {
    const teams = teamInput
      .split('\n')
      .map((x) => x.trim())
      .filter(Boolean);

    if (teams.length < 2) {
      setError('Please provide at least 2 teams (one per line).');
      return;
    }

    const size = nextPowerOfTwo(teams.length);
    if (size > 16) {
      setError('Current page supports up to 16 teams. Please reduce the list to 16 or less.');
      return;
    }

    setError('');
    const paddedSeeds = [...teams];
    while (paddedSeeds.length < size) {
      paddedSeeds.push('BYE');
    }

    const template = buildDoubleEliminationTemplate(size);
    const initialScores: Record<string, MatchScore> = {};
    template.forEach((m) => {
      initialScores[m.id] = { a: '', b: '' };
    });
    initialScores.GF2 = { a: '', b: '' };

    setSeeds(paddedSeeds);
    setDefs(template);
    setScores(initialScores);
  };

  const updateScore = (id: string, side: 'a' | 'b', value: string) => {
    const clean = value.replace(/[^0-9]/g, '');
    setScores((prev) => ({
      ...prev,
      [id]: {
        a: prev[id]?.a ?? '',
        b: prev[id]?.b ?? '',
        [side]: clean,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-orange-400 text-xs uppercase tracking-[0.2em] font-bold">SoccerBot Tournament</p>
            <h1 className="text-2xl md:text-3xl font-black">Double-Elimination Bracket Generator</h1>
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
          >
            <ArrowLeft size={16} />
            Back to Event Site
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-black text-slate-900 mb-2">1) Enter Team List</h2>
          <p className="text-sm text-slate-600 mb-4">
            Paste one team per line, then click <strong>Generate Bracket</strong>. The system auto-pads to the nearest power of two using BYE slots.
            Encode scores per match and winners will automatically progress until Grand Finals.
          </p>

          <textarea
            value={teamInput}
            onChange={(e) => setTeamInput(e.target.value)}
            placeholder={'Example:\nTeam Alpha\nTeam Beta\nTeam Gamma\nTeam Delta'}
            className="w-full min-h-[180px] border border-slate-300 rounded-xl p-4 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={handleGenerate}
              className="bg-[#FF6321] text-white px-5 py-3 rounded-xl font-bold hover:bg-[#e55a1e] transition"
            >
              Generate Bracket
            </button>
            {error && <p className="text-sm text-red-600 font-semibold">{error}</p>}
            {seeds.length > 0 && (
              <p className="text-sm text-slate-600">
                Active bracket size: <strong>{seeds.length}</strong> teams (including BYE)
              </p>
            )}
          </div>
        </section>

        {generated && (
          <>
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="text-[#FF6321]" size={20} />
                <h2 className="text-xl font-black text-slate-900">Current Leaderboard State</h2>
              </div>
              <p className="text-sm text-slate-600">
                Champion: {generated.champion ? <span className="font-bold text-emerald-700">{generated.champion}</span> : 'TBD'}
              </p>
              {generated.showResetFinal && (
                <p className="text-sm text-orange-700 mt-2 font-semibold">
                  Reset Final enabled because Losers Bracket winner won Grand Final 1.
                </p>
              )}
            </section>

            <section className="space-y-6">
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-3">Winners Bracket</h3>
                <div className="overflow-x-auto pb-2">
                  <div className="flex gap-4 min-w-max">
                    {groupByRound(winnersMatches).map((round) => (
                      <div key={`w-${round.round}`} className="space-y-3">
                        <p className="text-xs font-bold uppercase text-[#0056B3]">Round {round.round}</p>
                        {round.items.map((match) => (
                          <MatchCard
                            key={match.id}
                            match={match}
                            score={scores[match.id] ?? { a: '', b: '' }}
                            onScoreChange={updateScore}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900 mb-3">Losers Bracket</h3>
                <div className="overflow-x-auto pb-2">
                  <div className="flex gap-4 min-w-max">
                    {groupByRound(losersMatches).map((round) => (
                      <div key={`l-${round.round}`} className="space-y-3">
                        <p className="text-xs font-bold uppercase text-[#7c3aed]">Round {round.round}</p>
                        {round.items.map((match) => (
                          <MatchCard
                            key={match.id}
                            match={match}
                            score={scores[match.id] ?? { a: '', b: '' }}
                            onScoreChange={updateScore}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900 mb-3">Grand Finals</h3>
                <div className="flex flex-wrap gap-4">
                  {grandFinalMatches.map((match) => (
                    <MatchCard
                      key={match.id}
                      match={match}
                      score={scores[match.id] ?? { a: '', b: '' }}
                      onScoreChange={updateScore}
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
