import { body } from 'express-validator';
import { errorHandler } from '../../utils/errorHandler';

const validatorLogin = [
  body()
    .custom((_value, { req }) => {
      const allowedFields = ['email', 'password'];
      const receivedFields = Object.keys(req.body);
      return receivedFields.every((field) => allowedFields.includes(field));
    })
    .withMessage('Invalid Fields'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email required')
    .bail()
    .isEmail()
    .withMessage('Email is not valid'),

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

const validatorSignUp = [
  body()
    .custom((_values, { req }) => {
      const allowedFields = ['username', 'email', 'password'];
      const receivedFields = Object.keys(req.body);
      const hasOnlyAllowedFields = receivedFields.every((field) => allowedFields.includes(field));
      return hasOnlyAllowedFields;
    })
    .withMessage('Invalid Fields'),

  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username required')
    .bail()
    .isString()
    .withMessage('Username is not valid'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email required')
    .bail()
    .isEmail()
    .withMessage('Email is not valid'),

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

export { validatorLogin, validatorSignUp };
