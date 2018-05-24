// simple function exercise 1
// function tellFortune (children,partner,location,jobTitle){
//   var myFuture = "You will be a " + jobTitle + " in " + location + ", and married to " + partner + " with " + children + " kids.";
//   console.log(myFuture);
// }
//
// tellFortune(2, "pita", "singapore", "developer");
// tellFortune(3, "pita", "singapore", "developer");
// tellFortune(4, "pita", "singapore", "developer");


// simple function exercise 2
// function calculateDogAge(actualDogAge){
//   var actualDogAge;
//   var dogAgeMultiply = 7 * actualDogAge;
//   var dogAge = "Your doggie is " + dogAgeMultiply + " years old in dog years."
//   console.log(dogAge);
// }
//
// calculateDogAge(2);
// calculateDogAge(3);
// calculateDogAge(4);


//simple function exercise 3
// function calculateSupply(age,amountAday){
//   var maxAge = 90;
//   var calAmount = (365 * amountAday) * (maxAge - age);
//   var message = "You will need " + calAmount + " to last you until the ripe old age of " + age;
//   console.log(message);
// }
//
// calculateSupply(20,20);
// calculateSupply(10,0.5);
// calculateSupply(10,0.5);

// simple function exercise 4
// function calcCircumfrence (radius){
//   var calRadius = (2*3.14)*radius;
//   console.log("The circumference is " + calRadius);
//
//   var calArea = 3.14*(Math.pow(radius, 2));
//   console.log("The area is " + calArea);
// }
// calcCircumfrence(2);

// simple function exercise 5
function celsiusToFahrenheit (celciusTemp){
  var convFtoC = ((celciusTemp * 9) / 5) + 32;
  console.log(celciusTemp + " degree C is " + convFtoC + " degree F")

  var convCtoF = ((celciusTemp - 32) * 5) / 9;
  console.log(celciusTemp + " degree F is " + convCtoF + " degree C")
}
celsiusToFahrenheit(2)
