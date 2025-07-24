import CountryModel from "../../../models/countryModel"
import { countriesDetails } from "../seedCountries";
// import { countriesDetails } from "../seedCountries"

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