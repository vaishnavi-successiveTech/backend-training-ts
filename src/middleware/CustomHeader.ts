import { NextFunction, Request, Response } from "express";

export const customHeader=(data:string)=>{
    console.log("data",data);

    return function(req:Request,res:Response,next:NextFunction){
        res.setHeader("customhead",data);
        next();
    }
}