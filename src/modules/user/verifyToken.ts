import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../../models/UserModel";

interface JwtPayload {
  id: string;
  role: string;
}

const secret = process.env.SECRET_KEY || "default_secret";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Access Denied. No token provided." });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    (req as any).user = user;
    next();
  } catch (err) {
    return res.status(400).json({ success: false, message: "Invalid Token" });
  }
};

// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import { User } from "../../models/UserModel";


// interface JwtPayload {
//   id: string;
//   role: string;
// }

// const secret = process.env.SECRET_KEY || "default_secret";

// export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
//   const header = req.headers.authorization;

//   if (!header || !header.startsWith("Bearer ")) {
//     return res.status(401).json({ success: false, message: "Access Denied. No token provided." });
//   }

//   const token = header.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, secret) as  JwtPayload;

//     const result=await User.findById(decoded.id!);
//     if(!result){
//         return res.status(404).json({message:"User does not exist"});
//     }
//     if(result.role!=="admin")
//     {return res.status(403).json({message:"Not authorized"});}
//     // res.locals.user = decoded; 
//     //   (req as AuthRequest).user = decoded; 
//     // next();
//     next();
//   } catch (err) {
//     return res.status(400).json({ success: false, message: "Invalid Token" });
//   }
// };
