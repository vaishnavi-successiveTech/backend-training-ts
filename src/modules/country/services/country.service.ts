
import { ICountry } from "../../../entities/ICountry";

import { countryRepository } from "../repository/country.repo";
// import { countriesDetails } from "../seedCountries";

class CountryService{
    public addData=async()=>{
    return await countryRepository.insertManyMovies();
    }
      getAllCountries = async () => {
    return await countryRepository.getDetails();
  };
}

export const countryService=new CountryService();