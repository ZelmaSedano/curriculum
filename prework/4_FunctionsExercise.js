// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.
function logGreeting() {
  console.log('Hello!');
}

logGreeting();

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.
function getName(str) {
  return str;
}

console.log(getName('Zelma'));

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().
function logGreeting2() {
  let name = getName('Zelma');

  return 'Hello! My name is ' + name;
}

console.log(logGreeting2());

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sum(1,2,3));
console.log(sum(4,5,6));
console.log(sum(7,8,9));

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.
function oldEnough(num) {
  if(num <= 14 || num >= 64) {
    return true;
  } else {
    return false;
  }
}

console.log(oldEnough(16));
console.log(oldEnough(14));
console.log(oldEnough(35));
console.log(oldEnough(66));

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.
function repeatString(num, str) {
  // create empty string to hold repeats
  let results = '';
  
  // loop and add to results
  for(let i = 0; i < num; i++) {
    results += str;
  }

  return results;
}

console.log(repeatString(3, 'ha'));
console.log(repeatString(5, 'no'));
console.log(repeatString(17, 'hey'));

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does 
// It takes a given num and multiplies it by 2

// 2. What prints out for the value of y
// 4

// 3. What prints out for the value of z
// 8

// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
// Yes, I was correct :) 

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4); // 6
const b = mysteryFunction2(a, 1);  // 5
console.log("The value of a is " + a);  // 6
console.log("The value of b is " + b);  // 5

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
// It takes two give nums and subtracts them 

// 2. What prints out for the value of a
// 6
// 3. What prints out for the value of b
// 5
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
// I was :) 

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice";
let list = groceryList.split(', ');
// at first I didn't use a comma inside as a delimiter, but researched and found that it was the solution

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";

function splitArray(arr) {
  // split array 
  split = arr.split('--->');

  let results = [];

  for(let i = 0; i < split.length-2; i++) {
    results += split[i];
  }

  return results;
}

console.log(splitArray(mySchedule));

// this one was hard!  I had to look up how to jump over the --->

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
