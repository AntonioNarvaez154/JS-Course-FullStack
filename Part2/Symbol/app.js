//Symbol is a unique and immutable primitive data type introduced in (ES6). A symbol is often used as an identifier for object properties to avoid potential naming conflicts.

//Unlike string or numbers, symbols are guaranteed to be unique. When you create a symbol, it is unique and cannot be recreated or changed. This uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation.

/*
const mySymbol = Symbol("My custom symbol");
console.log( mySymbol);
*/

/*
//Comparing Symbols
const mySymbol1 = Symbol("name")
const mySymbol2 = Symbol("name")

//console.log(mySymbol1 === mySymbol2); //false

const obj = {};
obj[mySymbol1] = "Value 1";
obj[mySymbol2] = "Value 2";

console.log(obj);
*/

/*
const symbol1 = Symbol('name');
const symbol2 = Symbol('name');

const tony = {};
tony.age = 19;
tony['gender'] = 'male';
tony['gender'] = 'female';
tony[symbol1] = 'alex';
tony[symbol2] = 'john';
console.log(tony);
*/

//1. Create a symbol provide a value of "foo"
//2. Check the type of that symbol
//3. Create empty object
//4. Store symbol as the propery to that object
//5. Iterate over symbol

/*
const symbol = Symbol('foo');
console.log(typeof symbol);

const obj = {
    firstName: "alex",
    lastName: "mead",
};

obj[Symbol()] = "some value for foo";
console.log(obj);

for(let i in obj)
{
    console.log(i);
}
*/