import { randomMaxTenMovies } from '../helpers/filterMovies';
import { movies } from './data';

// list of 10 randome movies from the original database 'movies' to show in the carousel
const randomTenGeneralMovies = randomMaxTenMovies(movies);

export const state = {
  currentFirstIndex: 0,
  tenMoviesForCarousel: randomTenGeneralMovies,
};
