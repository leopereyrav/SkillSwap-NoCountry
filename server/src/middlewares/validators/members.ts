import { body } from 'express-validator';
import { errorHandler } from '../../utils/errorHandler';

const validationMember = [
  body()
    .custom((_value, { req }) => {
      const allowedFields = ['name', 'last_name', 'country', 'preferences', 'avatar', 'skills', 'user'];
      const receivedFields = Object.keys(req.body);
      return receivedFields.every((field) => allowedFields.includes(field));
    })
    .withMessage(
      'Missing Fields: {"name", "last_name", "country", "preferences", "avatar", "skills", "user"}'
    ),

  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name required')
    .bail()
    .isString()
    .withMessage('Name is not valid')
    .isLength({ min: 3, max: 30 })
    .withMessage('Last_name must have more than 3 characters and less than 30 characters'),

  body('last_name')
    .trim()
    .notEmpty()
    .withMessage('Last_name required')
    .bail()
    .isString()
    .withMessage('Last_name type is not valid')
    .isLength({ min: 3, max: 30 })
    .withMessage('Last_name must have more than 3 characters and less than 30 characters'),

  body('country')
    .trim()
    .notEmpty()
    .withMessage('Country required')
    .bail()
    .isString()
    .withMessage('Country type is not valid')
    .isLength({ min: 4, max: 25 })
    .withMessage('Country must have more than 4 characters and less than 25 characters'),

  body('preferences.*.name')
    .trim()
    .notEmpty()
    .withMessage('Preference name is required')
    .bail()
    .isString()
    .withMessage('Preference name type is not valid')
    .isLength({ min: 5, max: 50 })
    .withMessage('Preference name must have more than 5 characters and less than 50 characters'),

  body('skills.*.name')
    .trim()
    .notEmpty()
    .withMessage('Title required')
    .bail()
    .isString()
    .withMessage('Title type is not valid')
    .isLength({ min: 5, max: 50 })
    .withMessage('Title must have more than 5 characters and less than 50 characters'),

  body('skills.*.categoryId')
    .trim()
    .notEmpty()
    .withMessage('Category required')
    .bail()
    .isString()
    .withMessage('Category type is not valid')
    .isLength({ min: 5, max: 50 })
    .withMessage('Category must have more than 5 characters and less than 50 characters'),

  body('skills.*.description')
    .trim()
    .notEmpty()
    .withMessage('Description required')
    .bail()
    .isString()
    .withMessage('Description type is not valid')
    .isLength({ min: 5, max: 50 })
    .withMessage('Description must have more than 5 characters and less than 50 characters'),

  body('skills.*.level')
    .trim()
    .notEmpty()
    .withMessage('Level required')
    .custom((vale) => {
      const allowedLevels = ['basico', 'intermedio', 'avanzado'];
      return allowedLevels.includes(vale);
    })
    .withMessage(`Level must be one of the following values: basico, intermedio, avanzado`),
  errorHandler,
];

const validationCreateMember = [
  body('user')
    .trim()
    .notEmpty()
    .withMessage('User required')
    .bail()
    .isString()
    .withMessage('User type is not valid'),
  errorHandler,
];

export { validationMember, validationCreateMember };
