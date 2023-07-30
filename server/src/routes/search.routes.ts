import { Router } from 'express';
import { searchController } from '../controllers/search.controllers';
import { authenticate } from '../middlewares/auth/authenticate';

const router = Router();

router.get('/search', searchController.search);

export default router;
