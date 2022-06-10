import { Router } from 'express';
import login from '../useCases/user/login';

const router = Router();

router.post('/', login.access);

export default router;
