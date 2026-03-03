import { Router } from 'express';
import { getIndex, getAbout } from '../controllers/indexController';

const router = Router();

router.get('/', getIndex);
router.get('/about', getAbout);

export default router;