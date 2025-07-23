import { ICountry } from "../../../interfaces/ICountry";
import CountryModel from "../../../models/countryModel";

class CountryRepository {
  insertManyCountries = async (countries: ICountry[]) => {
    return await CountryModel.insertMany(countries);
  };

  getAllCountries = async () => {
    return await CountryModel.find();
  };
}

export const countryRepository = new CountryRepository();
