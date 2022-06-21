import ILeaderboardsRepository from '../../interfaces/leaderboardsRepository.interface';
import TeamModel from '../../database/models/Team';
import MatchModel from '../../database/models/Match';
import { ModelTeamMatches } from '../../interfaces/leaderboards.interface';

export default class LeaderboardsRepository implements ILeaderboardsRepository {
  private matchModel: typeof MatchModel;
  private teamModel: typeof TeamModel;

  constructor() {
    this.matchModel = MatchModel;
    this.teamModel = TeamModel;
  }

  async getAll(): Promise<null | ModelTeamMatches> {
    const leaderboard = await this.teamModel
      .findAll({
        include: [
          {
            model: this.matchModel,
            as: 'homeTeamMatches',
            where: { inProgress: false },
          },
          {
            model: this.matchModel,
            as: 'awayTeamMatches',
            where: { inProgress: false },
          },
        ],
      });

    return leaderboard as unknown as ModelTeamMatches;
  }
}
