import { ICountry } from "../../../interfaces/ICountry";
import { countryModel } from "../../../models/countryModel";

export class CountryRepository{
    public insertManyCountries=async(countries:ICountry[])=>{ // insert countries name in array of object form
        return await countryModel.insertMany(countries);
    };
    public getAllCountries=async()=>{
        return await countryModel.find(); // to find all the name of the countries
    }
}