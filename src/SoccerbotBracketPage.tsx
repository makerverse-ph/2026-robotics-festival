import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, RefreshCcw, Trophy } from 'lucide-react';
import {
  MatchDef,
  MatchScore,
  MatchState,
  buildDoubleEliminationTemplate,
  computeBracket,
  nextPowerOfTwo,
} from './bracketUtils';

const SHEET_ID = '1UZiABTlvkRM7FvhtjpRqgwzUWZmaLj2d';
const TEAMS_TAB = 'Soccerbot Teams List';
const RESULTS_TAB = 'Soccerbot';

const teamsCsvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(TEAMS_TAB)}`;
const resultsCsvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(RESULTS_TAB)}`;

interface SheetResultRow {
  matchNo: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: string;
  awayScore: string;
  winnerCell: string;
}

const cardClass = 'bg-white border border-slate-200 rounded-xl p-4 shadow-sm min-w-[230px]';

const normalizeKey = (value: string): string => value.toUpperCase().replace(/[^A-Z0-9]/g, '');

const parseCsv = (text: string): string[][] => {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    const next = text[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (ch === ',' && !inQuotes) {
      row.push(cell.trim());
      cell = '';
      continue;
    }

    if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && next === '\n') i += 1;
      row.push(cell.trim());
      rows.push(row);
      row = [];
      cell = '';
      continue;
    }

    cell += ch;
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell.trim());
    rows.push(row);
  }

  return rows.filter((r) => r.some((x) => x !== ''));
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

