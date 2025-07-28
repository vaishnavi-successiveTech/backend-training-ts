import { NextFunction, Request, Response } from "express";

export const asyncError=async (req:Request,res:Response,next:NextFunction)=>{
    try{
        await Promise.reject(
            new Error("Async error come from the controlller")
        ) // here error is thrown 
        res.send("Error occur here , but it will pass to error handler because in catch error handle is nect middleware")

    }catch(err){
       next(err); // pass to the error handler
    }
}