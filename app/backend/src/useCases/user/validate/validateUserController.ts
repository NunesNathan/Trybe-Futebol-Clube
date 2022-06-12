import { NextFunction, Request, Response } from 'express';
import ValidateUserUseCase from './validateUserUseCase';

export default class ValidateUserController {
  constructor(private validateUserUseCase: ValidateUserUseCase) { }

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { authorized } = res.locals;

      const { status, data } = await this.validateUserUseCase.execute(authorized.email);

      res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
}