const MatchCard = ({
  match,
  score,
  winnerFromSheet,
}: {
  match: MatchState;
  score: MatchScore;
  winnerFromSheet?: string;
}) => {
  const displayWinner = match.winner || winnerFromSheet || null;

  return (
    <div className={cardClass}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-[#0056B3] uppercase tracking-wide">{match.label}</span>
        <span className="text-[10px] uppercase bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-bold">{match.id}</span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-md px-2 py-1 text-sm font-medium text-slate-700 min-h-[34px] flex items-center">
            {match.teamA ?? 'TBD'}
          </div>
          <div className="w-16 border border-slate-300 rounded-md px-2 py-1 text-sm bg-slate-50 text-center">{score.a || '-'}</div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-md px-2 py-1 text-sm font-medium text-slate-700 min-h-[34px] flex items-center">
            {match.teamB ?? 'TBD'}
          </div>
          <div className="w-16 border border-slate-300 rounded-md px-2 py-1 text-sm bg-slate-50 text-center">{score.b || '-'}</div>
        </div>
      </div>

      {displayWinner ? (
        <p className="text-xs text-emerald-700 font-semibold mt-2">Winner: {displayWinner}</p>
      ) : (
        <p className="text-xs text-slate-500 mt-2">Waiting for valid scores from sheet.</p>
      )}
    </div>
  );
};

export default function SoccerbotBracketPage() {
  const [defs, setDefs] = useState<MatchDef[] | null>(null);
  const [seeds, setSeeds] = useState<string[]>([]);
  const [scores, setScores] = useState<Record<string, MatchScore>>({});
  const [sheetRows, setSheetRows] = useState<Record<string, SheetResultRow>>({});
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [syncing, setSyncing] = useState<boolean>(false);
  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(null);

  const syncFromSheet = async () => {
    try {
      setSyncing(true);
      setError('');

      const [teamsRes, resultsRes] = await Promise.all([fetch(teamsCsvUrl), fetch(resultsCsvUrl)]);

      if (!teamsRes.ok || !resultsRes.ok) {
        throw new Error('Unable to fetch sheet data. Please ensure the sheet is public (Anyone with link: Viewer).');
      }

      const [teamsCsv, resultsCsv] = await Promise.all([teamsRes.text(), resultsRes.text()]);

      const teamsRows = parseCsv(teamsCsv);
      const resultsRows = parseCsv(resultsCsv);

      const teamNames = teamsRows
        .slice(1)
        .map((r) => (r[0] || '').trim())
        .filter(Boolean);

      if (teamNames.length < 2) {
        throw new Error('Need at least 2 teams in "Soccerbot Teams List" (column A).');
      }

      const size = nextPowerOfTwo(teamNames.length);
      if (size > 16) {
        throw new Error('Current bracket page supports up to 16 teams.');
      }

      const paddedSeeds = [...teamNames];
      while (paddedSeeds.length < size) paddedSeeds.push('BYE');

      const template = buildDoubleEliminationTemplate(size);

      const parsedRows: SheetResultRow[] = resultsRows.slice(1).map((r) => ({
        matchNo: (r[0] || '').trim(), // A
        homeTeam: (r[1] || '').trim(), // B
        homeScore: (r[5] || '').trim(), // F
        awayTeam: (r[6] || '').trim(), // G
        awayScore: (r[10] || '').trim(), // K
        winnerCell: (r[11] || '').trim(), // L
      }));

      const rowsByMatch: Record<string, SheetResultRow> = {};
      parsedRows.forEach((row) => {
        const key = normalizeKey(row.matchNo);
        if (key) rowsByMatch[key] = row;
      });

      const incomingScores: Record<string, MatchScore> = {};
      template.forEach((m) => {
        const row = rowsByMatch[normalizeKey(m.id)];
        incomingScores[m.id] = {
          a: row?.homeScore ?? '',
          b: row?.awayScore ?? '',
        };
      });
      incomingScores.GF2 = incomingScores.GF2 ?? { a: '', b: '' };

      setDefs(template);
      setSeeds(paddedSeeds);
      setScores(incomingScores);
      setSheetRows(rowsByMatch);
      setLastSyncedAt(new Date());
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to sync from Google Sheet.';
      setError(message);
    } finally {
      setLoading(false);
      setSyncing(false);
    }
  };

  useEffect(() => {
    syncFromSheet();
    const timer = setInterval(() => {
      syncFromSheet();
    }, 10000);
    return () => clearInterval(timer);
  }, []);

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
    if (generated.showResetFinal && generated.resetFinal) gf1.push(generated.resetFinal);
    return gf1;
  }, [generated]);

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-orange-400 text-xs uppercase tracking-[0.2em] font-bold">SoccerBot Tournament</p>
            <h1 className="text-2xl md:text-3xl font-black">Double-Elimination Bracket (Google Sheet Synced)</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={syncFromSheet}
              className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
            >
              <RefreshCcw size={16} className={syncing ? 'animate-spin' : ''} />
              Sync now
            </button>
            <a href="/" className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition">
              <ArrowLeft size={16} />
              Back to Event Site
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-black text-slate-900 mb-2">Source of Truth: Public Google Sheet</h2>
          <p className="text-sm text-slate-600 mb-2">
            This page auto-syncs every <strong>10 seconds</strong> from:
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li><strong>{TEAMS_TAB}</strong> (column A for team names)</li>
            <li><strong>{RESULTS_TAB}</strong> (A match no, B/F home team+points, G/K away team+points, L winner)</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            Match numbers in sheet column A must match generated bracket IDs (e.g., W1, W2, ... L1 ... GF1).
          </p>
          {lastSyncedAt && <p className="text-xs text-emerald-700 mt-2 font-semibold">Last synced: {lastSyncedAt.toLocaleTimeString()}</p>}
          {error && <p className="text-sm text-red-600 font-semibold mt-2">{error}</p>}
        </section>

        {loading && <p className="text-sm text-slate-600">Loading bracket from sheet...</p>}

        {generated && (
          <>
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="text-[#FF6321]" size={20} />
                <h2 className="text-xl font-black text-slate-900">Current Bracket State</h2>
              </div>
              <p className="text-sm text-slate-600">Teams loaded: <strong>{seeds.filter((t) => t !== 'BYE').length}</strong></p>
              <p className="text-sm text-slate-600">
                Champion: {generated.champion ? <span className="font-bold text-emerald-700">{generated.champion}</span> : 'TBD'}
              </p>
              {generated.showResetFinal && (
                <p className="text-sm text-orange-700 mt-2 font-semibold">Reset Final enabled because LB winner took Grand Final 1.</p>
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
                            winnerFromSheet={sheetRows[normalizeKey(match.id)]?.winnerCell}
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
                            winnerFromSheet={sheetRows[normalizeKey(match.id)]?.winnerCell}
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
                      winnerFromSheet={sheetRows[normalizeKey(match.id)]?.winnerCell}
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
