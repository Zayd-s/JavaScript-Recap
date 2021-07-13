//Arrays - (can store several pieces of data)
var sandwich = ["chocolate spread", "jam", "butter", 5, 6];
console.log(sandwich);

//can also nest arrays within each other - also called multi-dimensional array
var myArray = [
  ["cool", 5],
  ["cooler", 7],
];

//Access specific Array data with index
var indexArray = [10, 20, 30, 40];
indexArray[0]; //will equals 10
var indexArray2 = indexArray[1]; //indexArray2 will equals 20
console.log(indexArray2);

//Modify Array Data with indexes
var modifyArray = [50, 40, 30];
modifyArray[0] = 15; //will make first element of modifyArray equal to 15

//Access nested/multi-dimensional arrays with index
console.log("Access nested Array with index:");

var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
var myData = myArray[2][1]; // will equals 8, because index counting starts from 0
console.log(myData);

//manipulating arrays

//.pop() = removes last element of an array
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

//.push() - adds element to end of array
//.shift() - removes first element of an array
//.unshift() - adds element to beginning of array
var myArray = [
  ["John", 23],
  ["cat", 2],
];
myArray.push("hi");
console.log(myArray);

//can also manipulate elements in arrays and add more arrays using these techniques
var myArray = [
  ["John", 23],
  ["cat", 2],
];
myArray.push(["cool", 5]);
console.log(myArray);

//
var myArray = [["John", 23], ["cat", 2], 9];
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);

//making a list
var myList = [
  ["Chocolate", 5],
  ["cat food", 2],
  ["milk", 2],
  ["cereal", 3],
  ["Water", 6],
];
