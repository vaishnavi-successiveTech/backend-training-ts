import { NextFunction, Request, Response } from "express";

export const logger=(req:Request,res:Response,next:NextFunction)=>{
  console.log("this is logger for url and method and timestamp");
  const method=req.method;
  const url=req.originalUrl;
  const time=new Date().toLocaleDateString();
  console.log(`[${time}] ${method} ${url}`);
  next();

}