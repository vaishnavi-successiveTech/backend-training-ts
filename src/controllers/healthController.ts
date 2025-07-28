import { NextFunction, Request, Response } from "express";

interface IHealthControls{
    healthCheck(req:Request,res:Response,next:NextFunction):void;
}
export class HealthControls implements IHealthControls{
    public healthCheck=(req:Request,res:Response,next:NextFunction):void=>{
        res.status(200).json({
            success:true,
            message:"health check all good"
        })
    }
}