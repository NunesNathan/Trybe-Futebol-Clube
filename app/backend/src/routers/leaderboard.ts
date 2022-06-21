import { Router } from 'express';
import leaderboards from '../useCases/leaderboards/leaderboards';

const router = Router();

router.get('/:side', leaderboards.allIn)
  .get('/', leaderboards.allIn);

export default router;
