// middleware/CheckDynamic.ts
import { Request, Response, NextFunction } from "express";
import { schemaList } from "./schemaList";
import { ICheckDynamic } from "../interfaces/IMiddlewares";

export class CheckDynamic implements ICheckDynamic {
  public validateDynamicSchema(req: Request, res: Response, next: NextFunction): void {
    const path: string[] = req.url.split("/");
    console.log("Path:", path);

    const currSchema = schemaList[path[1]?.trim()];
    if (!currSchema) {
      res.status(404).send("Wrong path");
      return;
    }
    const { error } = currSchema.validate(req.body, { abortEarly: false });

    if (error) {
      const messages = error.details.map(detail => detail.message);
      res.status(400).json({
        success: false,
        errors: messages,
      });
      return;
    }

    next();
  }
}

// import { NextFunction,Request,Response } from "express";
// import { schemaList } from "./schemaList";

// export const checkDynamic=(req:Request,res:Response,next:NextFunction)=>{

//     const path:string[]=req.url.split("/");
//     console.log(path);

//     const currSchema=schemaList[`${path[1].trim()}`];
//     if(!currSchema){
//         return res.status(404).send("wrong path");

//     }

//     const {error}=currSchema.validate(req.body);
//     console.log(error);

//     if(error){
//         return res.status(400).send("invalid format");
//     }

//     next();
// }