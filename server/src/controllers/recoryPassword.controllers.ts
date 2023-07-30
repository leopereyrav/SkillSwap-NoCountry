import { Request, Response } from 'express';

import { jwtUtils } from '../utils/jwtUtils';
import {
  findUserByEmail,
  findUserByToken,
  updateUserToken,
  updateUserPassword,
} from '../services/auth.services';
import { config } from '../config/config';
import { sendEmail } from '../utils/email/sendEmail';

const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      msg: 'Required fields',
      fields: { email: 'string*' },
    });
  }

  try {
    const user = await findUserByEmail(email);
    if (user) {
      const userId = user._id.valueOf().toString();
      const { username, email, role } = user;

      //GENERATE TOKEN
      const token = jwtUtils.generateAccessToken(
        { userId, username, email, role },
        config.JWT.JWT_RECOVERY_PASSWORD_EXPIRES
      );

      //SAVE TOKEN IN USER
      await updateUserToken(userId, token);

      const emailUser = {
        userId,
        username,
        email,
        token,
      };
      //SEND EMAIL
      sendEmail.sendRecoveryPassword('Change Password', emailUser);

      return res.status(200).json({ msg: 'Ok, check your email' });
    }

    return res.status(404).json({ msg: 'User not found' });
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};

const recoveryPasswordUI = async (req: Request, res: Response) => {
  const token = req.params.token;
  //Enviar al cliente con el mismo token
  res.redirect(`http://localhost:3000/recovery_password/${token}`);
};

const recoveryPassword = async (req: Request, res: Response) => {
  const token = req.params.token;
  const { newPassword } = req.body;

  if (!newPassword && !token) {
    return res.status(400).json({
      msg: 'Required fields',
      fields: { newPassword: 'string*' },
    });
  }
  try {
    //TOKEN EXPIRE VALIDATION
    jwtUtils.verifyToken(token);
    const user = await findUserByToken(token);
    console.log(user);
    if (user) {
      const userUpdated = await updateUserPassword(user.id, newPassword);
      return res.status(200).json({ msg: 'OK, you can log in with new password', userUpdated });
    }

    return res.status(404).json({ msg: 'User not found' });
  } catch (error) {
    return res.status(401).json({ msg: 'Invalid authentication token or unauthorized user', error });
  }
};

export { forgotPassword, recoveryPassword, recoveryPasswordUI };
