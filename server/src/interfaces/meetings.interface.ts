import { Document } from 'mongoose';
import { IUser } from './users.interface';

export interface IMeeting extends Document {
  message: string;
  title: string;
  status: MeetingStatus;
  trainee_id: string;
  instructor_id: string;
  meeting_date: Date;
  start_meeting: Date;
  end_meeting: Date;
  duration_meeting: String;
  users_joined: String[];
  meeting_participants: IUser[];
  room_id?: String;
}

export enum MeetingStatus {
  Pending = 'pending',
  Rejected = 'rejected',
  Accepted = 'accepted',
}
