export const BYE_TEAM = 'BYE';

export type BracketLane = 'W' | 'L' | 'G';

export interface SourceRef {
  kind: 'seed' | 'winner' | 'loser';
  value: number | string;
}

export interface MatchDef {
  id: string;
  label: string;
  bracket: BracketLane;
  round: number;
  order: number;
  sourceA: SourceRef;
  sourceB: SourceRef;
}

export interface MatchState extends MatchDef {
  teamA: string | null;
  teamB: string | null;
  winner: string | null;
  loser: string | null;
  playable: boolean;
}

export interface MatchScore {
  a: string;
  b: string;
}

export interface BracketComputation {
  matches: Record<string, MatchState>;
  resetFinal: MatchState | null;
  champion: string | null;
  showResetFinal: boolean;
}

const intFromScore = (value: string): number | null => {
  if (value === '') return null;
  if (!/^\d+$/.test(value)) return null;
  return Number(value);
};

const isRealTeam = (team: string | null): team is string => Boolean(team && team !== BYE_TEAM);

const resolveFromSource = (
  source: SourceRef,
  seeds: string[],
  computed: Record<string, MatchState>,
): string | null => {
  if (source.kind === 'seed') {
    const idx = Number(source.value);
    return seeds[idx] ?? null;
  }

  const ref = computed[String(source.value)];
  if (!ref) return null;
  return source.kind === 'winner' ? ref.winner : ref.loser;
};

const evaluateWinnerLoser = (
  teamA: string | null,
  teamB: string | null,
  score: MatchScore | undefined,
): { winner: string | null; loser: string | null; playable: boolean } => {
  if (!teamA && !teamB) {
    return { winner: null, loser: null, playable: false };
  }

  // Auto-advance from BYE
  if (teamA === BYE_TEAM && isRealTeam(teamB)) {
    return { winner: teamB, loser: null, playable: false };
  }
  if (teamB === BYE_TEAM && isRealTeam(teamA)) {
    return { winner: teamA, loser: null, playable: false };
  }

  if (teamA === BYE_TEAM && teamB === BYE_TEAM) {
    return { winner: null, loser: null, playable: false };
  }

  // If one side still missing, can't play yet.
  if (!isRealTeam(teamA) || !isRealTeam(teamB)) {
    return { winner: null, loser: null, playable: false };
  }

  const scoreA = intFromScore(score?.a ?? '');
  const scoreB = intFromScore(score?.b ?? '');

  if (scoreA === null || scoreB === null || scoreA === scoreB) {
    return { winner: null, loser: null, playable: true };
  }

  if (scoreA > scoreB) {
    return { winner: teamA, loser: teamB, playable: true };
  }

  return { winner: teamB, loser: teamA, playable: true };
};

export const nextPowerOfTwo = (value: number): number => {
  let n = 1;
  while (n < value) n *= 2;
  return n;
};

