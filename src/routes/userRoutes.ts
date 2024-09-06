import { Router } from 'express';
import { login, signup } from './../controllers/authController';

const userRouter = Router();

userRouter.route('/signup').post(signup);
userRouter.route('/login').post(login);

export default userRouter;
