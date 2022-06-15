import { NextFunction, Request, Response } from 'express';
import UpdateMatchUseCase from './updateMatchUseCase';

export default class allMatchesController {
  constructor(private updateMatchUseCase: UpdateMatchUseCase) { }

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { id } = req.params;

      const { status, data } = await this.updateMatchUseCase.execute({ id: +id, body: req.body });

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
}
