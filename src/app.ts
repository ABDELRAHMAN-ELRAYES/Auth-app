import express, { Request, Response, NextFunction } from 'express';
import {
  morganMiddleware,
  bodyParser,
  GlobalErrorHandlerMiddleware,
} from './middlewares/middlewares';
import userRouter from './routes/userRoutes';
import { ErrorType } from './utils/ErrorType';

const app = express();
app.use(morganMiddleware);
app.use(bodyParser);

app.use('/api/v1/users', userRouter);
/* app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new ErrorType(
    404,
    `This route provided ${req.originalUrl} not found `
  ));
}); */
app.use(GlobalErrorHandlerMiddleware);

export default app;