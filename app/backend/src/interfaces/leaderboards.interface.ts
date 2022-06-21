import { Team } from './teams.interface';
import { ModelMatches } from './matches.interface';

export type LeaderboardResponse = {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
};

export type CalculateSide = Omit<LeaderboardResponse, 'name'>;

export type AllLeaderboardsMixUp = {
  _totalPoints: number,
  _totalGames: number,
  _totalVictories: number,
  _totalDraws: number,
  _totalLosses: number,
  _goalsFavor: number,
  _goalsOwn: number,
};

export type AllLeaderboardsBalances = {
  _goalsBalance: number,
  _efficiency: number,
};

export type LeaderboardsResponse = LeaderboardResponse[];

export type AllResults = {
  homeTeamMatches: ModelMatches;
  awayTeamMatches: ModelMatches;
};

export type ModelTeamMatch = Team & AllResults;

export type ModelTeamMatches = ModelTeamMatch[];
