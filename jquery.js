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

$(".container").on("click", function() {
  $(this).children().addClass("highlight");
});

$(".shape").on("mouseenter", function(){
  $(this).toggleClass("highlight");
});


$(".large").on("click", function(){
  $(this).removeClass("medium");
  $(this).addClass("small");
});

$(".medium").on("click", function(){
  $(this).removeClass("medium");
  $(this).addClass("small");
});

$(".small").on("click", function(){
  $(this).hide();
});

$(".shape").on("click", function(){
  if($(this).hasClass("small")){
    $(this).hide();
  } else if($(this).hasClass("medium")) {
    $(this).removeClass("medium").addClass("small");
  } else if($(this).hasClass("large")) {
    $(this).removeClass("large").addClass("medium");
  }
});

$("[type='submit']").on("click", function(){
  $("#form-message").html($("[type='text']").val());
});

$("[type='submit']").on("click", function(){
  $("#form-message").append($("[type=text]").val() + "<br>");
});

$("#button-1").on("click", function(){
  $("#green-container").toggle();
});

$("#button-2").on("click", function(){
  $("#button-message").fadeOut();
});

$("#button-3").on("click", function(){
  $("#button-message").fadeIn();
});

$("#button-4").on("click", function(){
  $("#green-container").slideUp();
});


$(document).on("keypress", function(event){
  var charCode = event.which;
  console.log(event);
  var key = String.fromCharCode(charCode);
  console.log("The key: " + key + " was pressed");
});

$("#green-container").click(function(e){
  console.log(e);
});


$(document).keypress(function(event){
  var charCode = event.which;
  var key = String.fromCharCode(charCode);
  if(key === "b") {
    $(".blue.shape").toggle();
  } else if(key === " ") {
    event.preventDefault();
    $("#green-container").append("<div class='small blue circle shape'></div>");
  }
});

$("input[type='text']").on("keyup", function() {
  console.log("value is: " + $(this).val());
});

$("form").on("submit", function(){
  $("[type=text]").val("");
});

$("form").on("submit", function(){
  var input = $("[type=text]").eq(0).val().toLowerCase();
  var colors = ["red", "blue", "green", "grey", "black"];
  if(colors.indexOf(input) >= 0) {
    $("." + input + ".shape").remove();
  } else {
    $("#form-message").html("Invalid Color");
  }
  $("[type=text]").val("");
});


$("#orange-container").click(function(){
  alert("orange container clicked");
});

$(".black.square").click(function(e){
  alert("black square clicked");
  e.stopPropagation();
});

$("a").click(function(e){
  alert("link clicked");
  e.preventDefault();
  // window.location = "http://www.codecore.ca";
});

$(".container").on("click", ".shape .circle", function() {
  console.log("Shape is clicked");
});
