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

export type LeaderboardsResponse = LeaderboardResponse[];

export type AllResults = {
  homeTeamMatches: ModelMatches;
  awayTeamMatches: ModelMatches;
};

export type ModelTeamMatch = Team & AllResults;

export type ModelTeamMatches = ModelTeamMatch[];
