import { body, param } from 'express-validator';
import { errorHandler } from '../../utils/errorHandler';

const createMeetingValidator = [
  body('message')
    .notEmpty()
    .withMessage('The message is required')
    .isString()
    .withMessage('The message must be a string')
    .isLength({ min: 3, max: 500 })
    .withMessage('The message must be between 3 and 500 characters'),
  body('title')
    .optional()
    .isString()
    .withMessage('The title must be a string')
    .isLength({ min: 3, max: 100 })
    .withMessage('The title must be between 3 and 100 characters'),
  // body('status')
  //   .isIn(['pending', 'rejected', 'accepted'])
  //   .withMessage('status must be pending, rejected or accepted'),
  body('instructor_id')
    .notEmpty()
    .withMessage('instructor_id is required')
    .isString()
    .withMessage('instructor_id must be a string'),
  body('meeting_date').notEmpty().withMessage('meeting_date is required'),
  errorHandler,
];

const meetingByIdValidator = [
  param('meetingId')
    .notEmpty()
    .withMessage('meetingId parameter is required')
    .isString()
    .withMessage('meetingId parameter must be a string'),
  errorHandler,
];

const updateMeetingValidator = [
  param('meetingId')
    .notEmpty()
    .withMessage('meetingId parameter is required')
    .isString()
    .withMessage('meetingId parameter must be a string'),
  body('message')
    .optional()
    .isString()
    .withMessage('The message must be a string')
    .isLength({ min: 3, max: 500 })
    .withMessage('The message must be between 3 and 500 characters'),
  body('title')
    .optional()
    .isString()
    .withMessage('The title must be a string')
    .isLength({ min: 3, max: 100 })
    .withMessage('The title must be between 3 and 100 characters'),
  body('status')
    .optional()
    .isIn(['pending', 'rejected', 'accepted'])
    .withMessage('status must be pending, rejected or accepted'),
  errorHandler,
];

const deleteMeetingValidator = [
  param('meetingId')
    .notEmpty()
    .withMessage('meetingId parameter is required')
    .isString()
    .withMessage('meetingId parameter must be a string'),
  errorHandler,
];

export const validator = {
  createMeetingValidator,
  meetingByIdValidator,
  updateMeetingValidator,
  deleteMeetingValidator,
};
