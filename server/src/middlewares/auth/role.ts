import { Response, NextFunction } from 'express';
import { CustomRequest } from '../../interfaces/users.interface';
export const checkRole = (roles: any[]) => async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const { user } = req;
    const rolesByUser = user?.role;
    const checkValueRol = roles.some((rolSingle) => rolesByUser?.includes(rolSingle));

    if (!checkValueRol) {
      res.status(403).json({ message: 'USER_NOT_PERMISSIONS' });
      return;
    }
    next();
  } catch (e) {
    res.status(403).json({ message: 'ERROR_PREMISSIONS' });
  }
};
