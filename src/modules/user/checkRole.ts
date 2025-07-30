import { Request, Response, NextFunction } from "express";

export const checkRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (!user) {
      return res.status(403).json({ success: false, message: "User not authenticated" });
    }

    if (user.role !== role) {
      return res.status(403).json({ success: false, message: "Access denied: insufficient permissions" });
    }

    next();
  };
};
