import * as jwt from 'jsonwebtoken';
import jwtConfig from '../../config/jwtConfig';
import { UserData } from '../../interfaces/user.interface';

export default class JwtLogin {
  public verify = (token: string): UserData | null => (
    jwt.verify(token, jwtConfig.secret)
  ) as UserData;

  public sign = (data: UserData): string => jwt.sign({ data }, jwtConfig.secret, jwtConfig.options);
}
