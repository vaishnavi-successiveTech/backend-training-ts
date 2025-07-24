// import { required } from "joi";
import mongoose  from "mongoose";



const movieSchema=new mongoose.Schema({
    movieName:{type:String,required:true},
    timeDuration:{type:Number}
});

const MovieModel=mongoose.model("Movie",movieSchema);
export default MovieModel;