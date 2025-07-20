import { NextFunction,Request,Response } from "express";

export const asyncErrorRoute = async (req:Request, res:Response, next:NextFunction) => {

  try {
    throw new Error("Something went wrong in async route");
  } 

  catch (err) {
    next(err);  // go to the errorHandler.ts
  }
};
