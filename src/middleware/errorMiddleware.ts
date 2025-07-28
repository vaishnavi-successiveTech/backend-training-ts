// import { Request, Response, NextFunction } from 'express';
// import createError from 'http-errors';

// //Called when no route matched
// export const errorMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   next(createError(404, `Route ${req.originalUrl} not found`));
// };
// // check for 404 if it was not and what it is used req.originalUrl.

import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
// Error-handling middleware

export const errorHandleMiddleware = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  const message = err.message || "Something went wrong";

  if (statusCode === 400) {
    res.status(400).json({
      success: false,
      error: "Bad Request",
      message,
    });
  } else if (statusCode === 401) {
    res.status(401).json({
      success: false,
      error: "Unauthorized",
      message,
    });
  } else if (statusCode === 403) {
    res.status(403).json({
      success: false,
      error: "Forbidden",
      message,
    });
  } else if (statusCode === 404) {
    res.status(404).json({
      success: false,
      error: "Not Found",
      message,
    });
  } else if (statusCode === 409) {
    res.status(409).json({
      success: false,
      error: "Conflict",
      message,
    });
  } else if (statusCode === 422) {
    res.status(422).json({
      success: false,
      error: "Validation Error",
      message,
    });
  } else if (statusCode === 500) {
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message,
    });
  } else {
   
    res.status(statusCode).json({
      success: false,
      error: "Unknown Error",
      message,
    });
  }
};

