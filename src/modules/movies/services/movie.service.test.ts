import { movieService } from "./movie.service";
import { movieRepository } from "../repository/movie.repo";
import { IMovie } from "../../../entities/IMovie";

// Mock the repository so it doesn't call a real database
jest.mock("../repository/movie.repo", () => ({
  movieRepository: {
    insertManyMovies: jest.fn(),
  },
}));

describe("MovieService", () => {
  it("should call movieRepository.insertManyMovies with correct IMovie data", async () => {
    const mockMovie: IMovie = {
      movieName: "Interstellar",
      timeDuration: 169, // in minutes
    };
    // Mock the repository response
    (movieRepository.insertManyMovies as jest.Mock).mockResolvedValue({
      success: true,
      insertedCount: 1,
    });

    const result = await movieService.addMovies(mockMovie);

    //  Verify method call
    expect(movieRepository.insertManyMovies).toHaveBeenCalledTimes(1);

    // Verify method call arguments
    expect(movieRepository.insertManyMovies).toHaveBeenCalledWith(mockMovie);

    //  Verify result from service
    expect(result).toEqual({
      success: true,
      insertedCount: 1,
    });
  });
});
