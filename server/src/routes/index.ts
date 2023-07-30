import { Router, Response } from 'express';
import authRouter from './auth.routes';
import recoveryPassword from './recoveryPassword.routes';
import userRouter from './users.routes';
import memberRouter from './members.routes';
import categoriesRouter from './categories.routes';
import scheduleRouter from './schedule.routes';
import meetingRouter from './meetings.routes';
import searchRouter from './search.routes';
import rooms from './rooms.routes';

const router = Router();

router.get('/health', (_, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

router.use('/auth', authRouter);
router.use('/', recoveryPassword);
router.use('/members', memberRouter);
router.use('/categories', categoriesRouter);
router.use('/schedule', scheduleRouter);
router.use('/users', userRouter);
router.use('/meetings', meetingRouter);
router.use('/', searchRouter);
router.use('/rooms', rooms);

export default router;
