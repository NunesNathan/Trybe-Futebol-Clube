import { NextFunction, Request, Response } from 'express';

export default abstract class Middleware {
  public abstract handle(req: Request, _res: Response, next: NextFunction)
  : Promise<void>;
}
