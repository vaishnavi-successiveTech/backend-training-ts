import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { IValidateJwt } from "../interfaces/IController";

interface Prop {
  expiresIn: string;
}
export class ValidateJwt implements IValidateJwt{

public validateJwt = (
  req: Request ,
  res: Response,
  next: NextFunction
) => {
  const { name, password } = req.body;
  const secret = process.env.SECRET_KEY || "asdrg";

  console.log("Login attempt ");
  console.log("Name", name);
  //   const options = {
  // expiresIn: '1h',
  //  };

  // Dummy auth check
  if (name && password) {
    // create a JWT
    const token = jwt.sign({ name:name }, secret, { expiresIn: "1h" });
    console.log("token", token);
    console.log("User autheniticated");

    const decode= jwt.verify(token,secret,(err,decode)=>{
        if(err){
            next(err);
        }
        else{
            console.log("decoded val",decode);
        }
    })
    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } else {
    console.log("invalid credentials");
    return res.status(401).send("Invalid name or password");
  }
};
}