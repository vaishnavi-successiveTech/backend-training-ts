// Create scenarios that generate all possible error codes.
import { NextFunction, Request, Response } from "express";
import createError from 'http-errors';
import { IErrorsClass } from "../interfaces/IController";

// 400 - bad reuqest

export class ErrorsClass implements IErrorsClass{
public badRequest=(req:Request,res:Response,next:NextFunction)=>{
    next(createError(400,'Bad Request:something is wrong with the request')); // next is used to work this middleware

}
// 401 - unauthorized

public  unauthorized=(req:Request,res:Response,next:NextFunction)=>{
     next(createError(401,'Unauthorized:please login first'));
}
// 403
public forbidden=(req:Request,res:Response,next:NextFunction)=>{
    next(createError('Forbidden: You are not allowed'));
}

//404
public notFound=(req:Request,res:Response,next:NextFunction)=>{
    next(createError(404, 'Not Found: This resource does not exist'));
}

// 409
public conflict=(req:Request,res:Response,next:NextFunction)=>{
      next(createError(409, 'Conflict: Duplicate entry detected'));
}
public validationError=(req:Request,res:Response,next:NextFunction)=>{
      next(createError(422, 'Validation Error: Invalid or missing fields'));
}

public internalServerError = (req: Request, res: Response, next: NextFunction) => {
     next(createError(500, 'Internal Server Error: Something broke'));
};
}