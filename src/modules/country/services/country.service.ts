import { ICountry } from "../../../interfaces/ICountry";
import { countryRepository } from "../repository/country.repo";

class CountryService {
  insertManyCountries = async (data: ICountry[]) => {
    return await countryRepository.insertManyCountries(data);
  };
}

export const countryService = new CountryService();
