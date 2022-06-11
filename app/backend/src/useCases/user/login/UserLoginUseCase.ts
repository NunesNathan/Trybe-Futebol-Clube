import Encryptjs from '../../../services/encryptjs';
import IErrorHttp from '../../../middleware/error/errorHttp';
import JwtLogin from '../../../services/Jwt';
import UserRepository from '../../repositories/UserRepository';
import UseCase from '../../../interfaces/generics/useCases.abstract';
import { User, UserDTO, UserToReturn } from '../../../interfaces/user.interface';
import { caseResponse } from '../../../interfaces/generics/generics.interface';

export default class UserLoginUseCase extends UseCase {
  constructor(private userRepository: UserRepository, private auth: JwtLogin) {
    super();
  }

  private isUser = (user: User): UserToReturn => {
    const { id, role, username, email } = user;

    return ({ id, role, username, email });
  };

  private IsValidPassword = async (password: string, user: User | null) => {
    if (user) {
      return Encryptjs.verify(password, user.password);
    }
    return false;
  };

  public async execute(body: UserDTO): Promise<caseResponse> {
    const { email, password } = body;

    const user = await this.userRepository.findByEmail(email);

    const validUser = user ? this.isUser(user) : null;

    const validPassword = await this.IsValidPassword(password, user);

    if (!validUser || !validPassword) throw new IErrorHttp(401, 'Incorrect email or password');

    const token = this.auth.sign(body);

    return {
      status: 200,
      data: {
        user: validUser,
        token,
      },
    };
  }
}
