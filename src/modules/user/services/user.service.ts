
import { IuserRegister } from "../../../entities/IuserRegister";
import { userRepo } from "../repository/user.repo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET_KEY || "default_secret";

class UserService  {
  
 public createUser = async (userData: IuserRegister): Promise<IuserRegister> => {
  try {
    // Check if user already exists
    const existingUser = await userRepo.findUserByEmail(userData.email);
    console.log(existingUser);
    if (existingUser) {
      throw new Error("User already exists with this email");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    // Insert the new user
    const createdUser = await userRepo.insertManyUsers(userData);
    return createdUser;
  } catch (error: any) {
    console.log("Error occurred", error);
    throw new Error("failed: " + error.message);
  }
};


  public loginUser = async (email: string, password: string) => {
    const existingUser = await userRepo.findUserByEmail(email);

    if (!existingUser) {
      throw new Error("User does not exist");
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      throw new Error("Incorrect password");
    }

    const token = jwt.sign(
      { id: existingUser._id },
      secret,
      { expiresIn: "1h" }
    );

    return { token, user: existingUser };
  };
}

export const userService = new UserService();
