import { NextFunction, Request, Response } from "express";

export interface IErrorsClass{
    badRequest :(req:Request,res:Response,next:NextFunction)=>void;
    unauthorized:(req:Request,res:Response,next:NextFunction)=>void;
    forbidden:(req:Request,res:Response,next:NextFunction)=>void; 
    notFound:(req:Request,res:Response,next:NextFunction)=>void; 
    conflict:(req:Request,res:Response,next:NextFunction)=>void;
    validationError:(req:Request,res:Response,next:NextFunction)=>void; 
    internalServerError:(req:Request,res:Response,next:NextFunction)=>void; 

 }

 export interface IValidateJwt{
    validateJwt: (req: Request, res: Response, next: NextFunction) => void;}