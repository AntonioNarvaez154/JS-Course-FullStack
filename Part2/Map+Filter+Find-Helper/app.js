//Map Helper
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

/*
let numbers = [1, 2, 3, 4, 5];

let double = numbers.map(num => num * 2);

console.log(double);

//A diferencia de forEach, map() se almacena en una lista completamente nueva y guarda los datos en dicha lista.
*/

/*
let peoples = [
    {firstName: "Macom", lastName: "Reynolds"},
    {firstName: "Kaylee", lastName: "Frye"},
    {firstName: "Jayne", lastName: "Cobb"},
]

const results = peoples.map(person => {
    return [person.firstName, person.lastName];
})

console.log(results);
*/

//1. Create array with random numbers.
//2. Map over each item in that array and multiply each item by 10.

/*
let numbers = [1, 2, 3, 4, 5, 6];

let double = numbers.map(num => num * 10);
console.log(double);
*/

//===============================================================
//Filter Helper

//The filter() method is a built-in array method in JS that allows you to create a new array containing elements that pass a certain condition. It provides a clean and concise way to filter out elements from an array base on a specified criteria.

/*
const songs = [
    {name: "Lucky You", duration: 4.34},
    {name: "Just Like You", duration: 3.23},
    {name: "The Search", duration: 2.33},
    {name: "Old Town Road", duration: 1.43},
    {name: "The Box", duration: 5.23},
];

console.log(songs.filter(song => song.duration > 3));
*/

/*
const computers = [
    {ram: 4, hdd: 100},
    {ram: 8, hdd: 200},
    {ram: 16, hdd: 300},
    {ram: 32, hdd: 400},
];

console.log(computers.filter(com => com.ram < 16));
*/

//1. Iterate over "ages" array
//2. Print only adults, those whos age is greater than 18

/*
const ages = [32, 33, 16, 40];

function checkAdults (age) {
    return age >= 18;
}

const res = ages.filter(checkAdults);
console.log(res);

// console.log(ages.filter(age => age > 18)); //Esta solucion igual sirve
*/

//1. Iterate Over "words" array
//2. Print only those words ehich length is greater than 6

/*
const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

const result = words.filter(word => word.length >= 6);
console.log(result);
*/

//===============================================================
//Find Helper

//The find() method is another built-in array helper in JS that allows to find the first element in an array that matches a specific condition. It returns the value of the first element that satisfies the given testing function, or undefined if no element is found. 

/*
const peoples = [
    {name: "tony", age: 22},
    {name: "john", age: 18},
    {name: "alex", age: 20},
    {name: "jimmy", age: 30},
    {name: "alex", age: 30},
];

const res = peoples.find(person => person.name === "alex");
console.log(res);
*/

/*
const posts = [
    {id: 1, content: "Good Post"},
    {id: 2, content: "Funny Post"},
    {id: 3, content: "Sad Post"},
    {id: 4, content: "Sad Post"},
];

const postRes = posts.find(post => post.content === 'Good Post');
console.log(postRes); 
//Solo muestra la primera coincidencia, mientras que filter muestra todas las coincidencias
*/

//1. Iterate over "ages" array
//2. Print only those ages which is greater than 18

/*
const ages = [3, 10, 18, 20];

function checkAge(age) {
    return age > 18;
}

const resAge = ages.find(checkAge);
console.log(resAge);
*/

// BONUS => REFACTOR
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];
// let product;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === "Books") {
//     product = products[i];
//     break;
//   }
// }
// console.log(product);

let products = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "iPhone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" },
];

const product1 = products.filter(product => product.category === "Books");
console.log(product1);

const product2 = products.find(product => product.category === "Books");
console.log(product2);