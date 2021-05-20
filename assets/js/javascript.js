document.body.onload = addElement;

//adds color coding to each timeblock. Couldn't figure out how to dry it up. :(

var colorCodeNine = function(){
  var d = new Date(); 
 
  var currentHour = d.getHours();

  if (currentHour === 9) {
    $("#nine").css("background-color", "grey")
  }
  else if (currentHour > 9){
  $("#nine").css("background-color", "red"); 
  }

  else {
    $("#nine").css("background-color", "green");
  }
}



var colorCodeTen = function () {
  var d = new Date();

  var currentHour = d.getHours();

  if (currentHour === 10) {
    $("#ten").css("background-color", "grey")
  }
  else if (currentHour > 10) {
    $("#ten").css("background-color", "red");
  }

  else {
    $("#ten").css("background-color", "green");
  }
}

var colorCodeEleven = function () {
  var d = new Date();

  var currentHour = d.getHours();

  if (currentHour === 11) {
    $("#eleven").css("background-color", "grey")
  }
  else if (currentHour > 11) {
    $("#eleven").css("background-color", "red");
  }

  else {
    $("#eleven").css("background-color", "green");
  }
}

var colorCodeNoon = function () {
  var d = new Date();

  var currentHour = d.getHours();

  if (currentHour === 12) {
    $("#noon").css("background-color", "grey")
  }
  else if (currentHour > 12) {
    $("#noon").css("background-color", "red");
  }

  else {
    $("#noon").css("background-color", "green");
  }
}

var colorCodeOne = function () {
  var d = new Date();

  var currentHour = d.getHours();

  if (currentHour === 13) {
    $("#one").css("background-color", "grey")
  }
  else if (currentHour > 13) {
    $("#one").css("background-color", "red");
  }

  else {
    $("#one").css("background-color", "green");
  }
}

var colorCodeTwo = function () {
  var d = new Date();

  var currentHour = d.getHours();

  if (currentHour === 14) {
    $("#two").css("background-color", "grey")
  }
  else if (currentHour > 14) {
    $("#two").css("background-color", "red");
  }

  else {
    $("#two").css("background-color", "green");
  }
}

var colorCodeThree = function () {
  var d = new Date();

  var currentHour = d.getHours();

  if (currentHour === 15) {
    $("#three").css("background-color", "grey")
  }
  else if (currentHour > 15) {
    $("#three").css("background-color", "red");
  }

  else {
    $("#three").css("background-color", "green");
  }
}

var colorCodeFour = function () {
  var d = new Date();

  var currentHour = d.getHours();

  if (currentHour === 16) {
    $("#four").css("background-color", "grey")
  }
  else if (currentHour > 16) {
    $("#four").css("background-color", "red");
  }

  else {
    $("#four").css("background-color", "green");
  }
}

var colorCodeFive = function () {
  var d = new Date();

  var currentHour = d.getHours();

  if (currentHour === 17) {
    $("#five").css("background-color", "grey")
  }
  else if (currentHour > 17) {
    $("#five").css("background-color", "red");
  }

  else {
    $("#five").css("background-color", "green");
  }
}

//runs color coding functions for each block

colorCodeNine();
colorCodeTen();
colorCodeEleven();
colorCodeNoon();
colorCodeOne();
colorCodeTwo(); 
colorCodeThree();
colorCodeFour(); 
colorCodeFive(); 



//adds edit feature to time blocks

$(".time-block").on("click", "p", function () {
  var text = $(this)
  .text()
  .trim();

  var textInput = $("<textarea>")
    .removeAttr("style")
    .addClass("form-control")
    .val(text)
    .id("input")

  $(this).replaceWith(textInput);
  textInput.trigger("focus");

});

var taskNameInput = document.querySelector("input[name='task-name']");
console.log(taskNameInput);





//adds edits when user clicks away


$(".time-block").on("blur", "textarea", function () {
  var text = $(this)
    .val()
    .trim();

  var taskP = $("<p>")
    .addClass("m-1")
    .text(text);
 
  $(this).replaceWith(taskP);
});









function addElement() {

  

  // adds today's date
  const todaysDate = document.createTextNode(moment().format('llll'));

  //appends to display under the greeting
  document.getElementById("currentDay").appendChild(todaysDate);


}