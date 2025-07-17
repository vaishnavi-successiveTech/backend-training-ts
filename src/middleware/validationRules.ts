import { NextFunction,Request,Response } from "express";
import { schemaList } from "./schemaList";

export const checkDynamic=(req:Request,res:Response,next:NextFunction)=>{

    const path:string[]=req.url.split("/");
    console.log(path);

    const currSchema=schemaList[`${path[1].trim()}`];
    if(!currSchema){
        return res.status(404).send("wrong path");

    }

    const {error}=currSchema.validate(req.body);
    console.log(error);

    if(error){
        return res.status(400).send("invalid format");
    }

    next();
}