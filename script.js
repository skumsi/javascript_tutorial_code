/*
______________________________________________________
=====Lecture: Variables======
Multi
	Line
	  Variables 
var name = "John";
//console.log(name);
var lastName = "Smith";
console.log(name,lastName);
var age = 26;
console.log(age);
var fullAge = true;
console.log(fullAge);
______________________________________________________
var name = "saketh";
var lastName, age = 24;
console.log("Name: " + name + '\n' + "Age: " + age);
console.log('After a year....');
console.log("Age: " + (age+1));
lastName = prompt('what is lastName?');
console.log('FullName is ' + name,lastName);
alert("Name: " + name + '\n' + "Age: " + age);
______________________________________________________
==========Lecture: Operators===========
var now = 2016;
var birthYear = now - 26;
birthYear = now - 26 * 2;
console.log(birthYear);
var ageJohn = 38, ageMark = 30;
ageJohn = ageMark = (3 + 5) * 4 - 6;
console.log(ageJohn+1);
console.log(ageMark);
______________________________________________________
Lecture: Control Structures
======if-else========
var name = 'John';
var age = 24;
var isMarried = prompt("what is john's relationship status?");
if (isMarried === 'married') {
	console.log(name + ' is Married');
} else if (isMarried === 'single') {
	console.log(name + ' is not Married');
} else {
	console.log(name + ' has a girlfried, will hopefully Marry soon');
}

if (23 == "23") {
	console.log('something to print..');
}
======switch==========
var age = 35;
if (age > 20 && age < 30) {
	console.log('John is a Mid-age man!');
} else {
	console.log('John is a old man!');
}

var job = prompt('What does john do?');
switch(job){
	case 'teacher':
		console.log('John Teaches Kids');
		break;
	case 'driver':
		console.log('John Drives a Cab');
		break;
	case 'cop':
		console.log('John fights crime');
		break;
	default:
		console.log("John's profession is something else");
}
______________________________________________________
======Coding challenge 1========

var johnHeight, markHeight, tomHeight, johnAge, markAge, tomAge;
johnHeight = prompt('Enter johns height:');
johnAge = prompt('Enter johns Age:');
markHeight = prompt('Enter marks height:');
markAge = prompt('Enter marks age:');
tomHeight = prompt('Enter toms height:');
tomAge = prompt('Enter toms Age:');
var johnScore, markScore, tomScore, cmVal = 2.54;
johnScore = johnHeight * cmVal + johnAge*5;
markScore = markHeight * cmVal + markAge*5;
tomScore = tomHeight * cmVal + tomAge*5;
if (johnScore > tomScore && johnScore > markScore) {
	console.log('John is the Winner', johnScore);
} else if (tomScore > johnScore && tomScore > markScore) {
	console.log('Tom is the Winner', tomScore);
} else if (tomScore === johnScore && johnScore === markScore) {
	console.log('Game is a Draw, All have same score of ' + johnScore);
} else{
	console.log('Mark is the Winner', markScore);
}
______________________________________________________
========Functions===========

function calculateAge(yearOfBirth){
	var age=2016 - yearOfBirth;
	return age;
}
var ageOfJohn = calculateAge(1998);
var ageOfmark = calculateAge(1993);
console.log('Age of john is ' + ageOfJohn);
console.log('Age of mark is ' + ageOfmark);

function calculateRetirePeriod(name, yearOfBirth){
	var age=calculateAge(yearOfBirth);
	var retireAge = 65 - age;
	if (retireAge >= 0) {
		console.log(name,'Retires in ' + retireAge,'years');
	}
	else {
		console.log(name,'already retired! Retired in year', 2016+retireAge);
	}
}

calculateRetirePeriod('john',1998);
calculateRetirePeriod('mike',1948);
______________________________________________________
========Arrays==========
var names = ['john','mark','mary'];
var years = new Array(1990,1993,1996); // Another way of initializing arrays
console.log(names);
names[1]='Ben';
console.log(names[1]);

var john = ['john','smith',1990,'teacher',false];
console.log(john);
john.push('Single');
console.log(john);
john.unshift('Mr.');
console.log(john);
john.pop();
console.log(john);
alert(john.indexOf('smith'));
console.log(john);
______________________________________________________
=======objects=========
var john = {
	name:'john',
	lastName:'smith',
	yearOfBirth:1993,
	job:'teacher'
}
console.log(john);
console.log(john.lastName);
console.log(john['lastName']); //Another way of accessing values
var xyz = 'job';
console.log(john[xyz]);
john.lastName ='Kumsi';
john['job'] = 'Programmer';
console.log(john);


var jane = new Object(); // Another way of declaring a new object
jane.name = 'jane';
jane.lastName = 'smith';
jane['yearOfBirth'] = 1997;
jane['job'] = 'Retired';
console.log(jane);
______________________________________________________
========objects and methods==========
var john = {
	name: 'john',
	lastName:'smith',
	yearOfBirth:1998,
	job:'teacher',
	calculateAge: function(){
		return 2016 - this.yearOfBirth;
	}
}

var age = john.calculateAge();
john.age = age;
console.log(john);
______________________________________________________
=========Loops=========
var names=['john','mary','jackie','caludia'];

for (var i = names.length; i > 0; i--) {
	console.log(names[i-1]);
}
var names=['john','mary','jackie','caludia'];
var i=0;
while(i<names.length){
	console.log(names[i]);
	i++;
}
===== Coding challenge 2 ==========
var years_1=[1991,1992,1993,2000];
var years_2=[1995,1996,2005,1999];
var full_1 = [];
var full_2 = [];
function printFullAge(years,result) {
	var ages = [];
	for (i=0;i<years.length;i++){
		ages.push(2017 - years[i]);
	}
	for (i=0;i < ages.length;i++){
		if (ages[i] >= 18)
			result.push('true');
		else
			result.push('fasle');
	}
	return result;
}
console.log(printFullAge(years_1,full_1));
console.log(printFullAge(years_2,full_2));
=========Pracitcing Git===========
//Just made an intital commit
//All this js code is now online in javascript_tutorial_code repsitory
*/





















































































































