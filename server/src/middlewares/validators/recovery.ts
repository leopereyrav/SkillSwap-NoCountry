import { body } from 'express-validator';
import { errorHandler } from '../../utils/errorHandler';

const validatorEmail = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email required')
    .bail()
    .isEmail()
    .withMessage('Email is not valid'),
  errorHandler,
];

const validatorNewPassword = [
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password required')
    .bail()
    .isString()
    .withMessage('Password type is not valid')
    .isLength({ min: 8, max: 100 })
    .withMessage('Password must have more than 8 characters and less than 100 characters  '),
  errorHandler,
];

export { validatorEmail, validatorNewPassword };
