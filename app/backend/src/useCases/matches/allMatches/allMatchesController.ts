import { NextFunction, Request, Response } from 'express';
import AllMatchesUseCase from './allMatchesUseCase';

export default class allMatchesController {
  constructor(private allMatchesUseCase: AllMatchesUseCase) { }

  public async handle(_req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { status, data } = await this.allMatchesUseCase.execute();

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
}
