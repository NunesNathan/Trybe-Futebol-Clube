import TeamsRepository from '../../repositories/TeamsRepository';
import UseCase from '../../../interfaces/generics/useCases.abstract';
import IErrorHttp from '../../../middleware/error/errorHttp';
import { caseResponse } from '../../../interfaces/generics/generics.interface';

export default class AllTeamsUseCase extends UseCase {
  constructor(private teamsRepository: TeamsRepository) {
    super();
  }

  public async execute(): Promise<caseResponse> {
    const teams = await this.teamsRepository.getAll();

    if (!teams) throw new IErrorHttp(404, 'Not Found');

    return {
      status: 200,
      data: teams,
    };
  }
}
