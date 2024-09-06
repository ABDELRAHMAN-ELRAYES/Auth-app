import { Request, Response, NextFunction } from 'express';
import User from './../models/userModel';
import { catchAsync } from '../utils/catchAsync';

export const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      results: users.length,
      users,
    });
  }
);
