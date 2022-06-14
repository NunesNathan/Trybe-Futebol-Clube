import { Matches, ModelMatch, ReqSaveMatch } from '../matches.interface';
import { Team, Teams } from '../teams.interface';
import { UserDTO, UserToLogin } from '../user.interface';

export type DTO = UserDTO | string | number | ReqSaveMatch;

export type caseResponse = {
  status: number;
  data: UserToLogin | string | Teams | Team | Matches | ModelMatch;
};
