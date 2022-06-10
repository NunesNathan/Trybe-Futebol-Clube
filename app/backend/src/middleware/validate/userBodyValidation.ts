import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import IErrorHttp from '../error/errorHttp';
import Middleware from '../../interfaces/generics/middleware.abstract';

export default class UserValidation implements Middleware {
  private createSchema: Joi.ObjectSchema;

  constructor() {
    this.createSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    }).required();
  }

  public async handle(req: Request, _res: Response, next: NextFunction)
    : Promise<void> {
    try {
      const { error } = this.createSchema.validate(req.body);

      if (error) throw new IErrorHttp(400, 'All fields must be filled');

      return next();
    } catch (error) {
      next(error);
    }
  }
}
