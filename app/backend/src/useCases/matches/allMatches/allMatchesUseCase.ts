import MatchesRepository from '../../repositories/MatchesRepository';
import UseCase from '../../../interfaces/generics/useCases.abstract';
import IErrorHttp from '../../../middleware/error/errorHttp';
import { caseResponse } from '../../../interfaces/generics/generics.interface';

export default class AllMatchesUseCase extends UseCase {
  constructor(private matchesRepository: MatchesRepository) {
    super();
  }

  public async execute(): Promise<caseResponse> {
    const matches = await this.matchesRepository.getAll();

    if (!matches) throw new IErrorHttp(404, 'Not Found');

    return {
      status: 200,
      data: matches,
    };
  }
}
