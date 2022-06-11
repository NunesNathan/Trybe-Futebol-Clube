import * as jwt from 'jsonwebtoken';
import jwtConfig from '../../config/jwtConfig';
import { DataPayload, UserData } from '../../interfaces/user.interface';

export default class JwtLogin {
  public verify = (token: string): UserData | null => {
    try {
      const { data } = jwt.verify(token, jwtConfig.secret) as DataPayload;

      return data;
    } catch (error) {
      return null;
    }
  };

  public sign = (data: UserData): string => jwt.sign({ data }, jwtConfig.secret, jwtConfig.options);
}
