// seedCountries.js
import mongoose from "mongoose";
import CountryModel from "../../models/countryModel";


export const countriesDetails = [
  { countryName: "India", code: "IN" },
  { countryName: "Australia", code: "AU" },
  { countryName: "England", code: "ENG" },
  { countryName: "South Africa", code: "SA" },
  { countryName: "New Zealand", code: "NZ" },
];

const seedCountries = async () => {
  try {
    const uri=process.env.MONGO_URI || "hdgajg"
    await mongoose.connect(uri);
    await CountryModel.insertMany(countriesDetails);
    console.log("Countries seeded successfully.");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await mongoose.disconnect();
  }
};

export default seedCountries;
