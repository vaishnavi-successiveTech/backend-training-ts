import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";
import { IGeoLocationRequest } from "../interfaces/IMiddlewares";

const allowedCountries = ["IN", "US", "CA", "DE"];

export class GeoLocationMiddleware implements IGeoLocationRequest {
   ip: string = "49.36.77.122"; 

  public geolocation = (req: Request, res: Response, next: NextFunction): void => {
    const geo = geoip.lookup(this.ip);

    if (geo && allowedCountries.includes(geo.country)) {
      console.log("Allowed region:", geo.country);
      res.status(200).json({
        success: true,
        message: "User is from expected region",
      });
    } else {
      res.status(403).send("Access denied: Not allowed from your location.");
    }
  };
}
