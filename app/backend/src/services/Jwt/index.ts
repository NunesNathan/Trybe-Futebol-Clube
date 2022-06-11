import * as jwt from 'jsonwebtoken';
import jwtConfig from '../../config/jwtConfig';
import { User, UserData } from '../../interfaces/user.interface';

export default class JwtLogin {
  public verify = (token: string): User | string => jwt.verify(token, jwtConfig.secret) as User;

  public sign = (data: UserData): string => jwt.sign({ data }, jwtConfig.secret, jwtConfig.options);
}
