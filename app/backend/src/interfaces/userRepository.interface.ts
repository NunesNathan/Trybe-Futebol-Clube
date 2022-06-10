import { User } from './user.interface';

export default interface IUserRepository {
  findByEmail(email: string): Promise<User | null>
}
