// Show current date
// var date = new Date();
// document.body.innerHTML = "<h1>Today is: " + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + "</h1>";

// simple calculation
// var a = 5;
// var b = 6;
// var sum = a + b;
// console.log(sum)

// unary operation, plus 1 from variable
// a++
// b++

// check data datatype
// var number = 1234452;
// var int = 1.1234452;
// var negInt = -1.1234452;
// var emptyInside = null;
// var theSunIsWarm = true;

//conditional practice
// var c = 6;
// var d = 7;
// var theExactMatch;
//
// if (c == d){
//   theExactMatch = true
// }else {
//   theExactMatch = false
// }
// console.log("the number match: " + theExactMatch);

// ternary operation
// a == b ? console.log("Match") : console.log("no Match");

//Array
//var number = [1, 2, 3, 4, 5, 6];
//var string = ["ari","budi","cika","dio","emir","fakhri"];
//combine array
// var combine = number.concat(string)
// console.log(combine.reverse());

// to find index of array
// var result = string.indexOf("cika",1);
// console.log("string is " + string[result]);

// join the array from 1 Array
// var arrayString = number.join(", ")
// console.log(arrayString)


// Create reusable function
// function findBiggestFraction(a,b){
//   a>b ? console.log("a: ", a) : console.log("b: ", b);
// }
// var firstFraction = 3/4;
// var secondFraction = 5/7;
//
// findBiggestFraction(firstFraction,secondFraction);


//Create reusable function with return
// function findBiggestFraction(a,b){
//   var result;
//   a>b ? result = ["a", a] : result = ["b", b];
//   return result;
// }
//
// var fractionResult = findBiggestFraction(17/18,18/12);
// console.log(fractionResult);

// var theBiggest = function(a,b){
//   var result;
//   a>b ? result = ["a", a] : result = ["b", b];
//   return result;
// }
// console.log(theBiggest(7/9,13/15));

// find the indexOf
//console.log("Fraction " + fractionResult[0] + " with value is " + fractionResult[1])

// function using let(specifi code using share variable name) and var (for global code)
// function logScope(){
//   var localVar = 2;
//
//   if (localVar){
//     let localVar = "I'm different!";
//       console.log("nested logscope: ", localVar);
//   }
//   console.log("outer logscope: ", localVar);
// }
// logScope();

// Create object
  // var course = new Object();
  //
  // var course = {
  //   title : "Essential JS training",
  //   name  : "Ari Moelhadi",
  //   level : 1,
  //   published : true,
  //   views : 0,
  //   updateView: function(){
  //     return ++course.views;
  //   }
  // }
  // console.log(course.views);
  // course.updateView();
  // console.log(course.views);


  // create function based on the Object
  // function Course (title,name,level,published,views,updateView){
  //   this.title = title;
  //   this.name = name;
  //   this.level = level;
  //   this.published = published;
  //   this.views = views;
  //   this.updateView = function(){
  //     return ++this.views;
  //   };
  // }

// array
  // var courses = [
  //   new Course("Essential JS learning", "Ari", 1, true, 0),
  //   new Course("Learning JS basic", "Ira", 2, true, 0)
  // ]

  // var course01 = new Course("Essential JS learning", "Ari", 1, true, 0);
  //   document.body.innerHTML = "<table>" + "<tr><td>" + courses[0].title + "</td></tr>" + "<tr><td>" + courses[0].name + "</td></tr>" + "<tr><td>" + courses[0].level + "</td></tr>" + "<tr><td>" + courses[0].published + "</td></tr>" + "<tr><td>" + courses[0].views + "</td></tr>" + "</table>"
  // console.log(courses);

// Create rows array and show in html table
// var rows = [
//   {
//     name : "ari",
//     age : 30,
//     address : "568 Upper East Coast Road"
//   },
//   {
//     name : "Ira",
//     age : 22,
//     address : "Ngamprah Cilame Bandung"
//   }
// ]
//
// var html = "<table border='1|1'>"
// for (var i=0; i < rows.length; i++){
//   html+="<tr>";
//   html+="<td>" + rows[i].name + "</td>";
//   html+="<td>" + rows[i].age + "</td>";
//   html+="<td>" + rows[i].address + "</td>";
//   html+="</tr>";
// }
// html+="</table>"
// document.getElementById("box").innerHTML = html;

// practice simple closure
function giveMeEms (pixels){
  var baseValue = 16;

  function doTheMath(){
    return pixels/baseValue;
  }

  return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(22);
var xLargeSize = giveMeEms(22);

console.log("Small Size: " + smallSize() + "\n" + "Medium Size: " + mediumSize() + "\n" + "Large Size: " +  largeSize() + "\n" + "Extra Large Size: " +  xLargeSize());
