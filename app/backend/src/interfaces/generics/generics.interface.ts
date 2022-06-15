import { Matches, ModelMatch, ReqSaveMatch, UpdateBody } from '../matches.interface';
import { Team, Teams } from '../teams.interface';
import { UserDTO, UserToLogin } from '../user.interface';

export type DTO = UserDTO | string | number | ReqSaveMatch | UpdateBody;

export type caseResponse = {
  status: number;
  data: UserToLogin | string | Teams | Team | Matches | ModelMatch;
};
