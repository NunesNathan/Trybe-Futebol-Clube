import { UserToLogin } from './user.interface';

export default interface ILoginUseCaseResponse {
  status: number;
  data: UserToLogin | string;
}
