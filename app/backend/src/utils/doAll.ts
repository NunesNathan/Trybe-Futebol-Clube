import { ModelTeamMatch, CalculateSide } from '../interfaces/leaderboards.interface';
import UtilsAway from './utilsAway';
import UtilsHome from './utilsHome';

export default class DoAll {
  private awayGames: CalculateSide;
  private homeGames: CalculateSide;
  public allGames: CalculateSide = {
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    totalGames: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    totalPoints: 0,
    efficiency: 0,
  };

  public totalVictories = 0;
  public totalDraws = 0;
  public totalLosses = 0;
  public totalGames = 0;
  public goalsFavor = 0;
  public goalsOwn = 0;
  public goalsBalance = 0;
  public totalPoints = 0;
  public efficiency = 0;

  constructor(private games: ModelTeamMatch) {
    this.awayGames = new UtilsAway(this.games.awayTeamMatches);
    this.homeGames = new UtilsHome(this.games.homeTeamMatches);
    this.mixUpResults();
    this.updateBalances();
    Object.assign(this, this.allGames);
  }

  private mixUpResults(): void {
    this.allGames.totalPoints += (this.awayGames.totalPoints + this.homeGames.totalPoints);
    this.allGames.totalGames = this.awayGames.totalGames + this.homeGames.totalGames;
    this.allGames.totalVictories = this.awayGames.totalVictories + this.homeGames.totalVictories;
    this.allGames.totalDraws = this.awayGames.totalDraws + this.homeGames.totalDraws;
    this.allGames.totalLosses = this.awayGames.totalLosses + this.homeGames.totalLosses;
    this.allGames.goalsFavor = this.awayGames.goalsFavor + this.homeGames.goalsFavor;
    this.allGames.goalsOwn = this.awayGames.goalsOwn + this.homeGames.goalsOwn;
  }

  private updateBalances(): void {
    this.allGames.goalsBalance = this.allGames.goalsFavor - this.allGames.goalsOwn;
    this.allGames.efficiency = Number(((this
      .allGames.totalPoints / (this.allGames.totalGames * 3)) * 100).toFixed(2));
  }
}
