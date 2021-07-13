function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

//passing values to functions with arguments/ into parameters
function functionWithArgs(param1, param2) {
  console.log(param1, param2);
}

functionWithArgs("lol", "ok");

//giving a sum
function functionWithArgs(n1, n2) {
  console.log(n1 + n2);
}

functionWithArgs(5, 1);

//scoping
var gScope = 10; //becomes a Global scoped variable, because it's not used in a function

//When you add var before the variable name, its scope is determined by where it is placed. Like so:
var num1 = 18; // Global scope
function fun() {
  var num2 = 20; // Local (Function) Scope - only visible within that function
  if (true) {
    var num3 = 22; // Block Scope (within an if-statement)
  }
}

//scoping in a function - local scope
function tScope() {
  var localScope = 10; //local (function) scope
  globalScope = 5;
  console.log(localScope);
}
tScope();
//console.log(localScope); //won't work because it's only visible in the function
console.log(globalScope);

//return a value from a function with return
console.log("hikirjseigjersigo");
function timesFive(number) {
  return number * 5; //can use console.log() instead of return
}
var answer = timesFive(5);
console.log(answer);

//assignment with a returned value/ return value of a function, assigning it to a variable
var processed = 0; // random variable made

function processArg(num) {
  return (num + 3) / 5; //function, with "num" variable. can now assign any argument to it
}

processed = processArg(7); //an example argument is 7. It will complete the rest of the function with 7. It then assigns the returned function value to the variable called processed.
