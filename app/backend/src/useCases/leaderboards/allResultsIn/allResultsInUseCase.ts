import LeaderboardsRepository from '../../repositories/LeaderboardsRepository';
import UseCase from '../../../interfaces/generics/useCases.abstract';
import IErrorHttp from '../../../middleware/error/errorHttp';
import { caseResponse } from '../../../interfaces/generics/generics.interface';
import {
  ModelTeamMatch,
  ModelTeamMatches,
  LeaderboardsResponse,
  LeaderboardResponse,
  CalculateSide,
} from '../../../interfaces/leaderboards.interface';
import { ModelMatches } from '../../../interfaces/matches.interface';
import UtilsAway from '../../../utils/utilsAway';
import UtilsHome from '../../../utils/utilsHome';

export default class AllResultsInUseCase extends UseCase {
  constructor(private leaderboardsRepository: LeaderboardsRepository) {
    super();
  }

  private static calculate(results: ModelMatches, side: string): CalculateSide {
    const util = side === 'home' ? new UtilsHome(results) : new UtilsAway(results);
    return ({
      totalPoints: util.totalPoints,
      totalGames: util.totalGames,
      totalVictories: util.totalVictories,
      totalDraws: util.totalDraws,
      totalLosses: util.totalLosses,
      goalsFavor: util.goalsFavor,
      goalsOwn: util.goalsOwn,
      goalsBalance: util.goalsBalance,
      efficiency: util.efficiency,
    });
  }

  private static calculateSide(side: string, teamResults: ModelTeamMatch)
    : CalculateSide {
    let results: ModelMatches;
    if (side === 'away') {
      results = teamResults.awayTeamMatches;
    } else if (side === 'home') {
      results = teamResults.homeTeamMatches;
    } else {
      // return doAll(teamResults);
      results = teamResults.homeTeamMatches;
    }
    return AllResultsInUseCase.calculate(results, side);
  }

  private undraw = (a: LeaderboardResponse, b: LeaderboardResponse): number => {
    if (a.totalPoints !== b.totalPoints) return a.totalPoints - b.totalPoints;

    if (a.totalVictories !== b.totalVictories) return a.totalVictories - b.totalVictories;

    if (a.goalsBalance !== b.goalsBalance) return a.goalsBalance - b.goalsBalance;

    if (a.goalsFavor !== b.goalsFavor) return a.goalsFavor - b.goalsFavor;

    return a.goalsOwn - b.goalsOwn;
  };

  private static orderLeaderbord(side: string, leaderboard: ModelTeamMatches)
    : LeaderboardsResponse {
    return (leaderboard.map((team) => {
      const sider = AllResultsInUseCase.calculateSide(side, team);

      return ({
        name: team.teamName,
        ...sider,
      });
    }));
  }

  public async execute(side: string): Promise<caseResponse> {
    const leaderboard = await this.leaderboardsRepository.getAll();

    if (!leaderboard) throw new IErrorHttp(404, 'Not Found');

    const data = AllResultsInUseCase.orderLeaderbord(side, leaderboard)
      .sort((a, b) => this.undraw(b, a));

    if (!leaderboard) throw new IErrorHttp(404, 'Not Found');

    return {
      status: 200,
      data,
    };
  }
}
