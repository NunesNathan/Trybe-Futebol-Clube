import { Router } from 'express';
import teams from '../useCases/teams/teams';

const router = Router();

router.get('/', teams.allTeams)
  .get('/:id', teams.oneTeam);

export default router;
