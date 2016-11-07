// Manipulating Complex Objects
//
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {
    "artist": "The 1975",
    "title": "fsvmlkgnb",
    "release_year": 1975,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  }
];



// Accessing Nested Objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};


var gloveBoxContents = myStorage.car.inside['glove box'];

// Construct JavaScript Objects with Functions

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.

var MotorBike = function() {
  this.engines = 1;
  this.wheels = 2;
  this.seats = 1;
};

// Make Instances of Objects with a Constructor Function
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};
var myCar = new Car();

// Add a new property using .propName
myCar.nickname = "boby";

// Make Unique Objects by Passing Parameters to our Constructor
var Car = function(wheels,seats,engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

//Try it out here
var myCar = new Car(3,1,2);
var myCar = new Car(4,4,2);
var myCar = new Car(2,6,3);


var Bike = function() {

  var gear;

//   this.getGear = function() {
//     return gear;
//   };

//   this.setGear = function(change) {
//     gear = change;
//   };

};

// Make Object Properties Private

Bike.prototype.getGear = function() {
  return gear;
};

Bike.prototype.setGear = function(change) {
  gear = change;
};


var myCar = new Car();

var myBike = new Bike();
var chesBike = new Bike();
var johnsBike = new Bike();


// Iterate over Arrays with map
var oldArray = [1,2,3,4,5];


function plus3(arr) {
  return arr.map(function(num) {
    return num + 3;
  });
}

var newArray = plus3(oldArray);

// Condense arrays with reduce

var array = [4,5,6,7,8];
var singleVal = 0;


function concat(arr){
  return arr.reduce(function(a,b) {
    return a + b;
  });
}

singleVal = concat(array);
console.log(singleVal);

// Filter Arrays with filter
var oldArray = [1,2,3,4,5,6,7,8,9,10];

function filterTheArr(arr){
  return arr.filter(function(num) {
    return num < 6;
  });
}

var newArray = filterTheArr(oldArray);

// var newArray = oldArray.filter(function(num) {
//   return num < 6;
// });

// Sort Arrays with sort
var array = [1, 12, 21, 2];

array.sort(function(a,b) {
  return b - a;
});

// Reverse Arrays with reverse
var array = [1,2,3,4,5,6,7];
var newArray = [];

newArray = array.reverse();

// Concatenate Arrays with concat
var oldArray = [1,2,3];
var newArray = [];

var concatMe = [4,5,6];

newArray = oldArray.concat(concatMe);

// Split Strings with split(by space)
var string = "Split me into an array";
var array = [];
array = string.split(" ");

// Join Strings with join (by space)
var joinMe = ["Split","me","into","an","array"];
var joinedString = '';

joinedString = joinMe.join(' ');
