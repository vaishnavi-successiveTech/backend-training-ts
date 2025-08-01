import { NextFunction, Request, Response } from "express";
import { Iuser } from "./Iuser";

export interface ICustomHeader {
  customHeader: (
    headerName: string,
    headerValue: string
  ) => (req: Request, res: Response, next: NextFunction) => void;
}
export interface IGeoLocationRequest {
  ip: string;
}

export interface IRequestLog {
  method: string;
  url: string;
  time: string;
}

export interface ICheckDynamic {
  validateDynamicSchema(req: Request, res: Response, next: NextFunction): void;
}


export interface IValidateSchema {
  validateUserSchema(req: Request, res: Response, next: NextFunction): void;
}

export interface UserRequest extends Request {
  body: Iuser;
}