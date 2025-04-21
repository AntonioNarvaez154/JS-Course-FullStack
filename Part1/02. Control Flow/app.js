//Conditional statements

/*
let time = 50;
let greetings;

if (time < 10) {
    greetings = "Good Morning";
    console.log(greetings);
}
else if (time < 20)
{
    greetings = "Good Day";
    console.log(greetings);
}
else {
    greetings = "Good Evening";
    console.log(greetings);
}
*/
/*
let password = 8;

if(password == 8)
{
    console.log("Welcome");
}
else if (password <= 8)
{
    console.log("Password is too short");
}
else if (password >= 8)
{
    console.log("Too long, password should be 8 characters");
}
else 
{
    console.log("Please provide a password")
}
*/
//------------------------------------------------------------------------
//Switch

/*
let day = 'friday';

switch (day) {
    case "monday":
        console.log("Today is monday");
        break;
    case "tuesday":
        console.log("Today is tuesday");
        break;
    case "wednesday":
        console.log("Today is wednesday");
        break;
    case "tuesday":
        console.log("Today is tuesday");
        break;
    case "friday":
        console.log("Today is friday");
        break;
    case "saturday":
        console.log("Today is saturday");
        break;
    case "sunday":
        console.log("Today is sunday");
        break;
    default:
        console.log("Don't know what day is today");
}
*/

/*
let fruit = "Mango";

switch (fruit) {
    case "Banana":
        console.log("Banana is good!");
        break;
    case "Orange":
        console.log("I am not a fan of orange.");
        break;
    case "Apple":
        console.log("How you like them apples?");
        break;
    default:
        console.log("I have never heard of that fruit.");
        break;
}
*/
//------------------------------------------------------------------------
//For loop

//DRY -> Don't Repeat Yourself

/*
for (let i = 1; i <= 10; i++) {
    console.log('--- Outer Loop ---', i);

    //nested loop
    for(let j = 1; j <= 5; j++)
    {
        console.log('--- Inner Loop ---', j);
    }
    
}
*/

/*
for (let i = 0; i <= 1000; i++) {
    console.log("Tony WebDev", i);
    
}
*/
//------------------------------------------------------------------------
//While loop

/*
let i = 1;

while(i <= 10)
{
    console.log('Hello World', i);
    i++;
}
*/

//Print "Your Name" 100 times to the console using while loop
//Iteracion will start from 10

/*
iteracion = 10;

while (iteracion <= 100) {
    console.log("Tony WebDev", iteracion);
    iteracion++;
}
*/
//------------------------------------------------------------------------
//Do While loop

/*
let i = 1;

do {
    console.log("Hello World", i);
    i++;
} while(i <= 5);
*/

//Print "Your Name" 400 times to the console using do-while-loop
//Iteracion should start from 20.
/*
let i = 20;

do {
    console.log("Tony WebDev", i);
    i++;
} while (i <= 400);
*/
//------------------------------------------------------------------------
//Logical Operators
const a = true;
const b = false;
const c = 4;
const d = true;

//1. --> Logical AND (&&)
/*
console.log(a && b); //False
console.log(a && c); //4
console.log(a && d); //True

console.log(c > 2 && c < 2); //False
*/

//2. --> Logical OR (||)
/*
console.log(a || b); //True
console.log(b || b); //False
console.log(b || c); //4
console.log(b || d); //True

console.log(c > 2 || c < 2); //True
*/

//3. --> Logical NOT (!)
/*
console.log(!a); //False
console.log(!b); //True
console.log(!c); //False ???????
*/

/*
let password = "tony-webdev";

if (password.length >= 8 && password.includes("web")) {
    console.log("Valid Password");
}
else {
    console.log("Invalid Password");
}
*/
