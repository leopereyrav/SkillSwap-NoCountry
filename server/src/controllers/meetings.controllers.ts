import { Request, Response } from 'express';
import { meetingsService } from '../services/meetings.services';
import { IMeeting } from '../interfaces/meetings.interface';

class MeetingsController {
  public async getMeetings(req: Request, res: Response) {
    try {
      const meetings = await meetingsService.getMeetings();
      return res.status(200).json({
        message: 'OK',
        data: meetings,
      });
    } catch (err: any) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  }

  public async getMeetingInstructor(req: any, res: Response) {
    try {
      const { _id: meetingId } = req.user;
      const meeting = await meetingsService.getMeetingById({ instructor_id: meetingId });

      if (!meeting) {
        return res.status(404).json({
          message: 'Meeting not found',
        });
      }

      return res.status(200).json({
        message: 'Successful meeting found',
        data: meeting,
      });
    } catch (err: any) {
      res.status(500).json({
        message: 'Server error',
        error: err,
      });
    }
  }

  public async getMeetingTrainee(req: any, res: Response) {
    try {
      const { _id: meetingId } = req.user;
      const meeting = await meetingsService.getMeetingById({ trainee_id: meetingId });

      if (!meeting) {
        return res.status(404).json({
          message: 'Meeting not found',
        });
      }

      return res.status(200).json({
        message: 'Successful meeting found',
        data: meeting,
      });
    } catch (err: any) {
      res.status(500).json({
        message: 'Server error',
        error: err,
      });
    }
  }

  public async createMeeting(req: any, res: Response) {
    try {
      const { _id: meetingId } = req.user;
      const meetingData = req.body;
      const data = { trainee_id: meetingId, ...meetingData };
      console.log(data);

      const newMeeting = await meetingsService.createMeeting(data);
      return res.status(201).json({
        message: 'Meeting successfully added',
        data: newMeeting,
      });
    } catch (err: any) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  }

  public async updateMeeting(req: Request, res: Response) {
    try {
      const meetingId: string = req.params.meetingId;
      const meetingData: IMeeting = req.body;

      const meetingUpdated = await meetingsService.updateMeeting(meetingId, meetingData);

      return res.status(200).json({
        message: 'Meeting successfully updated',
        data: meetingUpdated,
      });
    } catch (err: any) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  }

  public async deleteMeeting(req: Request, res: Response) {
    try {
      const meetingId: string = req.params.meetingId;
      await meetingsService.deleteMeeting(meetingId);
      return res.status(200).json({
        message: 'Meeting successfully deleted',
      });
    } catch (err: any) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  }
}

export const meetingsController = new MeetingsController();
