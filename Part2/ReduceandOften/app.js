//Te reduce() method applies the reducer function to each element of an array, acumulating the results into a single value. It is often used to perfom calculations or aggregations on array elements and simplify the array into a single value.

/*
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((p, c) => {
    // console.log(`Previous: ${p}`);
    // console.log(`Current: ${c}`);
    return p + c;
    // 0 + 1 => 1 -> El 0 viene del valor de abajo de la función
    // 1 + 2 => 3
    // 3 + 3 => 6
    // 6 + 4 => 10
    // 10 + 5 => 15
}, 0);

console.log(sum);
*/

/*
const peoples = [
    {
        name: "Tony WebDev",
        age: 22,
    },
    {
        name: "Alex Mead",
        age: 29,
    },
    {
        name: "Bryan Griffin",
        age: 40,
    },
];

const oldestAge = peoples.reduce((p, c) => (c.age > p ? c.age : p.age), 0);

console.log(oldestAge);
*/

/*
const words = [
    "apple",
    "banana",
    "orange",
    "banana",
    "apple",
    "orange",
    "apple",
    "grape",
];

const wordFrequency = words.reduce((frequencyMap, word) => {
    frequencyMap[word] = (frequencyMap[word] || 0 + 1)
    return frequencyMap;
}, {});

console.log(wordFrequency)
*/


//Write a function called calculateProduct that takes an array of numbers as an argument and return the product of all the numbers in the array.

const numbers = [2, 3, 4, 5];

function calculateProduct(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

//Write the calculateProduct function using the reduce() method to achieve this task.

const product = calculateProduct(numbers);

console.log(product);