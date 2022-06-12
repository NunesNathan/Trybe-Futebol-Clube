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

export type ModelMatches = Omit<Match, 'teamHome' | 'teamAway'>[];

export type Matches = Match[];
