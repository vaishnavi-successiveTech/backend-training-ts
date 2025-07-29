import { NextFunction, Request, Response } from "express";
import helmet from "helmet";

export class HeaderSecurity {
  public static HelmetSecurity = (req: Request, res: Response, next: NextFunction) => {
    const middlewareHelment= helmet({
      // xssFilter is deprecated and no longer used in helmet v5+
      noSniff: true, // stop from guessing file type

      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          defaultSrc: ["'self'"],// content should from own domain
          scriptSrc: ["'self'"], 
        },
      },

      referrerPolicy: {// restricts referrer header
        policy: "no-referrer",
      },

      frameguard: {  // prevents clickjacking and 
        action: "deny",
      },

      crossOriginResourcePolicy: {
        policy: "same-origin",
      },

      hsts: {
        maxAge: 15552000, // browser remembers like how many days it should remember - 180
        includeSubDomains: true, // including its subdomain 
      },
      hidePoweredBy:true,// hide the tech stack
    })

    return middlewareHelment(req,res,next);
  };



}

