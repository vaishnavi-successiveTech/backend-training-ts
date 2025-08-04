<<<<<<< HEAD
import { ICountry } from "../../../entities/ICountry";
import CountryModel from "../../../models/countryModel";
=======
import CountryModel from "../../../models/countryModel"
import { countriesDetails } from "../seedCountries";
// import { countriesDetails } from "../seedCountries"
>>>>>>> 3ad992ab74db78f10e9b9e07d4749178f1a6c6c6

class CountryRepository{

  public insertManyMovies=async()=>{
    const result=CountryModel.insertMany(countriesDetails);
    return await result;

  };
  public getDetails=async()=>{
    return await CountryModel.find();
  }
}

export const countryRepository=new CountryRepository();