export const buildDoubleEliminationTemplate = (size: number): MatchDef[] => {
  if (![2, 4, 8, 16].includes(size)) {
    throw new Error('Supported team sizes are 2, 4, 8, and 16 (auto-padded with BYE).');
  }

  if (size === 2) {
    return [
      {
        id: 'GF1',
        label: 'Grand Final 1',
        bracket: 'G',
        round: 1,
        order: 1,
        sourceA: { kind: 'seed', value: 0 },
        sourceB: { kind: 'seed', value: 1 },
      },
    ];
  }

  if (size === 4) {
    return [
      { id: 'W1', label: 'W1', bracket: 'W', round: 1, order: 1, sourceA: { kind: 'seed', value: 0 }, sourceB: { kind: 'seed', value: 1 } },
      { id: 'W2', label: 'W2', bracket: 'W', round: 1, order: 2, sourceA: { kind: 'seed', value: 2 }, sourceB: { kind: 'seed', value: 3 } },
      { id: 'W3', label: 'W3 (WB Final)', bracket: 'W', round: 2, order: 1, sourceA: { kind: 'winner', value: 'W1' }, sourceB: { kind: 'winner', value: 'W2' } },

      { id: 'L1', label: 'L1', bracket: 'L', round: 1, order: 1, sourceA: { kind: 'loser', value: 'W1' }, sourceB: { kind: 'loser', value: 'W2' } },
      { id: 'L2', label: 'L2 (LB Final)', bracket: 'L', round: 2, order: 1, sourceA: { kind: 'winner', value: 'L1' }, sourceB: { kind: 'loser', value: 'W3' } },

      { id: 'GF1', label: 'Grand Final 1', bracket: 'G', round: 1, order: 1, sourceA: { kind: 'winner', value: 'W3' }, sourceB: { kind: 'winner', value: 'L2' } },
    ];
  }

  if (size === 8) {
    return [
      { id: 'W1', label: 'W1', bracket: 'W', round: 1, order: 1, sourceA: { kind: 'seed', value: 0 }, sourceB: { kind: 'seed', value: 1 } },
      { id: 'W2', label: 'W2', bracket: 'W', round: 1, order: 2, sourceA: { kind: 'seed', value: 2 }, sourceB: { kind: 'seed', value: 3 } },
      { id: 'W3', label: 'W3', bracket: 'W', round: 1, order: 3, sourceA: { kind: 'seed', value: 4 }, sourceB: { kind: 'seed', value: 5 } },
      { id: 'W4', label: 'W4', bracket: 'W', round: 1, order: 4, sourceA: { kind: 'seed', value: 6 }, sourceB: { kind: 'seed', value: 7 } },
      { id: 'W5', label: 'W5', bracket: 'W', round: 2, order: 1, sourceA: { kind: 'winner', value: 'W1' }, sourceB: { kind: 'winner', value: 'W2' } },
      { id: 'W6', label: 'W6', bracket: 'W', round: 2, order: 2, sourceA: { kind: 'winner', value: 'W3' }, sourceB: { kind: 'winner', value: 'W4' } },
      { id: 'W7', label: 'W7 (WB Final)', bracket: 'W', round: 3, order: 1, sourceA: { kind: 'winner', value: 'W5' }, sourceB: { kind: 'winner', value: 'W6' } },

      { id: 'L1', label: 'L1', bracket: 'L', round: 1, order: 1, sourceA: { kind: 'loser', value: 'W1' }, sourceB: { kind: 'loser', value: 'W2' } },
      { id: 'L2', label: 'L2', bracket: 'L', round: 1, order: 2, sourceA: { kind: 'loser', value: 'W3' }, sourceB: { kind: 'loser', value: 'W4' } },
      { id: 'L3', label: 'L3', bracket: 'L', round: 2, order: 1, sourceA: { kind: 'winner', value: 'L1' }, sourceB: { kind: 'loser', value: 'W5' } },
      { id: 'L4', label: 'L4', bracket: 'L', round: 2, order: 2, sourceA: { kind: 'winner', value: 'L2' }, sourceB: { kind: 'loser', value: 'W6' } },
      { id: 'L5', label: 'L5', bracket: 'L', round: 3, order: 1, sourceA: { kind: 'winner', value: 'L3' }, sourceB: { kind: 'winner', value: 'L4' } },
      { id: 'L6', label: 'L6 (LB Final)', bracket: 'L', round: 4, order: 1, sourceA: { kind: 'winner', value: 'L5' }, sourceB: { kind: 'loser', value: 'W7' } },

      { id: 'GF1', label: 'Grand Final 1', bracket: 'G', round: 1, order: 1, sourceA: { kind: 'winner', value: 'W7' }, sourceB: { kind: 'winner', value: 'L6' } },
    ];
  }

  return [
    { id: 'W1', label: 'W1', bracket: 'W', round: 1, order: 1, sourceA: { kind: 'seed', value: 0 }, sourceB: { kind: 'seed', value: 1 } },
    { id: 'W2', label: 'W2', bracket: 'W', round: 1, order: 2, sourceA: { kind: 'seed', value: 2 }, sourceB: { kind: 'seed', value: 3 } },
    { id: 'W3', label: 'W3', bracket: 'W', round: 1, order: 3, sourceA: { kind: 'seed', value: 4 }, sourceB: { kind: 'seed', value: 5 } },
    { id: 'W4', label: 'W4', bracket: 'W', round: 1, order: 4, sourceA: { kind: 'seed', value: 6 }, sourceB: { kind: 'seed', value: 7 } },
    { id: 'W5', label: 'W5', bracket: 'W', round: 1, order: 5, sourceA: { kind: 'seed', value: 8 }, sourceB: { kind: 'seed', value: 9 } },
    { id: 'W6', label: 'W6', bracket: 'W', round: 1, order: 6, sourceA: { kind: 'seed', value: 10 }, sourceB: { kind: 'seed', value: 11 } },
    { id: 'W7', label: 'W7', bracket: 'W', round: 1, order: 7, sourceA: { kind: 'seed', value: 12 }, sourceB: { kind: 'seed', value: 13 } },
    { id: 'W8', label: 'W8', bracket: 'W', round: 1, order: 8, sourceA: { kind: 'seed', value: 14 }, sourceB: { kind: 'seed', value: 15 } },

    { id: 'W9', label: 'W9', bracket: 'W', round: 2, order: 1, sourceA: { kind: 'winner', value: 'W1' }, sourceB: { kind: 'winner', value: 'W2' } },
    { id: 'W10', label: 'W10', bracket: 'W', round: 2, order: 2, sourceA: { kind: 'winner', value: 'W3' }, sourceB: { kind: 'winner', value: 'W4' } },
    { id: 'W11', label: 'W11', bracket: 'W', round: 2, order: 3, sourceA: { kind: 'winner', value: 'W5' }, sourceB: { kind: 'winner', value: 'W6' } },
    { id: 'W12', label: 'W12', bracket: 'W', round: 2, order: 4, sourceA: { kind: 'winner', value: 'W7' }, sourceB: { kind: 'winner', value: 'W8' } },
    { id: 'W13', label: 'W13', bracket: 'W', round: 3, order: 1, sourceA: { kind: 'winner', value: 'W9' }, sourceB: { kind: 'winner', value: 'W10' } },
    { id: 'W14', label: 'W14', bracket: 'W', round: 3, order: 2, sourceA: { kind: 'winner', value: 'W11' }, sourceB: { kind: 'winner', value: 'W12' } },
    { id: 'W15', label: 'W15 (WB Final)', bracket: 'W', round: 4, order: 1, sourceA: { kind: 'winner', value: 'W13' }, sourceB: { kind: 'winner', value: 'W14' } },

    { id: 'L1', label: 'L1', bracket: 'L', round: 1, order: 1, sourceA: { kind: 'loser', value: 'W1' }, sourceB: { kind: 'loser', value: 'W2' } },
    { id: 'L2', label: 'L2', bracket: 'L', round: 1, order: 2, sourceA: { kind: 'loser', value: 'W3' }, sourceB: { kind: 'loser', value: 'W4' } },
    { id: 'L3', label: 'L3', bracket: 'L', round: 1, order: 3, sourceA: { kind: 'loser', value: 'W5' }, sourceB: { kind: 'loser', value: 'W6' } },
    { id: 'L4', label: 'L4', bracket: 'L', round: 1, order: 4, sourceA: { kind: 'loser', value: 'W7' }, sourceB: { kind: 'loser', value: 'W8' } },

    { id: 'L5', label: 'L5', bracket: 'L', round: 2, order: 1, sourceA: { kind: 'winner', value: 'L1' }, sourceB: { kind: 'loser', value: 'W9' } },
    { id: 'L6', label: 'L6', bracket: 'L', round: 2, order: 2, sourceA: { kind: 'winner', value: 'L2' }, sourceB: { kind: 'loser', value: 'W10' } },
    { id: 'L7', label: 'L7', bracket: 'L', round: 2, order: 3, sourceA: { kind: 'winner', value: 'L3' }, sourceB: { kind: 'loser', value: 'W11' } },
    { id: 'L8', label: 'L8', bracket: 'L', round: 2, order: 4, sourceA: { kind: 'winner', value: 'L4' }, sourceB: { kind: 'loser', value: 'W12' } },

    { id: 'L9', label: 'L9', bracket: 'L', round: 3, order: 1, sourceA: { kind: 'winner', value: 'L5' }, sourceB: { kind: 'winner', value: 'L6' } },
    { id: 'L10', label: 'L10', bracket: 'L', round: 3, order: 2, sourceA: { kind: 'winner', value: 'L7' }, sourceB: { kind: 'winner', value: 'L8' } },

    { id: 'L11', label: 'L11', bracket: 'L', round: 4, order: 1, sourceA: { kind: 'winner', value: 'L9' }, sourceB: { kind: 'loser', value: 'W13' } },
    { id: 'L12', label: 'L12', bracket: 'L', round: 4, order: 2, sourceA: { kind: 'winner', value: 'L10' }, sourceB: { kind: 'loser', value: 'W14' } },

    { id: 'L13', label: 'L13', bracket: 'L', round: 5, order: 1, sourceA: { kind: 'winner', value: 'L11' }, sourceB: { kind: 'winner', value: 'L12' } },
    { id: 'L14', label: 'L14 (LB Final)', bracket: 'L', round: 6, order: 1, sourceA: { kind: 'winner', value: 'L13' }, sourceB: { kind: 'loser', value: 'W15' } },

    { id: 'GF1', label: 'Grand Final 1', bracket: 'G', round: 1, order: 1, sourceA: { kind: 'winner', value: 'W15' }, sourceB: { kind: 'winner', value: 'L14' } },
  ];
};

