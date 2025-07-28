// middleware/CheckDynamic.ts
import { Request, Response, NextFunction } from "express";
import { schemaList } from "./schemaList";
import { ICheckDynamic } from "../interfaces/IMiddlewares";

export class CheckDynamic implements ICheckDynamic {
  public validateDynamicSchema(req: Request, res: Response, next: NextFunction) {
    const path: string[] = req.url.split("/");
    console.log("Path:", path);

    const currSchema = schemaList[path[1]?.trim()];
    if (!currSchema) {
      res.status(404).send("Wrong path");
      return;
    }
    const {error}=currSchema.validate(req.body,{ abortEarly: false });
   if (error) {
    console.error('Validation failed', error.details);
    const messages = error.details.map(detail => detail.message); // now error come in array of objects

    return res.status(400).json({
      success: false,
      message: messages, // returns all errors, not just the first
    });
  }
   next();
}}
