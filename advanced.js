// 1. Write a function that takes any number, but always returns 0.

var trick = function(n) {
  if(!isNaN(n)) {
    return 0;
  }
}

// 2. Write a function that takes a user object with 'name' and 'age' properties, and logs the string "[name] is [age] years old."

var info = {name: "Mehdi", age: "30"};

var details = function(info) {
  return info.name + " is " + info.age + " years old";
}

details(info);

// 3. Write a function that takes a sentence, and returns an object of all the words and their lengths.
//   `wordLengths("Hello world"); => { "Hello": 5, "world": 5 }`

var wordLengths = function(sentence) {
  var array  = sentence.split(" ");
  var result = {};
  for(var index = 0; index < array.length; index++) {
    result[array[index]] = array[index].length;
  }
  return result;
}
wordLengths("Hello world");


var greetMe = function() {
  return "Hello There!";
}

me = {
  name: "Tam",
  city: "Vancouver",
  greeting: greetMe
}

console.log(me.name);
console.log(me.city);
console.log(me.greeting());


var stop = function() {
  console.log("screeeeth!");
}

var car = {
  brand: "BMW",
  year: "2012",
  stop: stop
}

car.stop();





var rectangle = {
  width: 100,
  height: 50,
  area: function(){
    return this.width * this.height;
  }
}

console.log(rectangle.area());


var stop = function() {
  if(!isNaN(this.speed)) {
    var result = "scr";
    for(var x =0; x < this.speed; x++) {
      result += "e";
    }
    result += "tch!";
    console.log(result);
  } else {
    if(this.speed === "fast") {
      console.log("Screeeeetch");
    } else if (this.speed === "medium") {
      console.log("RRch");
    } else if (this.speed === "slow") {
      console.log("sh");
    } else {
      console.log("Yikes! I don't know how fact I'm going");
    }
  }
}

car1 = {speed: 100, stop: stop};
car1.stop();


car2 = {speed: "asdfasdf", stop: stop};
car2.stop();


car3 = {speed: "slow", stop: stop};
car3.stop();

car4 = {speed: "medium", stop: stop};
car4.stop();




var callWithFive = function(func) {
  func(5);
}

var square = function(x) {
  console.log(x * x);
}

var increment = function(x) {
  console.log(x + 1);
}

callWithFive(square);
callWithFive(increment);


var call = function(x, func, y) {
  var result = x;
  for(var i = 0; i < y; i++) {
    result = func(result);
  }
  return result;
}

var doubleIt = function(x) {
  return 2 * x;
}

call(5, doubleIt, 3);

call(5, function(x) { return x + 1; }, 3);

call(5, function(x) {
  return x + 1;
}, 3);

// Write a function `map` which takes an array and a function as parameters, and returns an // array where each item is the item in the original array with the function applied to it.


var map = function(array, func) {
  result = [];
  for(var x = 0; x < array.length; x++) {
    result.push(func(array[x]));
  }
  return result;
}

map([1,2,3,4,5], function(x){
  return x + 1;
});

// stretch:
var map = function(array, arrayFunction) {
  result = [];
  for(var x = 0; x < array.length; x++) {
    var currentItem = array[x];
    for(var y = 0; y < arrayFunction.length; y++) {
      currentItem = arrayFunction[y](currentItem);
    }
    result.push(currentItem);
  }
  return result;
}

var increment = function(x){
  return x + 1;
}

var doubleIt = function(x) {
  return 2 * x;
}

map([1,2,3,4,5], [increment, doubleIt]);

// Use your `map` function to produce an array of squares of:
//
// `[1, 2, 3, 4, 5, 6, 7, 8, 9]`
//
// __Stretch:__ Use `map` to produce an array of the number of characters of each string in the following array:
//
// `['hello', 'data', 'eat cheese', 'walking']`


var map = function(array, func) {
  result = [];
  for(var x = 0; x < array.length; x++) {
    result.push(func(array[x]));
  }
  return result;
}

map([1,3,4,5,6], function(x){
  return x * x;
});

map(['hello', 'data', 'eat cheese', 'walking'], function(word){
  return word.length;
});

setTimeout(function() {
  console.log("Delayed Hello World");
}, 5000);

console.log("Hello 1");
setTimeout(function(){
  console.log("Hello 1.5");
}, 3000);
bconsole.log("Hello 2");

console.log("Hello 1");
for(var x = 0; x < 100000000000; x++) { };
console.log("Hello 2");


// Change your page script to write to the page "Loading..." and then, 3 seconds later, "Hello, World!"
//
// __Stretch:__ Make your page display "Ready...", then "Set...", then "Go!", one second after another.

document.write("loading");

setTimeout(function(){
  document.write("loaded");
}, 3000);

setTimeout(function(){
  document.write("Ready..");
  setTimeout(function(){
    document.write("Set..");
    setTimeout(function(){
      document.write("Go..");
    }, 1000);
  }, 1000);
}, 1000);

var x = function() {
  console.log(".");
  setTimeout(x, 1000);
};

x();

setInterval(function(){
  console.log("Hello world");
}, 1000);



var x = 1;

setInterval(function() {
  console.log(x);
  x += 2;
},20);

var y = 0;

setInterval(function() {
  console.log(y);
  y += 2;
},20);


var timer = setInterval(function() {
  console.log(".");
}, 1000);

setTimeout(function(){
  clearInterval(timer);
}, 10010);

var countDown = 10;

var myInterval = setInterval(function() {
  console.log(countDown--);
  if(countDown <= 0) {
    console.log("Blast off!!!");
    clearInterval(myInterval);
  }
}, 1000);
