import Encryptjs from '../../../services/encryptjs';
import ILoginUseCaseResponse from '../../../interfaces/loginValidate.interface';
import IErrorHttp from '../../../middleware/error/errorHttp';
import JwtLogin from '../../../services/Jwt';
import UserRepository from '../../repositories/UserRepository';
import UseCase from '../../../interfaces/generics/useCases.abstract';
import { User, UserDTO, UserToReturn } from '../../../interfaces/user.interface';

export default class UserLoginUseCase extends UseCase {
  constructor(private userRepository: UserRepository, private auth: JwtLogin) {
    super();
  }

  private isUser = (user: User | null): null | UserToReturn => {
    if (user) {
      const { id, role, username, email } = user;

      return ({ id, role, username, email });
    }

    return user;
  };

  private IsValidPassword = async (password: string, user: User | null) => {
    if (user) {
      return Encryptjs.verify(password, user.password);
    }
    return false;
  };

  public async execute(body: UserDTO): Promise<ILoginUseCaseResponse> {
    const { email, password } = body;

    const user = await this.userRepository.findByEmail(email);

    const validUser = this.isUser(user);

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
