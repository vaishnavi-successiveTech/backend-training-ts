import { NextFunction, Request, Response } from "express";
import { ICustomHeader } from "../entities/IMiddlewares";

// export const customHeader=(data:string)=>{
//     console.log("data",data);

//     return function(req:Request,res:Response,next:NextFunction){
//         res.setHeader("customhead",data);
//         next();
//     }
// }
export class CustomHeader implements ICustomHeader{
    // console.log("data",data);
     public  customHeader( headerName:string ,headerValue:string){
    return (req:Request,res:Response,next:NextFunction):void =>{
        res.setHeader(headerName,headerValue);
        next();
    }
}}
