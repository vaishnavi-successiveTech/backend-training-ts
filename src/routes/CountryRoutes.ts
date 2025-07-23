import {Router} from "express";

import {PlayingCountries} from "../controllers/countryController";

const countryRoute=Router();
const currentCuntryNation=new PlayingCountries();

countryRoute.get("/countries",currentCuntryNation.allCountries);

export {countryRoute};