// Map is a built-in data structure introduced in (ES6) that allows you to store key-value pairs where both the keys and values can be of any data type. It is similar to an object, but with a few key differences:

// -> Keys can be of any data type: Unlike objects, where keys are limited to strings and symbols, Map allows you to use any data type as keys, including numbers, booleans, objects, and even other map instances.

// -> Maintains insertion order: Map preserves the order of key-value pairs as they were inserted, while object keys may not be guarnteed to be in a specific order.

// -> Iteracion: Map provides built-in methos for easy iteration over its elements.

/*
const map = new Map();

const keyOne = "string";
const keyTwo = {};
const keyThree = function() {};

map.set(keyOne, "Value of key one");
map.set(keyTwo, "Value of key two");
map.set(keyThree, "Value of key three");
*/

/*
console.log(map.keys());
console.log(map.values()); 
console.log(map.delete(keyTwo));
console.log(map.size);
console.log(map);
*/

/*
//Imprime tipo y valor
for (let [key, value] of map) {
    console.log(`${key} -- ${value}`);
}
*/

/*
 //Imprime el tipo
for (let key of map.keys()) {
    console.log(key);
}
*/

/*
//Imprime el valor
for (let value of map.values()) {
    console.log(value);
}
*/

//1. Create a new Map
//2. Set these properties ("a", "b", "c")
//3. Set these value (1, 2, 3)
//4. Get "a" from that map
//5. Check the size of that map
//6. Delete the property "b" & then check the size

/*
const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.size);
map.delete("b");
console.log(map.size);

// console.log(map.get("a"));
*/

//=================================================================
//Set is a built-in data structure introduced in (ES6) that represents a collection of unique values. Unlike arrays, Set allows you to store only unique values. Which means duplicate values are automatically removed. Each value can occur only once within a Set.

//Se objects are useful when you need to store a lost of unique elements and quickly check for the existence of a specific value.

/*
const mySet = new Set();

mySet.add("apple");
mySet.add("banana");
mySet.add("orange");
mySet.add("apple");

// console.log(mySet);
// console.log(mySet.has("banana"));

// mySet.delete('banana');
// console.log(mySet);

// mySet.clear();
// console.log(mySet);

for (let item of mySet)
{
    console.log(item);
}
*/

//1. Create a Set name (letters)
//2. Add ("a", "b", "c") as properties
//3. Add ("a", "b", "c") as values
//4. Iterate over Set & log the values

const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");

for (let value of letters)
{
    console.log(value);
}