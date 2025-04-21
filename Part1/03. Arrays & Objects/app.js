//Arrays -> 0 index based

//Empty array
/*
const myList = []
console.log("Lista", myList);
*/

/*
//Number array
const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);
//String Array
const stringArray = ['eat', 'sleep', 'code', 'repeat'];
console.log(stringArray);
*/

//Accessing Items from our array
/*
const stringArray = ['eat', 'sleep', 'code', 'repeat'];
console.log(stringArray[0]);
console.log(stringArray[1]);
console.log(stringArray[2]);
console.log(stringArray[3]);
*/

//Two Dimension || Nested Array
/*
const nestArr = ['one', ['two', 'three'], 1, true, false];
console.log(nestArr);
console.log(nestArr[1]);
console.log(nestArr[1][1]); //Three
*/

/*
//1. Create array name (favSingers) Store 3 favorite singers.
//2. Log the first singer in that array.
//3. Create array name (favNumbers) & store 4 fav Numbers.
//4. Create array name (mixedArr) store ["string", ["otherarray"], 123, true]
//5. Now Access each item in that array by using [] notation.

const favSingers = ["Kanye West", "Kendrick Lamar", "A$AP Rocky"];
console.log(favSingers[0]);

const favNumbers = [8, 9, 0, 4];
console.log(favNumbers);

const mixedArr = ["string", ["otherArray"], 123, true];
console.log(mixedArr[0]);
console.log(mixedArr[1][0]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);
*/


/*
const fruits = [
    "apple",
    "pomegranate",
    "mango",
    "strawberries",
    "pineapple",
];

const newFruits = [
    "grapes",
    "lichi",
    "pear"
];
*/
//fruits.push("banana"); //Agregar valor a la lista
//fruits.pop(); //Eliminar el ultimo elemento de la lista
//fruits.shift(); //Eliminar el primer elemento de la lista
//fruits.unshift('orange'); //Añade el elemento al inicio de la lista
//const totalFruits = fruits.concat(newFruits); //Combina 2 o más listas
// console.log();

/*
const pl = ["JavaScript", "C#", "Python"];
const numbers = [3, 5, 2, 4, 1];
*/
// console.log(pl.includes("Python")); //Verifica si existe el elemento
//console.log(pl.join("-")); //Une los datos con el parametro que se le pase
//console.log(pl.reverse()); //Pone en reversa la lista
//console.log(pl.slice(0, 2)); //Parte la lista y selecciona los elementos que quiere mostrar
//console.log(numbers.sort()); //Acomoda los datos alfabeticamente


//-------------------------------------------------------------------------
//Objects
/*
const person = {
    firstName: "Tony",
    lastName: "WebDev",
    age: 22,
    location: ["Planet", "Earth"],
    isProgrammer: true,
};

console.log(person);
*/

/*
const person = {
    firstName: "Tony",
    lastName: "WebDev",
    age: 22,
    location: ["Planet", "Earth"],
    isProgrammer: true,
};

//Accessing Items from out object
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location);
console.log(person.isProgrammer);
console.log("")
//Other methods
console.log(person["firstName"]);
console.log(person.location[0]);
console.log(person.location[1]);
*/

/*
const person = {
    firstName: "Tony",
};

person.lastName = "WebDev";
person.location = ["Planet", "Earth"];
delete person.firstName;

console.log(person);
*/

//1. Create object name (car)
//2. add (type, model, color) as properties
//3. check the type of object
//4. Update the type property to "Toyota"
//5. Add new property wheels
//6. Log car to the console
/*
const car = {
    type: "Honda",
    model: "Rav-4",
    color: "Crimson",
}

console.log(typeof car);
console.log(car.type = "Totoya");

car.wheels = "4";
console.log(car);
*/