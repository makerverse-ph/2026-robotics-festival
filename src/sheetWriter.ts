import { MatchState } from './bracketUtils';

const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwRrur9bFp6r4uNHpm-lXz4HdhZQesCv-_40yPeCDS-lMxDO4xoQ6-6_vKJwyYxEr8WVw/exec';
const BRACKET_API_KEY = 'SimonaImri2026!';
const SPREADSHEET_ID = '1UZiABTlvkRM7FvhtjpRqgwzUWZmaLj2d';

interface PushMatch {
  matchNo: string;
  homeTeam: string;
  awayTeam: string;
}

const normalizeTeamForSheet = (team: string | null): string => {
  if (!team || team === 'BYE') return '';
  return team;
};

export const toPushPayload = (matches: MatchState[]): PushMatch[] => {
  return matches
    .slice()
    .sort((a, b) => {
      const bracketOrder = { W: 1, L: 2, G: 3 } as const;
      const bo = bracketOrder[a.bracket] - bracketOrder[b.bracket];
      if (bo !== 0) return bo;
      if (a.round !== b.round) return a.round - b.round;
      return a.order - b.order;
    })
    .map((m) => ({
      matchNo: m.id,
      homeTeam: normalizeTeamForSheet(m.teamA),
      awayTeam: normalizeTeamForSheet(m.teamB),
    }));
};

export const pushMatchesToSheet = async (sheetName: string, matches: MatchState[]) => {
  const body = {
    apiKey: BRACKET_API_KEY,
    spreadsheetId: SPREADSHEET_ID,
    sheetName,
    clearScores: true,
    matches: toPushPayload(matches),
  };

  const res = await fetch(WEB_APP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  let parsed: any = null;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error('Writer API returned non-JSON response.');
  }

  if (!parsed?.ok) {
    throw new Error(parsed?.error || 'Failed to push matches to sheet.');
  }

  return parsed;
};
