import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  countryName: { type: String, required: true},
  code: { type: String, required: true,unique:true},
});

const CountryModel = mongoose.model("Countries", countrySchema);
export default CountryModel;
