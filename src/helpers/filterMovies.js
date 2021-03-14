import { movies } from '../data/data';
import { mergeTwoArray, descArray, ascArray } from './functions';

// ---------Filter the recent films (year >=2000)-------------
export const recentMovies = movies.filter((movie) => movie.year >= 2000);

// --------------- Filter by genre-----------------
// Using the funtion 'mergeArray'
// Thrillers/Drama
const thrillerMovies = movies.filter((movie) => movie.genres.includes('Thriller'));
const dramaMovies = movies.filter((movie) => movie.genres.includes('Drama'));
export const thrillerDramaMovies = mergeTwoArray(thrillerMovies, dramaMovies);

// Science Fiction/Fantasy
const scienceFictionMovies = movies.filter((movie) => movie.genres.includes('Science Fiction'));
const fantasyMovies = movies.filter((movie) => movie.genres.includes('Fantasy'));
export const scienceFictionFantasyMovies = mergeTwoArray(scienceFictionMovies, fantasyMovies);

// Action
export const actionMovies = movies.filter((movie) => movie.genres.includes('Action'));
// Documentaries
export const documentaryMovies = movies.filter((movie) => movie.genres.includes('Documentary'));

// ----------------- Sort by notes --------------
// using the function descArray and ascArray
// ALL movies
export const descAllMovies = descArray(movies);
export const ascAllMovies = ascArray(movies);
// Thrillers/Drama movies
export const descThrillerMovies = descArray(thrillerDramaMovies);
export const ascThrillerMovies = ascArray(thrillerDramaMovies);
// Science Fiction/Fantasy
export const descScienceMovies = descArray(scienceFictionFantasyMovies);
export const ascScienceMovies = ascArray(scienceFictionFantasyMovies);
// Action movies
export const descActionMovies = descArray(actionMovies);
export const ascActionMovies = ascArray(actionMovies);
// Documentary movies
export const descDocumentaryMovies = descArray(documentaryMovies);
export const ascDocumentaryMovies = ascArray(documentaryMovies);

// ---------------10 movies for the carousel-----------------------

// 10 RANDOM MOVIES
// Example: Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive); Math.floor(Math.random() * 10) returns a random integer between 0 and 9 (both included)

// Create a function to get 1 random item
function getRandomItem(array) {
  const randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
}

// Create a function returning an array contains max 10 different/unique random movies (Notes: in some special case, we might not have enough ten movies)

export function randomMaxTenMovies(array) {
  const randomTenMovies = [getRandomItem(array)];
  let i = 1;
  while (i < 10 && i < array.length) {
    let randomItem = getRandomItem(array);
    while (randomTenMovies.includes(randomItem)) {
      randomItem = getRandomItem(array);
    }
    randomTenMovies.push(randomItem);
    i++;
  }
  return randomTenMovies;
}

// CREATE AN ARRAY OF MOVIES CONTAINS ALL OF POSSIBLE LIKED GENRE (CLICKED HEART)
// Step 1: Get the unique list of liked genre, for example: ["Thriller", "Drama", "Crime", "Comedy", "Romance"] => see in the script.js: 'likedGenres'

// Step 2: Create new array of movies that contain the liked genre as in the list from the database 'movies'
export function suggestMovies(favoriteGenres) {
  const suggestMovieArray = [];
  for (const movie of movies) {
    for (const favoriteGenre of favoriteGenres) {
      if (movie.genres.includes(favoriteGenre)) {
        suggestMovieArray.push(movie);
        break; // if finding one then stop the loop
      }
    }
  }
  return suggestMovieArray;
}
// Step 3: Get the max 10 random movies in the array and display in the carousel (Notes: in some special case, we might not have enough ten movies) => see in the script.js
