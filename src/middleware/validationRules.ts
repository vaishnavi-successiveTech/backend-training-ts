import { NextFunction,Request,Response } from "express";
import { schemaList } from "./schemaList";

export const checkDynamic=(req:Request,res:Response,next:NextFunction)=>{

    const path:string[]=req.url.split("/");
    console.log(path);

    const currSchema=schemaList[`${path[1].trim()}`];
    if(!currSchema){
        return res.status(404).send("wrong path");

    }
    const {error}=currSchema.validate(req.body,{ abortEarly: false });
   if (error) {
    console.error('Validation failed', error.details);
    const messages = error.details.map(detail => detail.message); // now error come in array of objects

    return res.status(400).json({
      success: false,
      message: messages, // returns all errors, not just the first
    });
  }
   next();
}