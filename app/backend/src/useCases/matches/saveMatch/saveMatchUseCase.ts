import MatchesRepository from '../../repositories/MatchesRepository';
import UseCase from '../../../interfaces/generics/useCases.abstract';
import IErrorHttp from '../../../middleware/error/errorHttp';
import { caseResponse } from '../../../interfaces/generics/generics.interface';
import { ReqSaveMatch } from '../../../interfaces/matches.interface';

export default class AllMatchesUseCase extends UseCase {
  constructor(private matchesRepository: MatchesRepository) {
    super();
  }

  public async execute(body: ReqSaveMatch): Promise<caseResponse> {
    const match = await this.matchesRepository.save(body);

    if (!match) throw new IErrorHttp(404, 'Not Found');

    return {
      status: 201,
      data: match,
    };
  }
}
