import { Router } from 'express';
import login from '../useCases/user/userLogin';

const router = Router();

router.post('/', login.access)
  .get('/validate', login.validate);

export default router;
