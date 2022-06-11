import IErrorHttp from '../../../middleware/error/errorHttp';
import JwtLogin from '../../../services/Jwt';
import UseCase from '../../../interfaces/generics/useCases.abstract';
import UserRepository from '../../repositories/UserRepository';
import { caseResponse } from '../../../interfaces/generics/generics.interface';

export default class ValidateUserUseCase extends UseCase {
  constructor(private userRepository: UserRepository, private auth: JwtLogin) {
    super();
  }

  public async execute(token: string): Promise<caseResponse> {
    const authorized = this.auth.verify(token);

    if (!authorized) throw new IErrorHttp(401, 'Unauthorized');

    const user = await this.userRepository.findByEmail(authorized.email);

    if (!user) throw new IErrorHttp(404, 'Not Found');

    return {
      status: 200,
      data: user.role,
    };
  }
}
