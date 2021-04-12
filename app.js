console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Veianya";
let lastName = "Hansen";
var myAge = 37;

// Exercise 2
let fullName = firstName + " " + lastName;
let templateFullName = `${firstName} ${lastName}`;
console.log("fullName: ", fullName);
console.log("templateFullName: ", templateFullName);

// Exercise 3
let myStory;
let city = "Phoenix";
let pastime = "code, listen to music, read, volunteer, and go walking";

myStory = `My name is ${fullName}. I live in ${city} and I like to ${pastime}.`;

console.log(myStory);
