import Schedule from '../models/schedules.models';
import { UpdateSchedule } from 'interfaces/updateSchedules.interface';

const getAllSchedulesService = async () => {
  const schedulesFound = await Schedule.find();
  return schedulesFound;
};

const getScheduleService = async (id: string) => {
  const scheduleFound = await Schedule.find();

  if (scheduleFound) {
    const scheduleUser = scheduleFound.filter((shedule) => shedule.user.toString() == id);

    if (scheduleUser.length) return scheduleUser;
    return null;
  }

  return null;
};

const createScheduleService = async (
  day_of_week: string,
  start_time: string,
  end_time: string,
  user: string
) => {
  const create = await Schedule.create({ day_of_week, start_time, end_time, user });
  return create;
};

const updateScheduleService = async (
  day_of_week: string,
  start_time: string,
  end_time: string,
  id: string
) => {
  const data: UpdateSchedule = { day_of_week, start_time, end_time };
  const update = await Schedule.findOneAndUpdate({ _id: id }, data, { new: true });

  return update;
};

const deleteScheduleService = async (id: string) => {
  const data = await Schedule.findOneAndDelete({ _id: id });

  return data;
};

export {
  getAllSchedulesService,
  getScheduleService,
  createScheduleService,
  updateScheduleService,
  deleteScheduleService,
};
