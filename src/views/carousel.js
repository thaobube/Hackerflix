import { state } from '../data/state';
// Create a function to display 10 selected movies (the CSS will display 1,2 or 3 movies depend on the screen size)

export function innerHtmlCarousel() {
  let contentInnerHtml = '';
  contentInnerHtml += `<a name="home"></a>
  <div class="background">  
  `;
  contentInnerHtml += `
  <div class="carousel">
    <p class="carousel__title">Movies suggestions for you:</p>
    <div class="carousel__container">
        <div class="arrow arrow--previous">
        <i class="fas fa-angle-left"></i>
        </div>
        <div class="main-pictures">
        `;
  for (let i = state.currentFirstIndex; i < state.tenMoviesForCarousel.length; i++) {
    contentInnerHtml += `
            ${state.tenMoviesForCarousel[i].img ? `
            <img class="slideImage" src="images/${state.tenMoviesForCarousel[i].imdb}.jpg" alt="">
            ` : `
            <div class="box slideImage" style="width: 13rem; height: 19rem;">
                <p class="box__title--center">${state.tenMoviesForCarousel[i].title}</p>
            </div>
            `}
        `;
  }
  contentInnerHtml += `
            <div class="slideImage slideImage--empty">
            </div>
            <div class="slideImage slideImage--empty">
            </div>
        </div>
        <div class="arrow arrow--next">
            <i class="fas fa-angle-right"></i>
        </div>
    </div>
  </div>
  </div>    
    `;
  return contentInnerHtml;
}

// Content of the carousel element
export function renderCarousel() {
  const carouselElement = `
  <div id="carousel">
    ${innerHtmlCarousel(state.tenMoviesForCarousel)}
  </div> 
`;
  return (carouselElement);
}

// Create a function to change the current first index when clicking to next/previous arrow

export function nextSlide() {
  if (state.currentFirstIndex < state.tenMoviesForCarousel.length - 1) {
    state.currentFirstIndex += 1;
  } else {
    state.currentFirstIndex += 0;
  }
  console.log(state.currentFirstIndex);
}
export function previousSlide() {
  if (state.currentFirstIndex >= 1) {
    state.currentFirstIndex -= 1;
  } else {
    state.currentFirstIndex -= 0;
  }
  console.log(state.currentFirstIndex);
}
