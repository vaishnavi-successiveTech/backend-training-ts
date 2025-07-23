import mongoose from "mongoose";
import dotenv from "dotenv";
import { countryService } from "./services/country.service";

dotenv.config();

const mongo_URL = process.env.MONGO_URI;

const countries = [
  { name: "India", code: "IN" },
  { name: "Australia", code: "AU" },
  { name: "England", code: "ENG" },
  { name: "South Africa", code: "SA" },
  { name: "New Zealand", code: "NZ" },
];

const seedCountries = async (): Promise<void> => {
  if (!mongo_URL) {
    console.error(" MONGO_URI not found in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongo_URL);
    console.log(" Connected to DB");

    await countryService.insertManyCountries(countries);
    console.log("Countries seeded successfully");

   
  } catch (error) {
    console.error(" Seeding failed:", error);
  
  }
};

seedCountries();
