import geoip from "geoip-lite";
const allowedCountries = ["IN", "US", "CA", "DE"];

export class GeoLocationMiddleware {
  constructor() {
    this.ip = "49.36.77.122"; 
  }

  geolocation(req, res, next) {
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
  }
}


