import { required } from "joi";
import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  countryName: {
    type: String,
    required: true,
    unique: true,
  },
  countryCode:{type:String,
    required:true
  }
});

export const Country = mongoose.model("Country", countrySchema);