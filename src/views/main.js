// Function innerHtml to display movies & popup (hidden by default) depends on the parameter 'array'
export function innerHtmlMain(array) {
  let contentHtml = '<div class="d-flex flex-wrap justify-content-around"> ';
  for (let i = 0; i < array.length; i++) {
    contentHtml += `    
        <div class="box-popup">       
            ${array[i].img ? `
            <div class="box" id="${i}">                            
                <img src="images/${array[i].imdb}.jpg" class="box__img" alt="...">
                <div class="box__click">
                    <h5 class="box__title"><i class="far fa-heart"></i></h5>               
                </div>  
            </div>          
            ` : `
            <div class="box" id="${i}">
                <div class="box__click">
                    <h5 class="box__title"><i class="far fa-heart"></i></h5>
                    <p class="box__title--center">${array[i].title}</p>
                </div>
            </div>
            `} 
            <div class="popup">
                <div class="card fixed-center-popup--hidden" style="width: 40rem;">
                    <div class="card-body">
                        <h5 class="card-title">Title: ${array[i].title}</h5>
                        <p class="card-text genre">${array[i].genres}</p>
                        <p class="card-text">Year: ${array[i].year}</p>
                        <p class="card-text">Note: ${array[i].note}</p>
                        <p class="card-text">Plot: ${array[i].plot}</p>
                        <a href="#" class="btn btn-secondary btn-close">Close</a>
                    </div>                    
                </div>
                <div class="overlay--hidden"></div>
            </div> 
        </div>               
            `;
  }
  contentHtml += '</div>';
  return contentHtml;
}
// Content of the Main element
export function renderMain(array) {
  const mainElement = `
    <main id="main">
    ${innerHtmlMain(array)}
    </main> 
  `;
  return (mainElement);
}
