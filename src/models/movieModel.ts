// import { required } from "joi";
import mongoose  from "mongoose";

const movieSchema=new mongoose.Schema({
    movieName:{type:String,required:true,unique:true},
    timeDuration:{type:Number,unique:true}
});

const MovieModel=mongoose.model("Movie",movieSchema);
export default MovieModel;