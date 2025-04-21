//The "for...in" loop in JS is used to iterate over the enumerable properties of an object. It is a way to loop through the keys (property names) of an object.

/*
let person = {
    name: "Tony",
    age: 19,
    gender: "male"
};

for (let keys in person) {
    console.log(keys)
}; //name, age, gender
*/

/*
let list = ['one', 'two', 'three', 'four'];

for (let index in list) 
{
    console.log(`${index}: ${list[index]}`);
    //0: one, 1: two, 2: three, 3: four
}
*/

//Iterate over object & log the property and the value of that object using for in loop.

/*
const object = {a: 1, b: 2, c: 3};

for (let i in object)
{
    console.log(`${i}: ${object[i]}`);
}
*/
//------------------------------------------------------------
//The "for...of" loop in JS is a modern iteracion statement introduced in ECMAScript 6 (ES6) that provides a concise and easy way to loop over elements in iterable objects like arrays, strings, maps, sets and more. It allows you to iterate directly over the values of the elements, rather than dealing with their indices or keys, which makes the code more readable and less error-prone.

/*
let peoples = ["tony", "alex", "john", "bard"];

for (let people of peoples)
{
    console.log(people); //tony, alex, john, bard
}
*/

/*
const text = "Totino"

for (const char of text) {
    console.log(char);
}
*/

//Iterate over "array1" & log the values using fot of loop

/*
const array1 = ["a", "b", "c"];

for (const i of array1) {
    console.log(i);
}
*/
//------------------------------------------------------------
//Foreach
/**
 * When we call the forEach helper we pass in anonymous callback
 * function.
 * This function gets called one time for every element in the
 * array.
 * Whatever is inside the function that logic happens.
 */

/*
const colors = ["teal", "blue", "red", "green"];

colors.forEach((color) => console.log(color));
*/

/*
const words = ["hello", "bird", "table", "football", "pipe", "code"]

const capWords = words.forEach((word, index, arr) => {
    arr[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words)
*/


//1. Create an array of numbers.
//2. Create a variable to hold the sum.
//3. Create the adder function which takes the parameter of number & add that with sum variable.
//4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach.
//5. Print the sum variable

let numbers = [1, 2, 3, 4, 5]
let sum = 0;

function adder(number) {
    sum += number;
}

numbers.forEach(adder);
console.log(sum)