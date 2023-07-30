import { Document } from 'mongoose';
import { Request } from 'express';

export enum rolType {
  instructor = 'instructor',
  trainee = 'trainee',
}

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role?: rolType[];
  token?: string;
}

export interface CustomRequest extends Request {
  user?: IUser;
}

export type User_T = ({ userId?: string } & Partial<IUser>) | null;
