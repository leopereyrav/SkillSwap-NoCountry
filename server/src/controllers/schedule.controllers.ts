import { Request, Response } from 'express';
import {
  getAllSchedulesService,
  getScheduleService,
  createScheduleService,
  updateScheduleService,
  deleteScheduleService,
} from '../services/schedule.services';

const getAllSchedules = async (req: Request, res: Response) => {
  try {
    const schedules = await getAllSchedulesService();
    if (!schedules) return res.status(404).send('Schedules No Found');
    res.status(200).json({ message: 'Successfully', data: schedules });
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
};

const getSchedule = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const findSchedule = await getScheduleService(id);
    if (!findSchedule) return res.status(404).send('Schedule No Found');
    res.status(200).json({ message: 'Successfully', data: findSchedule });
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
};

const createSchedule = async (req: Request, res: Response) => {
  try {
    const { day_of_week, start_time, end_time, user } = req.body;
    const ScheduleCreate = await createScheduleService(day_of_week, start_time, end_time, user);
    res.status(200).json({ message: 'Schedule created', ScheduleCreate });
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
};

const updateSchedule = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { day_of_week, start_time, end_time } = req.body;
    const scheduleUpdate = await updateScheduleService(day_of_week, start_time, end_time, id);
    if (!scheduleUpdate) return res.status(404).send('Schedule No Found');
    res.status(200).json({ message: 'Updated schedule', update: scheduleUpdate });
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
};

const deleteSchedule = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const scheduleDelete = await deleteScheduleService(id);
    if (!scheduleDelete) return res.status(404).send('Schedule No Found');
    res.status(200).json({ message: 'Deleted schedule', scheduleDelete });
  } catch (error) {
    return res.status(500).send(`Internal Server Error: ${error}`);
  }
};

export { getAllSchedules, getSchedule, createSchedule, updateSchedule, deleteSchedule };
