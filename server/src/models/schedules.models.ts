import { Schema, model } from 'mongoose';
import { ISchedule } from '../interfaces/schedules.interface';
import { Days } from '../interfaces/schedules.interface';

const scheduleSchema = new Schema<ISchedule>({
  day_of_week: {
    type: String,
    required: true,
  },
  start_time: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

scheduleSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Schedule = model<ISchedule>('Schedule', scheduleSchema);

export default Schedule;
