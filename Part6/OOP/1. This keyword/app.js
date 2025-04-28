//keyword This
//The JavaScript "this" keyword refers to the object it belongs to. It has different values depending on where it is used

/**
 * In a method = this refers to the owner object
 * Alone = this refers to the global object
 * In a function = this refers to the global object
 */

/**
 * This is a Method
 * 
 * fullName : function() {
 *     return this.firstName + "" + this.lastName;
 * }
 */

/**
 * This Alone
 * 
 * let x = this;
 */

/** 
 * This in a Function (Default)
 * 
 * function myFunction() {
 *     return this;
 * }
 */

//console.log(window);
//console.log(this); //window
//console.log(this === window); // true

// window.firstName = "Tony";
// this.lastName = "WebDev";
// console.log(window);

//----------------------------------------------------------------
/*
function printThis() {
    return this;
}

const res = printThis();
console.log(res); // undefined in strict mode, window in non-strict mode
*/

//----------------------------------------------------------------
/*
const obj = {
    firstName : "Tony",
    lastName : "WebDev",
    fullName : function() {
        return `${this.firstName} ${this.lastName}`; // "owner" obj
    },
};

const res = obj.fullName();
console.log(res);
*/
//----------------------------------------------------------------

/*
const obj = {
    firstName : "Tony",
    lastName : "WebDev",
    fullName : () => {
        return `${window.firstName} ${window.lastName}`; // "owner" obj
    },
};

const res = obj.fullName();
console.log(res);
*/

//----------------------------------------------------------------

//Create a persona object and store your name and age
// Also create a method name (greetRegular) by using regular function
// Print this message 'Hello, my name is ${this.name}' and I'm ${this.age} years old
// Create one more method name (greetArrow) using arrow function
// Print this message 'Hello, my name is ${this.name}' and I'm ${this.age} years old

/*
const person = {
    name: "Tony",
    age: 22,
    greetRegular: function() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
    },
    greetArrow: () => {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
    },
};

const res = person.greetRegular();
const res2 = person.greetArrow();
*/
