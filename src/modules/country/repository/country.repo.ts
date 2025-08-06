
import { ICountry } from "../../../entities/ICountry";
import CountryModel from "../../../models/countryModel";
import { countriesDetails } from "../seedCountries";


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