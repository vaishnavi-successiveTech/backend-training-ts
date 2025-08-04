

import mongoose from "mongoose";
import CountryModel from "../models/countryModel";
import { countriesDetails } from "../utils/mockData";
export class ConnectionDb {

  public async connectDb(): Promise<void> {
    try {
      await mongoose.connect(process.env.MONGO_URI!);
      console.log("Connected to MongoDB.");
    } catch (error) {
      console.error("Error connecting to MongoDB:",error);
      process.exit(1);
    }
  }
public async seedCountries(): Promise<void> {
  try {
    await this.connectDb();
    await CountryModel.deleteMany({});
    console.log("Existing countries deleted.");
    await CountryModel.insertMany(countriesDetails);
    console.log("Countries seeded successfully.");
  } catch (error) {
    console.error("Seeding failed",error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDb.");
  }
}
}

// import mongoose  from "mongoose";

// export const connnection=async()=>{

//     try{
//         const mongo_url=process.env.MONGO_URI!;
//         await mongoose.connect(mongo_url);
//         console.log("connncted to db typescript ");
//     }
//     catch(error){
//         console.log("Cannot connect to databse")
//     }
// }