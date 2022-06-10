import { NextFunction, Request, Response } from 'express';
import IErrorHttp from '../../../middleware/error/errorHttp';
import UserLoginUseCase from './UserLoginUseCase';

export default class UserLoginController {
  constructor(private userLoginUseCase: UserLoginUseCase) { }

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { status, data } = await this.userLoginUseCase.execute(req.body);

      if (typeof data === 'string') throw new IErrorHttp(status, data);

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
}
