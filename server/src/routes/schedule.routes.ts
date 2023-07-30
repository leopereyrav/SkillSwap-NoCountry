/**Express router providing user related routes
 * @requires Express
 */
import { Router } from 'express';
import {
  getAllSchedules,
  getSchedule,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} from '../controllers/schedule.controllers';
import { validatorSchedule, validatorUpdateSchedule } from '../middlewares/validators/schedule';

const router = Router();

/*ROUTES*/

/*Get schedule by id*/
router.get('/:id', getSchedule);

/*Get all schedules*/
router.get('/', getAllSchedules);

/*Create schedule*/
router.post('/', validatorSchedule, createSchedule);

/*Upate schedule*/
router.patch('/:id', validatorUpdateSchedule, updateSchedule);

/*Delete schedule*/
router.delete('/:id', deleteSchedule);

export default router;
