var link = document.getElementsByTagName("a");

for (i = 0; i < link.length; i++) {

    link[i].className = "link-" + i;
}

function getAverage(a, b) {

    var average = (a + b) / 2;
    console.log(average);
    return average;
}

var myresult = getAverage(2, 5);
console.log("My Result is" + myresult);

/* Objects */

var MyArray = new Array();
MyArray[0] = 8;
MyArray[1] = "hello";
console.log(MyArray);

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function() { console.log("now driving"); };

myCar.drive();

var myCar2 = {
    maxSpeed: 70,
    driver: "Goan",
    drive: function() { console.log("now driving"); },
    acceleration: function(speed, time) {
        console.log(speed * time);
    },
    test: function() {
        console.log(this);
    },
    logDriver: function() {
        console.log("driver name is " + this.driver);
    }
};

console.log(myCar2.maxSpeed);
myCar2.drive();
myCar2.acceleration(60, 2);
myCar2.test();
myCar2.logDriver();

/* Constructor Function
var myArray = new Array();
var myCar = new Car ();
*/

var Car = function(maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time);
    };
    this.logDriver = function() {
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(50, "Shauny");
var myCar2 = new Car(60, "Jauny");
var myCar3 = new Car(70, "Tauny");
var myCar4 = new Car(90, "Mhauny");

myCar.drive(30, 5);
myCar3.logDriver();

// Date Object

var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1545, 11, 2, 10, 30, 34);
var myFutureDate = new Date(1545, 11, 2);

console.log(myPastDate);
console.log(myFutureDate);

//Birthday

var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);

console.log(birthday.getMonth()); // (0 - 11) month of the date
console.log(birthday.getFullYear()); // (YYYY) full year
console.log(birthday.getDate()); // (1 - 31) date of month
console.log(birthday.getDay()); // (0 -6) day of week
console.log(birthday.getHours()); // (0 - 6) hour of the date

console.log(birthday.getTime()); // get the number of milliseconds since 1st Jan 1970

if (birthday == birthday2) {
    console.log("Birthdays are equal");
} else {
    console.log("Birthdays are not equal");
    // Birthdays are nto equal because they are different objects and objects are not equal
}

if (birthday.getTime() == birthday2.getTime()) {
    console.log("Birthdays are equal");
    //Birthdays are equal if we compare the milliseconds by getTime in the object
} else {
    console.log("Birthdays are not equal");
}