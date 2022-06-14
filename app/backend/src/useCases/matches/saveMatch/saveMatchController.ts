import { NextFunction, Request, Response } from 'express';
import SaveMatchUseCase from './saveMatchUseCase';

export default class allMatchesController {
  constructor(private saveMatchUseCase: SaveMatchUseCase) { }

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { status, data } = await this.saveMatchUseCase.execute(req.body);

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
}
