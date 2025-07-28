import { NextFunction,Request,Response } from "express";
import { resolve } from "path";

export class AsyncErrorRoute{
public asyncErrorRoute = async (req:Request, res:Response, next:NextFunction) => {

  try {
    // throw new Error("Something went wrong in async route");
    await new Promise((resolve,reject)=>{
      setTimeout(()=>reject(new Error("Async error encounter")),1000);
    });
    res.send("Error Occur");
  } 
  catch (err) {
    next(err);  // go to the errorHandler.ts
  }
};
}


