/**Express router providing user related routes
 * @requires Express
 */
import { Router } from 'express';
import { loginUser, signupUser } from '../controllers/auth.controllers';
import { validatorLogin, validatorSignUp } from '../middlewares/validators/users';

const router = Router();

/*ROUTES*/

/*Login*/
router.post('/login', validatorLogin, loginUser);

/*Sign up*/
router.post('/signup', validatorSignUp, signupUser);

export default router;
