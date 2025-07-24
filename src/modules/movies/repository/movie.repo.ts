import { IMovie } from "../../../entities/IMovie";
import MovieModel from "../../../models/movieModel";


class MovieRepository{
   public insertManyMovies= async (data:IMovie): Promise<IMovie>=>{
        const newMovie=new MovieModel(data)  // here MovieModel schema is called 
        console.log("calling movie repo")
        const dataa = await newMovie.save();//  extract it from MovieMOdel
        console.log("dataa",dataa);
        return dataa // save it in  mongoDB 
    };
}
export const movieRepository=new MovieRepository();
