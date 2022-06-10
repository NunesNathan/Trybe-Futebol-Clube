import IUserRepository from '../../interfaces/userRepository.interface';
import UserModel from '../../database/models/User';
import { User } from '../../interfaces/user.interface';

export default class UserRepository implements IUserRepository {
  private model: typeof UserModel;

  constructor() {
    this.model = UserModel;
  }

  async findByEmail(email: string): Promise<null | User> {
    const user = await this.model.findOne({
      where: {
        email,
      },
    });

    return user;
  }
}
