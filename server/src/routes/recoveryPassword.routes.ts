import { Router } from 'express';
import {
  forgotPassword,
  recoveryPassword,
  recoveryPasswordUI,
} from '../controllers/recoryPassword.controllers';

const router = Router();

router.post('/forgot_password', forgotPassword);

router.route('/recovery_password/:token').get(recoveryPasswordUI).put(recoveryPassword);

export default router;

//Referencias:
// Mas info sobre jsonwebtoken: https://stackoverflow.com/questions/56855440/in-jwt-the-sign-method#:~:text=If%20you%20read,log(asyncToken)%3B%0A%7D)%3B
// Como enviar correo con nodemailer: https://medium.com/@chiragmehta900/how-to-send-mail-in-node-js-with-nodemailer-in-typescript-889cc46d1437
