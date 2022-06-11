import { Team, Teams } from '../teams.interface';
import { UserDTO, UserToLogin } from '../user.interface';

export type DTO = UserDTO | string | number;

export type caseResponse = {
  status: number;
  data: UserToLogin | string | Teams | Team;
};
