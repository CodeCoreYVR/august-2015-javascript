/* This is the main JavaScript file
   We put our Javascript practice code in here */

// var name = prompt("what is your name");
//
// alert("Hello, " + name);
//
// document.write(name);
//
// console.log(name);

// var a = 5;
//
// if (a > 3) {
//   console.log("Big");
// } else {
//   console.log("Small");
// }

// var age = prompt("What's your age?");
// if (age >= 50) {
//   console.log("You're very wise!");
// } else {
//   console.log("You are so youthful!");
// }

// var yes = confirm("Do you want to enter the secret key?");
//
// if(yes) {
//   var pass = prompt("Enter the password");
//
//   if (pass === "opensesame") {
//     alert("The secret number is 714");
//   } else {
//     alert("Wrong password");
//   }
// } else {
//   alert("Ok Goodbye!");
// }

// var password = prompt("Enter a password between 9 and 12 characters");
//
// if (password.length > 12) {
//   alert("too long");
// } else if(password.length < 8) {
//   alert("too short");
// } else {
//   alert("Just right!");
// }

// var counter = 0;
//
// while (counter <= 100) {
//   console.log(counter);
//   // counter += 1;
//   counter++;
// }

// var i = 10;
//
// while (i > 5) {
//   i -= 1;
// }
//
// console.log(i * 2);

// var number = 0;
//
// while(number <= 100) {
//   // if (number% 2 === 0) {
//   //   console.log(number);
//   // }
//   // number += 1;
//   console.log(number);
//   number += 2;
// }

// var beers = 100;
//
// while(beers >= 0) {
//   console.log(beers + " bottles of beer on the wall");
//   console.log(beers + " bottles of beer");
//   beers--; // beers -= 1;
//   console.log("Take one down, pass it around," + beers + " bottles of beer on the wall");
// }

// for(var n = 0; n <= 100; n++) {
//   console.log(n);
// }

// for(var beers=100; beers > 0; beers--) {
//     console.log(beers + " bottles of beer on the wall");
//     console.log(beers + " bottles of beer");
//     console.log("Take one down, pass it around," + (beers-1) + " bottles of beer on the wall");
// }

// This will display the first number divisible by 5
// var counter = 1;
//
// while(counter < 100) {
//   if(counter % 5 == 0) {
//     console.log(counter);
//     break;
//   }
//   counter++;
// }

// var result = 0;
//
// for(var i = 5; i < 10; i += 1 ) {
//   result += i;
//   if(i % 3 == 0) {
//     break;
//   }
// }
//
// console.log(result);


// for(var num = 100; num >= 0; num--) {
//   console.log(num);
// }

// var result = 0;
//
// for(var num = 0; num < 100; num++) {
//   result += num;
// }
//
// console.log(result);

// var n = 42;
//
// while(n !== guess) {
//   var guess = parseInt(prompt("Guess"));
//   if(n > guess) {
//     alert("Guess a higher number");
//   } else if(n < guess) {
//     alert("Guess a lower number");
//   }
// }
// alert("The ultimate answer");

// var first = ["Hello", 5, 'a'];
// // first.splice(1,1, 6);
// first[1] = 6;
// console.log(first);
//
// var second = [];
//
// for(var i = 0; i <= 100; i++) {
//   second.push(i);
// }
//
// console.log(second);
//
// console.log(second.length);


//
// var myArray = [1,2,3,4,5];
//
// for(var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// var sum = 0;
//
// var array1 = [0, 5, 6, -12];
//
// for(var n = 0; n < array1.length; n++) {
//   sum += array1[n];
// }
//
// console.log(sum);
//
// var array2 = ["apple", "dog", "computer", "cup"];
//
// for(var index = 0; index < array2.length; index++) {
//   console.log(array2[index] + " has " + array2[index].length + " characters");
// }

// var greeting = "Hello";
//
// console.log(greeting.split(""));
//
// var input = prompt("give me a sentence");
//
// console.log(input.split(" ").length);
//
// var result = [];
//
// for(var num = 0; num < 100; num++) {
//   result.push(num);
// }
//
// console.log(result.join(""));

// var doubleIt = function(a) {
//   console.log(a * 2);
// }
//
// doubleIt(5);
//
//
// function sum(a, b) {
//   console.log(a + b);
// }
//
// sum(5,6);

// var sum = function(a, b) {
//   a + b;
// }
// console.log(sum(4,5));
//
// var sum2 = function(a, b) {
//   return a + b;
// }
//
// console.log(sum2(4,5));

//
// var greet = function(name) {
//   return "Hello, " + name;
// }
//
// console.log(greet("Tam"));
//
// var reverseArray = function(array) {
//   return array.reverse();
// }
//
// console.log(reverseArray([1,2,3,]));

// var insultMe = function(name) {
//   return name + ", you dummy!";
// }
// console.log(insultMe(prompt("What is your name?")));

var increment = function(num) {
  return num + 1;
}

console.log(increment(5));

var doubleArray = function(array){
  // return array.map(function(x) { return x * 2;});
  for(var num = 0; num < array.length; num++) {
    // array[num] *= 2;
    array[num] += array[num];
  }
  return array;
}

console.log(doubleArray([1,2,3]));
