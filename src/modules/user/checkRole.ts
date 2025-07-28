import { Request, Response, NextFunction } from "express";

export const checkRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access Denied. You do not have permission.",
      });
    }

    next();
  };
};
