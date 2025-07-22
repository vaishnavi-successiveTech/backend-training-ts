import { NextFunction, Request, Response } from "express";
import geoip from "geoip-lite";
const allowedCountries = ["IN", "US", "CA","DE"]; 

export const geolocation=(req:Request,res:Response,next:NextFunction)=>{
    
    const ip="49.36.77.122"; // for India
     // const ip="8.8.8.8" // for US
const geo=geoip.lookup(ip);

// const geo=geoip.lookup(testIp);
// if(geo && geo.country=="IN"){

if(geo && allowedCountries.includes(geo.country)){
    console.log("Allowed region:", geo.country);
    res.status(200).json({
        success:"true",
        message:"User is from expected region"
    })
}
else{
    res.status(403).send('Access denied: Not allowed from your location.');
}
}