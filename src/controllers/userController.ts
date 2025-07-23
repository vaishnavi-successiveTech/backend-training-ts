import { NextFunction, Request, Response } from "express";
import { users } from "../mockData";
import { IUserController } from "../interfaces/IuserController";
// import { users } from "../mockData";
// fetch karana hai data
export class UserController implements IUserController{
  private static instance: UserController;

  public static getInstance(): UserController {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }
  public getUsers = (req: Request, res: Response):void  => {
    // fetch data from the server and present over the browser
    res.status(200).json({
      success: "true",
      message: "this is the data is for Question-4",
      data: users,
    });
  };
  // post data  here  // check in postMan
  public createUser = async (req: Request, res: Response):Promise<void> => {
    try {
      console.log("Reached here");
      const data = req.body;
      console.log(data);
      res.status(200).send("data recieved");
    } catch (err) {
      console.log(err);
    }
  };
  public dataValidate = (req: Request, res: Response):void => {
    console.log("Data Validation check");
    const data = req.body; // data  come from the api whatever you give in the body of the api.
    console.log(data);
    res.status(200).send("data recieved");
  };

  // for check validation only
  public validateSchema = (req: Request, res: Response, next: NextFunction):void  => {
    console.log("Validation has to be checked ");
    const data = req.body;
    res.status(200).json({
      success: "true",
      message: "Validation checked here come from controller",
    });
  };
}
// import { NextFunction, Request, Response } from "express";
// import { users } from "../mockData";
// // import { users } from "../mockData";
// // fetch karana hai data
// export const getUsers=(req:Request,res:Response)=>{
//     // fetch data from the server and present over the browser
//     res.status(200).json({
//         success:"true",
//         message:"this is the data is for Question-4",
//         data:users,
//     })
// };
// // post data  here  // check in postMan
// export const createUser = async(req:Request,res:Response)=>{
//     try{
//     console.log("Reached here")
//     const data = req.body;
//     console.log(data);
//     res.status(200).send("data recieved")
//     }
//     catch(err){
//       console.log(err);
//     }
// }
// export const dataValidate=(req:Request,res:Response)=>{
//   console.log("Data Validation check");
//   const data=req.body; // data  come from the api whatever you give in the body of the api.
//   console.log(data);
//   res.status(200).send("data recieved");
// }

// // for check validation only
// export const validateSchema=(req:Request,res:Response,next:NextFunction)=>{
//   console.log("Validation has to be checked ");
//   const data=req.body;
//   res.status(200).json({
//     success:"true",
//   message:"Validation checked here come from controller"  })
// }


