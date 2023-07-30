import bcrypt from 'bcryptjs';
import User from '../models/users.models';
import { comparePassword } from '../utils/handdlePassword';
import { jwtUtils } from '../utils/jwtUtils';
import { TokenPayload } from '../interfaces/tokenPayload.interface';
import { config } from '../config/config';

const findUserByEmail = async (email: string) => {
  try {
    if (email) {
      return User.findOne({ email });
    }
  } catch (error) {
    console.error(`Error finding user by email: ${error}`);
    return null;
  }
};

const findUserByToken = async (token: string) => {
  try {
    return User.findOne({ token });
  } catch (error) {
    throw new Error(`User not found! - ${error}`);
  }
};

const updateUserPassword = async (id: string, newPassword: string) => {
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    return User.findByIdAndUpdate(id, { password: hashedPassword });
  } catch (error) {
    throw new Error(`Something went wrong while tried to update user password! - ${error}`);
  }
};

const updateUserToken = async (id: string, token: string) => {
  try {
    return User.findByIdAndUpdate(id, { token });
  } catch (error) {
    throw new Error(`Something went wrong when tried to update user token! - ${error}`);
  }
};

const fetchLogin = async (password: string, email: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Conflict: User not found!');

  const comparedPassword = await comparePassword(user.password, password);
  if (!comparedPassword) throw new Error('Conflict: invalid email or password');

  const expiresIn = config.JWT.JWT_EXPIRES_IN;
  const payload: TokenPayload = {
    userId: user.id,
    role: user.role,
  };
  const token = jwtUtils.generateAccessToken(payload, expiresIn);

  const response = {
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    token,
  };
  return response;
};

const fetchSignUp = async (username: string, email: string, password: string) => {
  try {
    const user = await findUserByEmail(email);

    if (user) {
      throw new Error('Conflict: Email already exists!');
    }

    const expiresIn = config.JWT.JWT_EXPIRES_IN;
    const hash = await bcrypt.hash(password, 10);
    const data = await User.create({ username, email, password: hash });

    const payload: TokenPayload = {
      userId: data.id,
      role: data.role,
    };
    const token = jwtUtils.generateAccessToken(payload, expiresIn);

    const response = {
      id: data.id,
      username: data.username,
      email: data.email,
      token,
    };
    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export { fetchLogin, fetchSignUp, findUserByEmail, findUserByToken, updateUserPassword, updateUserToken };
