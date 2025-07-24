import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const movieDetails = Joi.object({
  movieName: Joi.string().alphanum().min(3).required(),
  timeDuration: Joi.number(),
});
export class movieSchema {
  public validateMovies = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = movieDetails.validate(req.body);
    if (error) {
      console.log("Error", error);
      next(error);
    } else {
      console.log("Value", value);

      next();
    }
  };
}
