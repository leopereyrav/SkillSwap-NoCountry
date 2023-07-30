import { Router } from 'express';
import {
  createMembers,
  getMembers,
  getOneMember,
  updateController,
} from '../controllers/members.controllers';
import fileUpload from 'express-fileupload';
import { authenticate } from '../middlewares/auth/authenticate';
import { validationMember, validationCreateMember } from '../middlewares/validators/members';

const router = Router();

router.get('/', getMembers);
router.get('/:id', getOneMember);
router.post(
  '/',
  authenticate,
  /*fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads',
  }),*/
  validationMember,
  validationCreateMember,
  createMembers
);
router.put('/', authenticate, validationMember, updateController);

export default router;
