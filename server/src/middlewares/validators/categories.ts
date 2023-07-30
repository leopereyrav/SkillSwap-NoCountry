import { body, param } from 'express-validator';
import { errorHandler } from '../../utils/errorHandler';

const createCategoryValidator = [
  body('name')
    .notEmpty()
    .withMessage('Category name is required')
    .isString()
    .withMessage('Category name must be a string')
    .isLength({ min: 3, max: 20 })
    .withMessage('Category name must be between 3 and 20 characters'),
  body('description')
    .notEmpty()
    .withMessage('Category description is required')
    .isString()
    .withMessage('Category description must be a string')
    .isLength({ min: 3, max: 100 })
    .withMessage('Category description must be between 3 and 100 characters'),
  errorHandler,
];

const categoryByIdValidator = [
  param('categoryId')
    .notEmpty()
    .withMessage('categoryId parameter is required')
    .isString()
    .withMessage('categoryId parameter must be a string'),
  errorHandler,
];

const updateCategoryValidator = [
  param('categoryId')
    .notEmpty()
    .withMessage('categoryId parameter is required')
    .isString()
    .withMessage('categoryId parameter must be a string'),
  body('name')
    .notEmpty()
    .withMessage('Category name is required')
    .isString()
    .withMessage('Category name must be a string')
    .isLength({ min: 3, max: 20 })
    .withMessage('Category name must be between 3 and 20 characters'),
  body('description')
    .notEmpty()
    .withMessage('Category description is required')
    .isString()
    .withMessage('Category description must be a string')
    .isLength({ min: 3, max: 100 })
    .withMessage('Category description must be between 3 and 100 characters'),
  errorHandler,
];

const deleteCategoryValidator = [
  param('categoryId')
    .notEmpty()
    .withMessage('categoryId parameter is required')
    .isString()
    .withMessage('categoryId parameter must be a string'),
  errorHandler,
];

export const validator = {
  createCategoryValidator,
  categoryByIdValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
};
