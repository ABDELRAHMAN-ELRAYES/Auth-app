import { Router } from 'express';
import { login, signup, protect } from './../controllers/authController';
import { getAllUsers } from '../controllers/userController';
const userRouter = Router();

userRouter.route('/signup').post(signup);
userRouter.route('/login').post(login);
userRouter.route('/').get(protect, getAllUsers);

export default userRouter;
