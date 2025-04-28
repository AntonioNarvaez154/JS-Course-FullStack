/*
function callbackHell(callback){
    setTimeout(() => {
        const data = "Inside (callbackHell) function";
        console.log(data);
        callback(data);
    }, 2000);
};

function firstFunc(data, callback) {
    setTimeout(() => {
        const processedData = `${data} - Processed First`;
        console.log(`Inside (firstFunc) Function`);
        callback(processedData);
    }, 1000);
};

function secondFunc(data, callback) {
    setTimeout(() => {
        const processedData = `${data} - Processed Second`;
        console.log(`Inside (secondFunc) Function`);
        callback(processedData);
    }, 1500);
};
*/

//Callback Hell
/*
callbackHell((data) => {
    firstFunc(data, (processedData) => {
        secondFunc(processedData, (finalData) => {
            console.log(`Final resul of all functions: ${finalData}`);
        });
    });
});
*/

//Callback is not always asynchronous
/*
console.log('Start');

const numbers = [1, 2, 3, 4, 5, 6, 7 ,8 , 9, 10];
numbers.forEach((n) => console.log(n));

console.log("End");
*/

//------------------------------------------------

// 1. At the middle of Start and End do this 👇

// -> Create a function name (getUserDataFromDB) which will take name and callback as parameters
// --> use setTimeout() & print "Getting User Name" & then pass your name as an argument to callback parameter.
// --> this process should take 2s

// -> Create a function name (getUserHobbies) which will take name and callback as parameters
// --> use setTimeout() & print "Getting User hobbies" & then pass your your hobbies array as an argument to callback parameter.
// --> this process should also take 2s

// -> Execute getUserDataFromDB function & pass your name for the first parameter & callback function for the second argument and this callback function should also take a (data) parameter.
// --> In that callback function log (data) to the console
// --> execute getUserHobbies function and pass your data param and also pass another callback function which will take
// ---> hobby as parameter and just log that parameter to the console, run the code and see the result.

function getUserDataFromDB(name, callback) {
    setTimeout(() => {
        console.log("Getting User Name");
        callback(name);
    }, 2000);
};

function getUserHobbies(name, callback) {
    setTimeout(() => {
        console.log("Getting User Hobbies");
        callback(["Chilling", "Programming", "Gaming"]);
    }, 2000);
};

getUserDataFromDB("Tony", (data) => {
    console.log(data);
    getUserHobbies(data, (hobby) => {
        console.log(hobby);
    });
});