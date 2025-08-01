import mongoose from "mongoose";
import { ICountry } from "../entities/ICountry";
const countrySchema = new mongoose.Schema({
  countryName: { type: String, required: true},
  code: { type: String, required: true,unique:true},
});

const CountryModel = mongoose.model("Countries", countrySchema);
export default CountryModel;
