import { NextFunction, Request, Response } from 'express';
import FinishMatchUseCase from './finishMatchUseCase';

export default class allMatchesController {
  constructor(private finishMatchUseCase: FinishMatchUseCase) { }

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { id } = req.params;

      const { status, data } = await this.finishMatchUseCase.execute(+id);

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
}
