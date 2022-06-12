import IErrorHttp from '../../../middleware/error/errorHttp';
import UseCase from '../../../interfaces/generics/useCases.abstract';
import UserRepository from '../../repositories/UserRepository';
import { caseResponse } from '../../../interfaces/generics/generics.interface';

export default class ValidateUserUseCase extends UseCase {
  constructor(private userRepository: UserRepository) {
    super();
  }

  public async execute(authorizedEmail: string): Promise<caseResponse> {
    const user = await this.userRepository.findByEmail(authorizedEmail);

    if (!user) throw new IErrorHttp(404, 'Not Found');

    return {
      status: 200,
      data: user.role,
    };
  }
}
