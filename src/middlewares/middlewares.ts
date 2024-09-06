import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import express from 'express';
import { error } from './../interfaces/error';
import cookieParser from 'cookie-parser';

export const bodyParser = express.json();
export const morganMiddleware = morgan('dev');
export const cookieParserMiddleware = cookieParser();
export const GlobalErrorHandlerMiddleware = (
  err: error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'Error';
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};
