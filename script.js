function startUp() {
  console.log("Enter your name");
  console.log("Name");
  console.log("Submit");
  var userName = document.getElementById("userName");
  var output = document.getElementById("output");
  var userName = userName.value;
  console.log("Hello");
  output.value = "Hello" + userName;
}

function countUp() {
  console.log("letter sum");
  var userName = document.getElementById("userName");
  var sumLetter = document.getElementById("sumLetter");
  var userName = userName.value;
  console.log("User name is: " + userName);
  var letters = userName.length;
  console.log("name length" + letters);
  sumLetters.value =
    "You have " + letters + " letters in your name.";
  console.log("Number of letters in your name");
}