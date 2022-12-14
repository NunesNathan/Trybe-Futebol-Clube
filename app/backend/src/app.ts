import * as express from 'express';
import ErrorMiddleware from './middleware/error/errorUseMiddleware';
import userRoutes from './routers/user';
import teamRoutes from './routers/team';
import matchRoutes from './routers/match';
import leaderboardRoutes from './routers/leaderboard';

class App {
  public app: express.Express = express();

  constructor() {
    this.config();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use('/login', userRoutes);
    this.app.use('/teams', teamRoutes);
    this.app.use('/matches', matchRoutes);
    this.app.use('/leaderboard', leaderboardRoutes);
    this.app.use(ErrorMiddleware.errorTreatment);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => {
      console.log(`server working in ${PORT}`);
    });
  }
}

export { App };

export const { app } = new App();
