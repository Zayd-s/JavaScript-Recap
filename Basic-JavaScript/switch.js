function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      console.log("alpha");
      break;
    case 2:
      console.log("beta");
      break;
    case 3:
      console.log("gamma");
      break;
    case 4:
      console.log("delta");
      break;
  }
  return answer;
}

caseInSwitch(4);

//fixed - use answer in each switch case
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

caseInSwitch(1);

// default switch
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return console.log(answer);
}

switchOfStuff("cool");

//Multiple Identical Options in Switch statements
function sequentialSizes(val) {
  var answer = "";

  switch (val) {
    case 1:
      answer = "Low";
    case 2:
      answer = "Low";
    case 3:
      answer = "Low";
      break;
    //
    case 4:
      answer = "Mid";
    case 5:
      answer = "Mid";
    case 6:
      answer = "Mid";
      break;
    //
    case 7:
      answer = "High";
    case 8:
      answer = "High";
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

sequentialSizes(1);

//convert If Else chain with Switch ↓
function chainToSwitch(val) {
  var answer = "";
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  return answer;
}

chainToSwitch(7);
//into >>>
function chainToSwitch(val) {
  var answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}

chainToSwitch(7);
