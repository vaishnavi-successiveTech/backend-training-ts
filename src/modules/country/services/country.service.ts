<<<<<<< HEAD
import { ICountry } from "../../../entities/ICountry";
=======
>>>>>>> 3ad992ab74db78f10e9b9e07d4749178f1a6c6c6
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