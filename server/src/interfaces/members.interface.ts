import { Document, Schema } from 'mongoose';

export interface IMember extends Document {
  name: string;
  last_name: string;
  country: string;
  preferences: { name: string, categoryId: string}[];
  avatar: object;
  skills: {
    name: string;
    categoryId: string;
    description: string;
    level: 'basico' | 'intermedio' | 'avanzado';
  }[];
  user: Schema.Types.ObjectId;
}
