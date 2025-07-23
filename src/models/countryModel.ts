import mongoose from "mongoose";
import { ICountry } from "../interfaces/ICountry";

const countrySchema = new mongoose.Schema<ICountry>({
  name: { type: String, required: true },
  code: { type: String, required: true },
});

const CountryModel = mongoose.model<ICountry>("Country", countrySchema);
export default CountryModel;

// import { required } from "joi";
// import mongoose from "mongoose";

// const countrySchema = new mongoose.Schema({
//   countryName: {
//     type: String,
//     required: true
//   },
//   countryCode:{type:String,
//     required:true
//   }
// });

// export const Country = mongoose.model("Country", countrySchema);