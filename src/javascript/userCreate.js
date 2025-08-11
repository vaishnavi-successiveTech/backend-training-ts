import Person from "../models/RegisterUser.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

 export const  userCreate=async (req,res,next)=>{
     const {username,firstName,lastName,email,role,password}=req.body;
    try{
         const user= await Person.findOne({email});
         if(user){
          return   res.status(400).json({
                  success:false,
                  message:"User already exist", 
            })
         }
         const hashPassword=  await bcrypt.hash(password,10);
         const userData= new Person({username,firstName,lastName,email,role,password:hashPassword});
         await userData.save();
         res.status(201).json({
      success: true,
      message: "User registered successfully",
      
      data: {
        id: userData._id,
        username: userData.username,
        email: userData.email,
        role: userData.role,
      },
    });
    }
    catch(error){
        next(error);
    }
}

export const loginUser = async (req, res, next) => {
  const {  email, password } = req.body;

  try {
    const existingUser = await Person.findOne({email});

    if (!existingUser) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Password does not match",
      });
    }

    const token = jwt.sign(
      { _id: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

     res.cookie("token",token,{
      httpOnly:true,
      secure:false,
      sameSite:"strict",
      maxAge:60*60*1000, // 1 hour
     }).json({message:"login successfully",
       data: {
        id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        role: existingUser.role,
      },
      token

     })
    // return res.status(200).json({
    //   success: true,
    //   message: "Login successful",
    //   token,
    //   data: {
    //     id: existingUser._id,
    //     username: existingUser.username,
    //     email: existingUser.email,
    //     role: existingUser.role,
    //   },
    // });
  } catch (error) {
    next(error);
  }
};
