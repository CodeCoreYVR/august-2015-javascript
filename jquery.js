car = {
  name: "Toyota",
  info: function() {
    console.log("I'm a " + this.name);
  }
}

console.log("A");
setTimeout(function(){
  console.log("Hello World");
}, 2000);
console.log("B");

var counter = 0;
timer = setInterval(function(){
  console.log(counter);
  counter++;
}, 1000);



var age = prompt("what is your age?");

if(age >= 50) {
  console.log("old");
} else {
  console.log("young");
}


var forEach = function(arr, func) {
  for(var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

forEach([1,2,3], function(x){
  console.log(">>>" + x.toString());
});

var sayLater = function(s) {
  setTimeout(function(){
    console.log(s.toString());
  }, 5000);
}

sayLater(100);
sayLater("Hell");

var count = 0;
for(var key in window) {
  console.log(key);
  count++;
}
console.log(count);


var isEven = function (x) { return x % 2 == 0; };

var filter = function(arr, func) {
  result = [];
  for(var i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filter([0, 1, 2, 3, 4], isEven)); // => [2, 4]



$(".shape").on("click", function(){
  console.log("shape clicked");
});


$(".blue.circle").on("mouseenter", function(){
  console.log("Blue Circle: Go Away!");
});

$(".blue.circle").on("mouseleave", function(){
  console.log("Blue Circle: Goodbye!");
});

$("tr").on("mouseenter", function() {
  $(this).attr("class", "highlight");
});

$("tr").on("mouseleave", function() {
  $(this).attr("class", "");
});

car = {brand: "Toyota",
       info: function() {
         console.log("I'm a " + this.brand + "Car");
       }}

$("#button-1").on("click", function() {
  $(".shape").remove();
});

$("#button-2").on("click", function() {
  $(this).attr("disabled", true);
})

$("#button-3").on("click", function() {
  $("#button-message").html("Button 3 was clicked");
})


$(".shape").on("click", function() {
  console.log($(this).attr("class"));
})

$(".shape").on("click", function() {
  $(this).hide();
});

$(".shape").on("click", function() {
  $(this).parents().remove();
});

$(".container").on("click", function() {
  $(this).children().remove();
});

$("a").on("mouseenter", function(){
  console.log("You mouse entered a link to" + $(this).attr("href"));
});

$(".button").on("click", function(){
  $("#button-message").html("Button " + $(this).attr("id") + " was clicked");
});
