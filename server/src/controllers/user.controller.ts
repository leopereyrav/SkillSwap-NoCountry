import { Request, Response } from 'express';
import { getAllusers, getUserById, filterUsers } from '../services/user.services';

const findAllUser = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 5;
    const users = await getAllusers(page, limit);
    return res.status(200).json(users);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

const searchUsersByFilters = async (req: Request, res: Response) => {
  try {
    const filters = req.body || {};
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 5;
    const users = await filterUsers(filters, page, limit);
    return res.status(200).json(users);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

const findUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await getUserById(id);
    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export { findAllUser, findUserById, searchUsersByFilters };
