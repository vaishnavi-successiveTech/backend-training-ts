import { Iuser } from "../../../entities/Iuser";
import { UserModel } from "../../../models/UserModel";


class UserRepository{

    public insertManyUsers=async(data:Iuser):Promise<Iuser> =>{
        const newUser=new UserModel(data);
        console.log("Calling new user");
        const dataa=await newUser.save();
        console.log("dataa",dataa);
        return dataa;
    }
      public findUserByEmail = async (email: string) => {
    return await UserModel.findOne({ email });
  };

}

export const userRepo=new UserRepository();