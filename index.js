const moment  = require("moment");

// Print Date or Time in the format
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));

// Check if the following date is valid or not
console.log(moment().isValid("2020-01-01"));
console.log(moment().isValid("2020-14-01"));

// Manipulating Dates
console.log(moment().add(7, 'days').calendar());
console.log(moment().add(7, 'months').calendar());
console.log(moment().add(7, 'years').calendar());

console.log(moment().subtract(7, 'days').calendar());
console.log(moment().subtract(7, 'months').calendar());
console.log(moment().subtract(7, 'years').calendar());

// Difference between the dates
var dateA = moment("2014-11-11");
var dateB = moment("2015-09-11");
var days = dateB.diff(dateA, 'days')
console.log(days)

var date1 = moment("2014-11-27");
var date2 = moment("2015-09-16");
var days = date2.diff(date1, 'days')
console.log(days)

//  Date after
console.log(moment('2020-01-01').isAfter('2018-01-01'));

// Is Leap Year
console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());



// const lodash  = require("lodash");    OR
// import lodash from "lodash" ;
import _ from "lodash" ;

// Array

let characters = ["a", "b", "c", "d"];
let chunked = _.chunk(characters, 2);
console.log(chunked);

console.log(_.difference([2, 1], [2, 3]));

console.log(_.compact([0, 1, false, 2, '', 3])); // Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

console.log(_.drop(characters, 2));  // remove first 2 from array

console.log(_.dropRight(characters, 2));  // remove last 2 from array

// Methods

console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));

var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true },
];
console.log(_.filter(users, function(o) { return !o.active; }));

console.log(_.find(users, function(o) { return o.age < 40; }));

console.log(_.forEach([1, 2], function(value) {
    console.log(value);
  })
  );
function duplicate(n) {
    return [[[n, n]]];
}

console.log(_.flatMapDeep([1, 2], duplicate));


