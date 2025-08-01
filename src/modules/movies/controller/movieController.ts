import { NextFunction, Request, Response } from "express";
import { movieService } from "../services/movie.service";

class MovieController {
  public movieResult = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log("Data for movie");
      const result = await movieService.addMovies(req.body);
      console.log("Data", result);
      res.status(200).json({
        success: "true",
        message: "Data is posted succesfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
}
export const movieController = new MovieController();
