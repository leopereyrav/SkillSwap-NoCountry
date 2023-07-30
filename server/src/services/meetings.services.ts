import Meeting from '../models/meetings.models';
import { IMeeting } from '../interfaces/meetings.interface';

class MeetingsService {
  public async getMeetings() {
    try {
      const meetings = await Meeting.find();
      return meetings;
    } catch (err: any) {
      console.log('Error in the Meetings Service', err);
    }
  }

  public async getMeetingById(role: { [key: string]: string }) {
    try {
      const meeting = await Meeting.find(role);
      if (!meeting) {
        console.log('Meeting not found');
        throw new Error('Meeting not found');
      }
      return meeting;
    } catch (err: any) {
      console.log('Error in the Meeting Service', err);
    }
  }

  public async createMeeting(meetingData: IMeeting) {
    try {
      const newMeeting = await Meeting.create(meetingData);
      return newMeeting;
    } catch (err: any) {
      console.log('Error in the Meeting Service', err);
    }
  }

  public async updateMeeting(meetingId: string, meetingData: IMeeting) {
    try {
      const meetingUpdated = await Meeting.findByIdAndUpdate({ _id: meetingId }, meetingData, {
        new: true,
      });
      if (!meetingUpdated) {
        console.log('Meeting not found');
        throw new Error('Meeting not found');
      }

      return meetingUpdated;
    } catch (err: any) {
      console.log('Error in the Meeting Service', err);
    }
  }

  public async deleteMeeting(meetingId: string) {
    try {
      const meetingDeleted = await Meeting.findByIdAndDelete(meetingId);
      if (!meetingDeleted) {
        console.log('Meeting not found');
        throw new Error('Meeting not found');
      }
      return;
    } catch (err: any) {
      console.log('Error in the Meeting Service', err);
    }
  }
}

export const meetingsService = new MeetingsService();
