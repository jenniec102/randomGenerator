// generate a meal
// current options to be randomly generated
proteins = ["eggs", "beef", "chicken", "pork", "salmon", "fish", "tofu"];
carbs = ["rice", "noodles", "ramen", "bread", "potatoes"];
sides = ["avocado", "bell peppers", "carrots", "asparagus", "spinach", "beets", "salad", "soup"];
desserts = ["cake", "brownie", "cookies", "ice cream", "fruit", "parfait", "pie"];

var outputText = document.getElementById("outputIntro");
var output = document.getElementById("output"); //output displays generated meal

//submit button generates meal via an event listener
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", generate);

function generate(){
  // inputs
  var day = document.getElementById("day").value;
  var protein = document.getElementById("protein").checked;
  var carb = document.getElementById("carb").checked;
  var side1 = document.getElementById("side1").checked;
  var side2 = document.getElementById("side2").checked;
  var dessert = document.getElementById("dessert").checked;
  // randomly choose each category
  var randProtein = Math.floor(Math.random()*proteins.length);
  var randCarb = Math.floor(Math.random()*carbs.length);
  var randSide1 = Math.floor(Math.random()*sides.length);
  var randSide2 = Math.floor(Math.random()*sides.length);
  var randDesserts = Math.floor(Math.random()*desserts.length);

  outputText.innerText = "Try this Meal for " + day + " :";

  var finalOutputString = "| ";

  if (protein) {
    finalOutputString +=  proteins[randProtein] + " | ";
  }
  if (carb) {
    finalOutputString +=  carbs[randCarb] + " | ";
  }
  if (side1) {
    finalOutputString +=  sides[randSide1] + " | ";
  }
  if (side2) {
    finalOutputString +=  sides[randSide2] + " | ";
  }
  if (dessert) {
    finalOutputString +=  desserts[randDesserts] + " | ";
  }

  output.innerText = finalOutputString;

  restyle();
}

function restyle(){
  output.style.textShadow = "0.8px 0.8px 0 white, -0.8px 0.8px 0 white, 0.8px -0.8px 0 white, -0.8px -0.8px 0 white";

  var textDeco = ["blink", "line-through", "overline", "underline"];
  randDeco = Math.floor(Math.random()*textDeco.length);
  output.style.textDecoration = "text-decoration: " + textDeco[randDeco];

  var randSize = Math.floor(Math.random()*3);
  randSize += 1; //font size will always be greater than or equal to 1
  output.style.fontSize = randSize + "em";

  var randR = Math.random()*255;
  var randG = Math.random()*255;
  var randB = Math.random()*255;
  output.style.backgroundColor = "rgb(" + randR + "," + randG + "," + randB + ")" //add commas

  var randPad = Math.random()*8;
  output.style.padding = randPad + "vmin";
}
