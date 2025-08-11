
<<<<<<< HEAD
import { ICountry } from "../../../entities/ICountry";
import CountryModel from "../../../models/countryModel";
import { countriesDetails } from "../seedCountries";
=======
import CountryModel from "../../../models/countryModel"
import { countriesDetails } from "../seedCountries";
// import { countriesDetails } from "../seedCountries"
>>>>>>> 55dfdb53981cbfb44338e34079b4a36ead59cd41


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