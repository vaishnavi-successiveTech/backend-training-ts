import {Router} from "express";
import { countryController } from "../modules/country/controller/country.controller";

// import {PlayingCountries} from "../controllers/countryController";

const countryRoute=Router();
// const currentCuntryNation=new PlayingCountries();

 countryRoute.get("/data",countryController.insertCountries);

// countryRoute.get("/countries",currentCuntryNation.allCountries);

export {countryRoute};