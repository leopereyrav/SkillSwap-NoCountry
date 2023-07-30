import { findAllUser, findUserById } from '../controllers/user.controller';
import { searchController } from '../controllers/search.controllers';
import { Router } from 'express';

const router = Router();

/* Get All Users */
router.get('/', findAllUser);

/* Search users */
router.get('/search', searchController.search)

/* Get User by Id */
router.get('/:id', findUserById);

export default router;
