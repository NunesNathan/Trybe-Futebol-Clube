import { ModelTeamMatches } from './leaderboards.interface';

export default interface ILeaderboardsRepository {
  getAll(): Promise<ModelTeamMatches | null>;
}
