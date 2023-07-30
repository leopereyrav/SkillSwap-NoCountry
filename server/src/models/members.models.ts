import { Schema, model } from 'mongoose';
import { IMember } from '../interfaces/members.interface';

const memberSchema = new Schema<IMember>({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  preferences: [
    {
      name: {
        type: String,
        required: true,
      },
      categoryId: {
        type: String,
        required: true,
      },
    },
  ],
  avatar: {
    public_id: String,
    secure_url: String,
  },
  skills: [
    {
      name: {
        type: String,
        required: true,
      },
      categoryId: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      level: {
        type: String,
        enum: ['basico', 'intermedio', 'avanzado'],
        required: true,
      },
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

memberSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Member = model<IMember>('Member', memberSchema);

export default Member;
