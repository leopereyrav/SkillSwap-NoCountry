import { Document, Schema } from 'mongoose';
import { IUser } from '../interfaces/users.interface';

export interface ISchedule extends Document {
  day_of_week: Days;
  start_time: string;
  end_time: string;
  user: Schema.Types.ObjectId | IUser;
}

export type Days = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
