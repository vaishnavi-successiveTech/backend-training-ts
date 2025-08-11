
import { IuserRegister } from "../../../entities/IuserRegister";
import { UserModel } from "../../../models/UserModel";


class UserRepository{

    public insertManyUsers=async(data:IuserRegister):Promise<IuserRegister> =>{
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