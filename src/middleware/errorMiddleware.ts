import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

//Called when no route matched
export const errorMiddleware = (req: Request, res: Response, next: NextFunction) => {
  next(createError(404, `Route ${req.originalUrl} not found`));
};
// check for 404 if it was not and what it is used req.originalUrl.

