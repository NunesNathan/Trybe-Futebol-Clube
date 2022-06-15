import MatchesRepository from '../../repositories/MatchesRepository';
import UseCase from '../../../interfaces/generics/useCases.abstract';
import IErrorHttp from '../../../middleware/error/errorHttp';
import { caseResponse } from '../../../interfaces/generics/generics.interface';
import { UpdateBody } from '../../../interfaces/matches.interface';

export default class FinishMatchUseCase extends UseCase {
  constructor(private matchesRepository: MatchesRepository) {
    super();
  }

  public async execute(req: UpdateBody): Promise<caseResponse> {
    const match = Object.entries(req.body).length !== 0 ? (
      await this.matchesRepository.update(req))
      : await this.matchesRepository.finish(req.id);

    if (!match) throw new IErrorHttp(404, 'Something didn\'t work');

    return {
      status: 200,
      data: 'Updated!',
    };
  }
}
