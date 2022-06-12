import { Request, Response, NextFunction } from 'express';
import IErrorHttp from '../error/errorHttp';
import Middleware from '../../interfaces/generics/middleware.abstract';
import JwtLogin from '../../services/Jwt';

export default class JwtValidation implements Middleware {
  private jwt: JwtLogin;

  constructor() {
    this.jwt = new JwtLogin();
  }

  public async handle(req: Request, res: Response, next: NextFunction)
    : Promise<void> {
    try {
      const { authorization } = req.headers;

      if (!authorization) throw new IErrorHttp(404, 'Bad Request');

      const authorized = this.jwt.verify(authorization);

      if (!authorized) throw new IErrorHttp(401, 'Unauthorized');

      res.locals.authorized = authorized;

      return next();
    } catch (error) {
      next(error);
    }
  }
}
