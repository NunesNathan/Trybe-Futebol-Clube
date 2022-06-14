import MatchesRepository from '../../repositories/MatchesRepository';
import TeamsRepository from '../../repositories/TeamsRepository';
import UseCase from '../../../interfaces/generics/useCases.abstract';
import IErrorHttp from '../../../middleware/error/errorHttp';
import { caseResponse } from '../../../interfaces/generics/generics.interface';
import { ReqSaveMatch } from '../../../interfaces/matches.interface';

export default class SaveMatchUseCase extends UseCase {
  constructor(
    private matchesRepository: MatchesRepository,
    private teamsRepository: TeamsRepository,
  ) {
    super();
  }

  private async existTeam(team: number): Promise<boolean> {
    const exists = await this.teamsRepository.getByPk(team);

    return !!exists;
  }

  public async execute(body: ReqSaveMatch): Promise<caseResponse> {
    if (body.homeTeam === body.awayTeam) {
      throw new IErrorHttp(401, 'It is not possible to create a match with two equal teams');
    }

    const existsHome = await this.existTeam(body.homeTeam);
    const existsAway = await this.existTeam(body.awayTeam);

    if (!existsAway || !existsHome) {
      throw new IErrorHttp(404, 'There is no team with such id!');
    }

    const match = await this.matchesRepository.save(body);

    if (!match) throw new IErrorHttp(404, 'Not Found');

    return {
      status: 201,
      data: match,
    };
  }
}
