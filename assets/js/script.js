// *** between 8-128 characters
// *** lower, upper, numeric, special char
// *** password shown in alert or to the page
// *** all input validated
// *** at least one char type must be selected

// functions generating random upper and lower case and number and symbol characters
function randUpperFunc() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}
function randLowerFunc() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}
function randNumberFunc() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}
// generate array of special characters and select random one
let special = "{|}~`[\]^_@:#';&<=$>.)?*/,!%(+-";
let specialArr = special.split("");
function randSpecialFunc() {
  return specialArr[Math.floor(Math.random() * specialArr.length)];
}

// tell user what to do
alert("Click the red 'Generate Password' button to start!");

// onclick event listener for pressing the generate password button
document.getElementById("generate").addEventListener("click", function() {
  // keep prompting for character count until it is a number
  // and not null, "", or less than 8 or more than 128
  do {
    var charCount = prompt("How many characters does your password need to be? (must be between 8 and 128)");
  } while (isNaN(charCount) || charCount < 8 || charCount > 128 || charCount === null || charCount === "");

  // ask user whether they want to add different types of characters
  // using confirm boxes where cancel is no and okay is yes
  // also makes sure at least one of these is true
  do {
    alert("Please select at least one character type to add to this password.");
    var upperBool = confirm("Would you like this password to contain upper case letters?");
    var lowerBool = confirm("Would you like this password to contain lower case letters?");
    var specialBool = confirm("Would you like this password to contain symbols?"); 
    var numberBool = confirm("Would you like this password to contain numbers?");
  } while (!upperBool && !lowerBool && !specialBool && !numberBool);

  //console.log(upperBool + " " + lowerBool + " " + specialBool + " " + numberBool);

  var randBool = {0: upperBool, 1: lowerBool, 2: specialBool, 3: numberBool};
  //console.log(randBool);

  // for loop to go through every char in the password
  // if the user checked it to have that character type
  // then a random one is added intil the string is the length needed
  var charArr = [];
  var passwordStr = "";
  do {
    var randCharType = Math.floor(Math.random() * 4);
    switch (randCharType) {
      case 0:
        if (randBool[randCharType] === true) { 
          var rand = randUpperFunc();
          //console.log("r0 " + rand);
          passwordStr += rand;
        }
        break;
      case 1:
        if (randBool[randCharType] === true) {
          var rand = randLowerFunc();
          //console.log("r1 " + rand); 
          passwordStr += rand;
        }
        break;
      case 2: 
        if (randBool[randCharType] === true) {
          var rand = randSpecialFunc();
          //console.log("r2 " + rand);
          passwordStr += rand;
        }
        break;
      case 3: 
        if (randBool[randCharType] === true) {
          var rand = randNumberFunc();
          //console.log("r3 " + rand);
          passwordStr += rand;
        }
        break;
      default:
        alert("Whoops!");
      }
    } while (passwordStr.length < charCount);
  
  // add password to textarea
  document.getElementById("password").innerHTML = passwordStr;
});



