import { countryService } from "./country.service";
import { countryRepository } from "../repository/country.repo";
import { ICountry } from "../../../entities/ICountry";



jest.mock("../repository/country.repo", () => ({
  countryRepository: {
    insertManyMovies: jest.fn(),
    getDetails: jest.fn(),
  },
}));

describe("CountryService", () => {
  it("should call insertManyMovies when addData is called", async () => {
    (countryRepository.insertManyMovies as jest.Mock).mockResolvedValue({
      success: true,
      insertedCount: 2,
    });

    const result = await countryService.addData();

    expect(countryRepository.insertManyMovies).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      success: true,
      insertedCount: 2,
    });
  });

  it("should call getDetails when getAllCountries is called", async () => {
    const mockCountries: ICountry = {
      countries: [
        { countryName: "India", code: "IN" },
        { countryName: "United States", code: "US" },
      ],
    };

    (countryRepository.getDetails as jest.Mock).mockResolvedValue(mockCountries);

    const result = await countryService.getAllCountries();

    expect(countryRepository.getDetails).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockCountries);
  });
});
