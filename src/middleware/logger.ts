// import { NextFunction, Request, Response } from "express";


// export const logger=(req:Request,res:Response,next:NextFunction)=>{
//   console.log("this is logger for url and method and timestamp");
//   const method=req.method;
//   const url=req.originalUrl;
//   const time=new Date().toLocaleDateString();
//   console.log(`[${time}] ${method} ${url}`);
//   next();

// }

import { Request, Response, NextFunction } from "express";
import { IRequestLog } from "../interfaces/IMiddlewares"; // assuming interface is stored separately

export class LoggerMiddleware {
  
  public logRequest(req: Request, res: Response, next: NextFunction): void {
    const logData: IRequestLog = {
      method: req.method,
      url: req.originalUrl,
      time: new Date().toLocaleDateString(),
    };
    console.log("This is logger for URL, method, and timestamp");
    console.log(`[${logData.time}] ${logData.method} ${logData.url}`);
    next();
  }
}
