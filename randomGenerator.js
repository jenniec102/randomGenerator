// generate a meal
// current options to be randomly generated
proteins = ["eggs", "beef", "chicken", "pork", "salmon", "fish", "tofu"];
carbs = ["rice", "noodles", "ramen", "bread", "potatoes"];
sides = ["avocado", "bell peppers", "carrots", "asparagus", "spinach", "beets", "salad", "soup"];
desserts = ["cake", "brownie", "cookies", "ice cream", "fruit", "parfait", "pie"];

var outputText = document.getElementById("outputIntro");
var output = document.getElementById("outputDiv"); //output displays generated meal

//submit button generates meal via an event listener
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", generate);

function generate(){
  // inputs
  var day = document.getElementById("day").value;
  var protein = document.getElementById("protein").value;
  var carb = document.getElementById("carb").value;
  var side1 = document.getElementById("side1").value;
  var side2 = document.getElementById("side2").value;
  var dessert = document.getElementById("dessert").value;
  // randomly choose each category
  var randProtein = Math.floor(Math.random()*proteins.length);
  var randCarb = Math.floor(Math.random()*carbs.length);
  var randSide1 = Math.floor(Math.random()*sides.length);
  var randSide2 = Math.floor(Math.random()*sides.length);
  var randDesserts = Math.floor(Math.random()*desserts.length);

  outputText.innerText = "Try this Meal for " + day + " :";


}

// console.log(day, protein, carb, side1, side2, dessert);
