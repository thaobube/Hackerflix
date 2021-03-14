import './styles.scss';
import { movies } from './src/data/data';
import {
  recentMovies, thrillerDramaMovies, scienceFictionFantasyMovies, actionMovies, documentaryMovies, descAllMovies, ascAllMovies, descThrillerMovies, ascThrillerMovies, descScienceMovies, ascScienceMovies, descActionMovies, ascActionMovies, descDocumentaryMovies, ascDocumentaryMovies, randomMaxTenMovies, suggestMovies,
} from './src/helpers/filterMovies';
import { mergeStringArray } from './src/helpers/functions';
import { header } from './src/views/header';
import {
  innerHtmlCarousel, renderCarousel, nextSlide, previousSlide,
} from './src/views/carousel';
import { selection } from './src/views/selection';
import { renderMain, innerHtmlMain } from './src/views/main';
import { state } from './src/data/state';

// -----------------------------------------------------------

const app = document.getElementById('app');

// list of 10 randome movies from the original database 'movies' to show in the carousel
const randomTenGeneralMovies = randomMaxTenMovies(movies);

// First rendering (Default Rendering)
app.innerHTML = header + renderCarousel() + selection + renderMain(movies);

const carousel = document.getElementById('carousel');
// console.log(carousel);

const main = document.getElementById('main');
// console.log(main);

let recent = false;
let currentArray = movies;
// Event when we click to the button 'All', 'Recent film only'
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btn-recent')) {
    if (!recent) {
      currentArray = recentMovies;
      main.innerHTML = innerHtmlMain(currentArray);
      recent = !recent;
      e.target.innerHTML = 'SHOW ALL MOVIES';
    } else {
      currentArray = movies;
      main.innerHTML = innerHtmlMain(currentArray);
      recent = !recent;
      e.target.innerHTML = 'RECENT MOVIES ONLY';
    }
  }
  if (e.target.matches('.btn-all')) {
    main.innerHTML = innerHtmlMain(movies);
  }
});

// function to display movies when sorting by notes:
function sortingByNotes(array1, array2) {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('#sortField')) {
      if (parseInt(e.target.value) === 1) {
        main.innerHTML = innerHtmlMain(array1);
        console.log(e.target.value);
      }
      if (parseInt(e.target.value) === 2) {
        main.innerHTML = innerHtmlMain(array2);
        console.log(e.target.value);
      }
    }
  });
}
// Event when we select by genre & by notes (the selection by genre is still active)
document.body.addEventListener('click', (e) => {
  if (e.target.matches('#selectField')) {
    if (parseInt(e.target.value) === 1) {
      main.innerHTML = innerHtmlMain(movies);
      console.log(e.target.value);
      sortingByNotes(descAllMovies, ascAllMovies);
    }
    if (parseInt(e.target.value) === 2) {
      main.innerHTML = innerHtmlMain(thrillerDramaMovies);
      console.log(e.target.value);
      sortingByNotes(descThrillerMovies, ascThrillerMovies);
    }
    if (parseInt(e.target.value) === 3) {
      main.innerHTML = innerHtmlMain(scienceFictionFantasyMovies);
      console.log(e.target.value);
      sortingByNotes(descScienceMovies, ascScienceMovies);
    }
    if (parseInt(e.target.value) === 4) {
      main.innerHTML = innerHtmlMain(actionMovies);
      console.log(e.target.value);
      sortingByNotes(descActionMovies, ascActionMovies);
    }
    if (parseInt(e.target.value) === 5) {
      main.innerHTML = innerHtmlMain(documentaryMovies);
      console.log(e.target.value);
      sortingByNotes(descDocumentaryMovies, ascDocumentaryMovies);
    }
  }
});

// Event when we click to a poster => show the popup
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.box__click')) {
    const selectedBoxPopUp = e.target.parentNode.parentNode;
    // display the Pop Up in the fix position
    const selectedPopUpFix = selectedBoxPopUp.querySelector('.fixed-center-popup--hidden');
    selectedPopUpFix.classList.remove('fixed-center-popup--hidden');
    selectedPopUpFix.classList.add('fixed-center-popup');
    // display the overlay
    const selectedOverlay = selectedBoxPopUp.querySelector('.overlay--hidden');
    selectedOverlay.classList.remove('overlay--hidden');
    selectedOverlay.classList.add('overlay');
  }
});

// Event when we click to the button 'Close' - hide the popup
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btn-close')) {
    // important to add the preventDefaut: if not, after clicking the close button, it will reload the page and go up to the head of the page
    e.preventDefault();
    const selectedBoxPopUp = e.target.parentNode.parentNode.parentNode.parentNode;
    // hide the Pop Up in the fix position
    const selectedPopUpFix = selectedBoxPopUp.querySelector('.fixed-center-popup');
    selectedPopUpFix.classList.remove('fixed-center-popup');
    selectedPopUpFix.classList.add('fixed-center-popup--hidden');
    // hide the overlay
    const selectedOverlay = selectedBoxPopUp.querySelector('.overlay');
    selectedOverlay.classList.remove('overlay');
    selectedOverlay.classList.add('overlay--hidden');
  }
});

// Event when clicking to next/previous arrow
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.fa-angle-right')) {
    nextSlide();
    carousel.innerHTML = innerHtmlCarousel();
  }
});
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.fa-angle-left')) {
    previousSlide();
    carousel.innerHTML = innerHtmlCarousel();
  }
});

// Event when clicking on the heart: empty heart <=> filled heart + change the carousel display
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.far')) {
    e.target.classList.toggle('fas');
    // get all the filled hearts
    const clickedHearts = document.querySelectorAll('.fas.fa-heart');
    // Check if there is any filled hearts
    if (clickedHearts.length > 0) {
      // get a new array of genre based on clicked hearts
      const clickedGenres = [];
      for (const clickedHeart of clickedHearts) {
        const boxPopupElement = clickedHeart.closest('.box-popup');
        const clickedGenre = boxPopupElement.querySelector('.genre').innerHTML;
        clickedGenres.push(clickedGenre);
      }
      // console.log(clickedGenres); // example: ["Thriller,Drama", "Thriller,Drama,Crime", "Biography,Drama,History"] => array of string
      // get the unique list of liked genre
      const likedGenres = mergeStringArray(clickedGenres);
      // console.log(likedGenres); // example: ["Thriller", "Drama", "Crime", "Comedy", "Romance"]
      // new array of movies that contain the liked genre as in the list from the database 'movies'
      const suggestFavoriteMovies = suggestMovies(likedGenres);
      // Get the max 10 random unique movies from the array above
      const randomTenFavoriteMovies = randomMaxTenMovies(suggestFavoriteMovies);
      // console.log(randomTenFavoriteMovies);
      // Update the current Ten Movies for Carousel & change the current first index into 0
      state.tenMoviesForCarousel = randomTenFavoriteMovies;
      state.currentFirstIndex = 0;
      // Rerender
      carousel.innerHTML = innerHtmlCarousel();
    } else {
      // if there is no filled heart => display as default with ten general movies
      state.tenMoviesForCarousel = randomTenGeneralMovies;
      state.currentFirstIndex = 0;
      // Rerender
      carousel.innerHTML = innerHtmlCarousel();
      // console.log(randomTenGeneralMovies);
    }
  }
});
