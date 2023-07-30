import { Schema, model } from 'mongoose';
import { IMeeting, MeetingStatus } from '../interfaces/meetings.interface';
const { v4: uuidv4 } = require('uuid');

const meetingSchema = new Schema<IMeeting>({
  message: {
    type: String,
    trim: true,
  },
  title: {
    type: String,
  },
  status: {
    type: String,
    enum: Object.values(MeetingStatus),
    default: MeetingStatus.Pending,
  },
  trainee_id: {
    type: String,
    required: true,
  },
  instructor_id: {
    type: String,
    required: true,
  },
  meeting_date: {
    type: Date,
    required: true,
    trim: true,
  },
  start_meeting: {
    type: Date,
  },
  end_meeting: {
    type: Date,
  },
  duration_meeting: {
    type: String,
  },
  users_joined: {
    type: [String],
    default: [],
  },
  meeting_participants: {
    type: [{}],
    default: [],
  },
  room_id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
});

meetingSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Meeting = model<IMeeting>('Meeting', meetingSchema);
export default Meeting;
