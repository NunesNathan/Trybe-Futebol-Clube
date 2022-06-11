import TeamsRepository from '../../repositories/TeamsRepository';
import UseCase from '../../../interfaces/generics/useCases.abstract';
import IErrorHttp from '../../../middleware/error/errorHttp';
import { caseResponse } from '../../../interfaces/generics/generics.interface';

export default class OneTeamUseCase extends UseCase {
  constructor(private teamsRepository: TeamsRepository) {
    super();
  }

  public async execute(id: number): Promise<caseResponse> {
    const team = await this.teamsRepository.getByPk(id);

    if (!team) throw new IErrorHttp(404, 'Not Found');

    return {
      status: 200,
      data: team,
    };
  }
}
