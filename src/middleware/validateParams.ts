// Create middleware to validate that specific query parameters in a route are numeric. 
// If a non-numeric value is provided, respond with an appropriate error message.

import { NextFunction, Request, Response } from "express";

interface IParamValidator {
  validateParams(req: Request, res: Response, next: NextFunction): void;
}


export class ParamValidator implements IParamValidator {
  public validateParams(req: Request, res: Response, next: NextFunction): void {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      res.status(500).send("Invalid parameter: ID must be a number");
      return;
    }

    next();
  }
}
