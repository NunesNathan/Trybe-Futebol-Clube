import { NextFunction, Request, Response } from 'express';
import OneTeamUseCase from './oneTeamUseCase';

export default class OneTeamController {
  constructor(private oneTeamUseCase: OneTeamUseCase) { }

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { id } = req.params;

      const { status, data } = await this.oneTeamUseCase.execute(+id);

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
}
