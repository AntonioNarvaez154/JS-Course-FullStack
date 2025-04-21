// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.clear();

// console.table({name: "tony", age: 22})
//-------------------------------------------------------
// //Declare variable
// let name = 'Tony dev';

// //Assign value
// let banana;
// banana = 'banana';

// let youtubeChannel = "mrbeast";

// youtubeChannel = "Tony Webdev";
//-------------------------------------------------------
//Numbers

//Basic Math
/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);
*/

/*
let counter = 10;
counter++;
counter--;
console.log(counter);
*/
//-------------------------------------------------------
//Boolean
/*
let numer = 10;

// -> false
// -> null
// -> undefined
// -> 0
// -> -0
// -> NaN
// -> '', "", ``, (empty quotes)
let notDefined = undefined;
console.log(notDefined);

let isJsProgrammingLanguaje = true;
let isJsHard = false;
let favNumb = 8;

console.log(isJsProgrammingLanguaje);
console.log(isJsHard);
console.log(favNumb + undefined);
*/
//-------------------------------------------------------
//Comparation Operators

// -> Relational Operators
/*
console.log(10 > 10); 
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);
*/

// -> Equality Operators
// === strict equality (type + value)
// !== strict non-equality operators (type + value) 
// == lose equality operator (value)
// != lose not equality operator (value)

/*
console.log(10 === 10);
console.log(10 !== 10);
console.log(10 == '10');
console.log(10 != 10);
*/

/*
let firstFavNumb = 8;
let secondFavNumb = 9;
console.log(firstFavNumb > secondFavNumb);
console.log(firstFavNumb < secondFavNumb);
console.log(firstFavNumb >= secondFavNumb);
console.log(firstFavNumb <= secondFavNumb);
console.log(firstFavNumb === secondFavNumb);
console.log(firstFavNumb == secondFavNumb);
console.log(firstFavNumb !== secondFavNumb);
console.log(firstFavNumb != secondFavNumb);
*/
//-------------------------------------------------------
//Strings

// let firstName = 'Tony';
// let secondName = "WebDev";

//1. Concatenation
// let fullName = firstName.concat(secondName);
// console.log(fullName);

//2. Append
// firstName += " something else";
// console.log(firstName);

//3. Length
// console.log(firstName.length);

//4. Cases
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

//5. Slice
// console.log(firstName.slice(1, 3));

//6. Split & Join
// console.log(firstName.split(" ").join(""));

//7.  Includes
// console.log(firstName.includes('T'));

//8. Trim
// console.log(firstName.trim());

//Interpolation 
// let fullName = `${firstName} ${secondName}`;

/*
let favActorFirstName = "John ";
let favActorLastName = "Wick";
let fullName = favActorFirstName.concat(favActorLastName);
let uppercase = fullName.toUpperCase();
let message = `My favorite actor is ${fullName.toUpperCase()} is to extreme lol`
message += ", his best show is Silicon Valley";

console.log(message);
*/
//-------------------------------------------------------
//Type Conversion
/*
let money = '50.245';

// - Convert string to number
// money = parseInt(money);
// money = +money;
// money = Number(money);

// - Convert number to string
// money = money.toString();
// money = String(money);

// - Convert string to decimal
money = parseFloat(money);


console.log(money);
console.log(typeof(money));
*/