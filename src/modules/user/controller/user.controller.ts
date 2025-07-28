import { Request, Response, NextFunction } from "express";
import { userService } from "../services/user.service";


export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
      
    const user = await userService.createUser(req.body);
    res.status(201).json({ success: true, data: user });
 
  } catch (error) {
    next(error);
  }
};

export const loginUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUser( email, password);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token: result.token,
      user: {
        id: result.user._id,
        email: result.user.email,
        firstName: result.user.name,
        role: result.user.role,
      },
    });
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};