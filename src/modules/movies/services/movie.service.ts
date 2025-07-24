import { IMovie } from "../../../interfaces/IMovie";
import { movieRepository } from "../repository/movie.repo";

class MovieService{
    public addMovies=async (data:IMovie)=>{
        console.log("calling movieservice")
        return await movieRepository.insertManyMovies(data);
    };
}

export const movieService=new MovieService();