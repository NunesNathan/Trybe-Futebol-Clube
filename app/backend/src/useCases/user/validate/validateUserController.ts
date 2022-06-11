import { NextFunction, Request, Response } from 'express';
import IErrorHttp from '../../../middleware/error/errorHttp';
import ValidateUserUseCase from './validateUserUseCase';

export default class ValidateUserController {
  constructor(private validateUserUseCase: ValidateUserUseCase) { }

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { authorization } = req.headers;

      if (!authorization) throw new IErrorHttp(401, 'Unauthorized');

      const { status, data } = await this.validateUserUseCase.execute(authorization);

      res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
}
