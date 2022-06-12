import { Router } from 'express';
import matches from '../useCases/matches/matches';

const router = Router();

router.get('/', matches.allMatches);

export default router;
