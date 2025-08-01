import { NextFunction, Request, Response } from "express";

export interface IUserController {
  getUsers: (req: Request, res: Response) => void;
  createUser: (req: Request, res: Response) => Promise<void>;
  dataValidate: (req: Request, res: Response) => void;
  validateSchema: (req: Request, res: Response, next: NextFunction) => void;
}

