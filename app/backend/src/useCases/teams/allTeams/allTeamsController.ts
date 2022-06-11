import { NextFunction, Request, Response } from 'express';
import AllTeamsUseCase from './allTeamsUseCase';

export default class AllTeamsController {
  constructor(private allTeamsUseCase: AllTeamsUseCase) { }

  public async handle(_req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { status, data } = await this.allTeamsUseCase.execute();

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
}
