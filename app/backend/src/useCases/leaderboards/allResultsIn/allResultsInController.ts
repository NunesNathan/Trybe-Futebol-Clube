import { NextFunction, Request, Response } from 'express';
import AllResultsInUseCase from './allResultsInUseCase';

export default class AllResultsInController {
  constructor(private allResultsInUseCase: AllResultsInUseCase) { }

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const side = req.params.side || 'both';

      const { status, data } = await this.allResultsInUseCase.execute(side);

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
}
