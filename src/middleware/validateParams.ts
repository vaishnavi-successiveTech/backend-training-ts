// Create middleware to validate that specific query parameters in a route are numeric. 
// If a non-numeric value is provided, respond with an appropriate error message.

import { NextFunction, Request, Response } from "express";


export const validateParams=(req:Request,res:Response,next:NextFunction)=>{
     const {id}=req.params;
     
     if(isNaN(Number(id))){
      return   res.status(500).json({
        success:"false",
        message:"Params is not correct"
      });
     }
//     return res.status(200).json({
//             success:"true",
//             message:"Params are verified"
//              });
             next();
}