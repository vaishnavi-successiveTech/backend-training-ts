import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET_KEY || "default_secret";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Access Denied. No token provided." });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, secret);
    res.locals.user = decoded; 
    //   (req as AuthRequest).user = decoded; 
    // next();
    next();
  } catch (err) {
    return res.status(400).json({ success: false, message: "Invalid Token" });
  }
};