export const computeBracket = (
  defs: MatchDef[],
  seeds: string[],
  scores: Record<string, MatchScore>,
): BracketComputation => {
  const computed: Record<string, MatchState> = {};

  for (let i = 0; i < defs.length * 2; i += 1) {
    let changed = false;

    defs.forEach((def) => {
      const teamA = resolveFromSource(def.sourceA, seeds, computed);
      const teamB = resolveFromSource(def.sourceB, seeds, computed);
      const prior = computed[def.id];
      const evaluated = evaluateWinnerLoser(teamA, teamB, scores[def.id]);

      const next: MatchState = {
        ...def,
        teamA,
        teamB,
        winner: evaluated.winner,
        loser: evaluated.loser,
        playable: evaluated.playable,
      };

      if (!prior || JSON.stringify(prior) !== JSON.stringify(next)) {
        computed[def.id] = next;
        changed = true;
      }
    });

    if (!changed) break;
  }

  const gf1 = computed.GF1;
  const wbWinner = gf1?.teamA ?? null;
  const lbWinner = gf1?.teamB ?? null;

  let showResetFinal = false;
  let resetFinal: MatchState | null = null;
  let champion: string | null = gf1?.winner ?? null;

  if (gf1 && isRealTeam(wbWinner) && isRealTeam(lbWinner) && gf1.winner === lbWinner) {
    showResetFinal = true;
    const resetEval = evaluateWinnerLoser(wbWinner, lbWinner, scores.GF2);
    resetFinal = {
      id: 'GF2',
      label: 'Grand Final Reset',
      bracket: 'G',
      round: 2,
      order: 2,
      sourceA: { kind: 'winner', value: 'W' },
      sourceB: { kind: 'winner', value: 'L' },
      teamA: wbWinner,
      teamB: lbWinner,
      winner: resetEval.winner,
      loser: resetEval.loser,
      playable: resetEval.playable,
    };
    champion = resetFinal.winner;
  }

  return {
    matches: computed,
    resetFinal,
    champion,
    showResetFinal,
  };
};
