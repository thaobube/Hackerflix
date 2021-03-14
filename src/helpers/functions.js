// ----------MERGE 2 ARRAYS WITHOUT DUPLICATING ITEMS------------

// ****Example to merge 2 arrays without duplication the items***
// const a = [1, 2, 3];
// const b = [101, 2, 1, 10];
// const c = a.concat(b.filter((item) => a.indexOf(item) < 0));
// console.log(c); // c is [1, 2, 3, 101, 10]

// Create a function to merge 2 arrays without duplication the items
export function mergeTwoArray(array1, array2) {
  const newArray = array1.concat(array2.filter((item) => array1.indexOf(item) < 0));
  return newArray;
}

// ----------MERGE MULTI ARRAYS WITHOUT DUPLICATING ITEMS-----------

// Example: [thriller, drama]; [thriller, drama, crime]; [commedy, romance] => [thriller, drama, crime, commedy, romance]

// Step 1: Concat all the arrays into 1 array - which might contain dupplicated items
function concatMutipleArray(arrayOfArray) {
  const concatArray = [];
  for (const array of arrayOfArray) {
    for (const item of array) {
      concatArray.push(item);
    }
  }
  return concatArray;
}

// Step 2: get the unique items (remove duplicated items)
function getUniqueArray(array) {
  const uniqueArray = [];
  for (const item of array) {
    if (uniqueArray.indexOf(item) === -1) {
      uniqueArray.push(item);
    }
  }
  return uniqueArray;
}

// Step 3: create a function to merge multiple arrays (an array of arrays) without duplication
function mergeMultiArray(arrayOfArray) {
  return getUniqueArray(concatMutipleArray(arrayOfArray));
}

// --------MERGE AN ARRAY OF STRING INTO ONE ARRAY WITHOUT DUPLICATING ITEMS-----------
// example: ["Thriller,Drama", "Thriller,Drama,Crime", "Biography,Drama,History"] => ['Thriller', 'Drama', 'Crime', 'Biography', 'History']

// Step 1: convert into string using toString() method => returns a string with all the array values, separated by commas. => "Thriller,Drama,Thriller,Drama,Crime,Biography,Drama,History"
// Step 2: split a string into an array of substrings using ',' => ["Thriller", "Drama", "Thriller", "Drama", "Crime", "Biography", "Drama", "History"]
// Step 3: get the unique items (remove duplicated items) => ['Thriller', 'Drama', 'Crime', 'Biography', 'History']

export function mergeStringArray(arrayOfString) {
  const convertArray = arrayOfString.toString().split(',');
  const uniqueConvertArray = getUniqueArray(convertArray);
  return uniqueConvertArray;
}

// --------------SORT AN ARRAY OF OBJECT BY A PROPERTY VALUE WITHOUT CHANGING THE ORIGINAL ARRAY-----------

// ***( Array/object values are copied by reference instead of by value.)***
// const arrayA = [5, 2, 1, 4];
// 3 Examples to duplicate an array
// const arrayB = arrayA.slice();
// const arrayC = [...arrayA];
// const arrayD = arrayA.concat([]);

// ***Sort numbers in an array in ascending order:***
// points.sort(function(a, b){return a-b});
// Sort numbers in an array in descending order:
// points.sort(function(a, b){return b-a});

// Function to sort an array of movies by note into a new array in descending order
export function descArray(array) {
  const arrayCopy = array.slice();
  const sortArray = arrayCopy.sort((a, b) => b.note - a.note);
  return sortArray;
}
// Function to sort an array of movies by note into a new array in ascending order
export function ascArray(array) {
  const arrayCopy = array.slice();
  const sortArray = arrayCopy.sort((a, b) => a.note - b.note);
  return sortArray;
}
