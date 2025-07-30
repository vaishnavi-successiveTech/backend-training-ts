
import { IuserRegister } from "../../../entities/IuserRegister";
import { User } from "../../../models/UserModel";



class UserRepository{

    public insertManyUsers=async(data:IuserRegister):Promise<IuserRegister> =>{
      console.log("userrepo");
        const newUser=new User(data);
        console.log("Calling new user");
        const dataa=await newUser.save();
        console.log("dataa",dataa);
        return dataa;
    }
      public findUserByEmail = async (email: string) => {
    return await User.findOne({ email });
  };

}

export const userRepo=new UserRepository();