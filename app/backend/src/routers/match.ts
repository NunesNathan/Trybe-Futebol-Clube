import { Router } from 'express';
import matches from '../useCases/matches/matches';

const router = Router();

router.get('/', matches.allMatches)
  .post('/', matches.saveMatch)
  .patch('/:id/finish', matches.finishMatch);

export default router;
