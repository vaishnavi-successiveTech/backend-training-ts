import { NextFunction, Request, Response } from "express";
import { Country } from "../models/countryModel";
import { cloneWith } from "lodash";

export class PlayingCountries{
       allCountries=async(req:Request,res:Response,next:NextFunction)=>{
        try{
            console.log("calling seed Data");
            const currentCountry=new Country({
                countryName:"U.S.A",
                countryCode:"+1"

            })
            await  currentCountry.save();
            res.status(200).json({
                success:true,
                message:"data sent to databse successfully"
            })
            console.log("sent to database")
        }
        catch(error){
            console.log("error logging values");
            next(error);
        }
       }
}