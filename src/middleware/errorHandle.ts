//10. Implement an error-handling middleware that captures errors thrown in the route handlers and sends an appropriate error response.

import { Response, NextFunction, Request } from "express";


// export const errorHandler=(err:Error,req:Request,res:Response,next:NextFunction)=>{

//     console.log("error function");

//     res.status(500).json({
//         success:false,
//         message:"Data has some internal error",
//         error: err.message,
//     })


// }
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    console.log("come from error middleware")
  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong!",
  });
};
