import { ModelMatches } from '../interfaces/matches.interface';

export default class UtilsHome {
  public totalVictories = 0;
  public totalDraws = 0;
  public totalLosses = 0;
  public totalGames = 0;
  public goalsFavor = 0;
  public goalsOwn = 0;
  public goalsBalance = 0;
  public totalPoints = 0;
  public efficiency = 0;
  constructor(private games: ModelMatches) {
    this.matchesPoints();
    this.matchesGoal();
    this.matchesResults();
  }

  private matchesPoints(): void {
    this.games.forEach((game) => {
      if (game.homeTeamGoals < game.awayTeamGoals) {
        this.totalVictories = (Number(this.totalVictories) + 1);
      } else if (game.homeTeamGoals === game.awayTeamGoals) {
        this.totalDraws += 1;
      } else {
        this.totalLosses += 1;
      }
      this.totalGames += 1;
    });
  }

  private matchesGoal(): void {
    this.games.forEach((game) => {
      this.goalsFavor += game.awayTeamGoals;
      this.goalsOwn += game.homeTeamGoals;
    });
  }

  private matchesResults(): void {
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.totalPoints = (this.totalVictories * 3) + this.totalDraws;
    this.efficiency = Number(((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2));
  }
}
