//simple true/false function
function poop(myCondition) {
  if (myCondition) {
    console.log("It was true");
    return; //?
  } else console.log("It was false");
  return; //still don't know why/when exactly return is used
}
//poop(true);
//poop(false);

//comparison with equality operator

function testEqual(val) {
  if (val == 12) {
    console.log("Equal");
    //return "Equal";
  } else console.log("Not Equal");
  //return "Not Equal";
}

testEqual(12);

//Strict equality Operator
//=== different data types aren't considered equal - Strictly equal
//== different data types are considered equal
var player = "3";
if (player === 3) {
  console.log("yep");
} else console.log("nope");

//!= is not equal, so opposite of ==
//!== Strictly not equal
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//> Greater than
//>= Greater than, or equal to
//< Less than
//<= Less than or equal to
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
//>=
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//&& is and, or && = 'and'
//returns true if both statements to the left and right are true
//same can be done by nesting if statements inside another (without using &&)
//nested if
function testLogicalAnd(val) {
  if (val) {
    if (val) {
      return "Yes";
    }
  }
  return "No";
}

testLogicalAnd(10);

//using &&
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

testLogicalAnd(10);

//|| is or
//|| = or
//returns true if either operand is true

//else
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else result = "5 or Smaller";
  return result;
}

testElse(4);

//else if
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
testElseIf(7);
//another else if - order matters
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

//chained If Else Statements
function testSize(num) {
  if (num < 5) {
    return console.log("Tiny");
  } else if (num < 10) {
    return console.log("Small");
  } else if (num < 15) {
    return console.log("Medium");
  } else if (num < 20) {
    return console.log("Large");
  } else {
    return console.log("Huge");
  }
}

testSize(6);

// golf, par, strokes task
var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == par - 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}

console.log(golfScore(5, 6));
