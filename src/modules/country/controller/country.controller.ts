import { NextFunction, Request, Response } from "express";
import { countryService } from "../services/country.service";

class CountriesController{
 public insertCountries=async (req:Request,res:Response,next:NextFunction)=>{
    try {
          const result=await countryService.addData();
    res.status(200).json({
        success:true,
        message:"Data stored in data perfectly",
        data:result
    });
    } catch (error) {
        next(error);
        
    }
  
}}
export const countryController=new CountriesController();