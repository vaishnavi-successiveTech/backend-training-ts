import { NextFunction, Request, Response } from "express";
import { countryService } from "../services/country.service";

export const insertCountries=async (req:Request,res:Response,next:NextFunction)=>{
    const result=await countryService.insertManyCountries(req.body);
    res.status(200).json({
        success:true,
        data:result
    });
}