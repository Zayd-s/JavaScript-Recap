//task - add the number to the end of the array, then remove the first element of the array
// the nextInLine function should then return the element that was removed.
function nextInLine(arr, item) {
  // Only change code below this line

  return item;
  // Only change code above this line
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//solved
function nextInLine(arr, item) {
  // Only change code below this line
  //return arr.push(item), arr.shift(); - my method
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
