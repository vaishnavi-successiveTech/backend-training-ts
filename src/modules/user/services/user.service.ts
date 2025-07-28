import { Iuser } from "../../../entities/Iuser";
import { userRepo } from "../repository/user.repo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET_KEY || "default_secret";

class UserService {
  
  public createUser = async (userData: Iuser): Promise<Iuser> => {
    try {
    //       public createUser = async (userData: Iuser): Promise<Iuser> => {
    // try {
    //   const createdUser = await userRepo.insertManyUsers(userData);
    //   return createdUser;
    // } catch (error:any) {
    //     console.log("Erroroccurred",error );
    //     throw new Error("failed: " + error.message);
    // }

      const hashedPassword = await bcrypt.hash(userData.password, 10);
      userData.password = hashedPassword;

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
      { id: existingUser._id, role: existingUser.role },
      secret,
      { expiresIn: "1h" }
    );

    return { token, user: existingUser };
  };
}

export const userService = new UserService();
