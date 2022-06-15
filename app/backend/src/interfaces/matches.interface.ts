export type Match = {
  id: number,
  homeTeam: number,
  homeTeamGoals: number,
  awayTeam: number,
  awayTeamGoals: number,
  inProgress: boolean,
  teamHome: {
    teamName: string
  },
  teamAway: {
    teamName: string
  }
};

export type ModelMatch = Omit<Match, 'teamHome' | 'teamAway'>;

export type ModelMatches = ModelMatch[];

export type ReqSaveMatch = Omit<ModelMatch, 'id'>;

export type Matches = Match[];

type MatchGoals = {
  homeTeamGoals: number,
  awayTeamGoals: number,
};

export type UpdateBody = {
  id: number,
  body: MatchGoals,
};
