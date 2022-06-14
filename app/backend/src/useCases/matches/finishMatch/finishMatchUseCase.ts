import MatchesRepository from '../../repositories/MatchesRepository';
import UseCase from '../../../interfaces/generics/useCases.abstract';
import IErrorHttp from '../../../middleware/error/errorHttp';
import { caseResponse } from '../../../interfaces/generics/generics.interface';

export default class FinishMatchUseCase extends UseCase {
  constructor(private matchesRepository: MatchesRepository) {
    super();
  }

  public async execute(id: number): Promise<caseResponse> {
    const match = await this.matchesRepository.finish(id);

    if (!match) throw new IErrorHttp(409, 'Already finished or does not found');

    return {
      status: 200,
      data: 'Finished',
    };
  }
}
