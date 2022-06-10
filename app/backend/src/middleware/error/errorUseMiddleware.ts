import { Request, Response, NextFunction } from 'express';
import IErrorHttp from './errorHttp';

export default class ErrorMiddleware {
  public static async errorTreatment(
    { status, message }: IErrorHttp,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> {
    if (!status) return res.status(500).json({ message: 'Internal Error' });

    return res.status(status).json({ message });
  }
}
