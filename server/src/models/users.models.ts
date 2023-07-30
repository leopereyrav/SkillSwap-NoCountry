import { model, Schema } from 'mongoose';
import { IUser, rolType } from '../interfaces/users.interface';

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
  },
  role: {
    type: [String],
    default: [rolType.trainee],
  },
  token: {
    type: String,
  },
});

userSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const User = model<IUser>('User', userSchema);
export default User;
