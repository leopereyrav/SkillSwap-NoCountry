import { Request, Response, NextFunction } from 'express';
import { validationResult, Result } from 'express-validator';

export const errorHandler = (req: Request, res: Response, next: NextFunction) => {
  const errors: Result = validationResult(req);

  if (!errors.isEmpty()) {
    const firstErrorMessage = errors.array()[0].msg;
    return res.status(400).json({
      message: 'Bad request',
      error: firstErrorMessage,
    });
  }
  next();
};
