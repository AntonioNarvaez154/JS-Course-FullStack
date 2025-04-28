//PROMISE
// A promise is an object representing the eventual completion or failure of an asynchronous operation.

/*
function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve(`${number} is an even number.`);
        }
        else {
            reject(`${number} is an odd number.`);
        }
    });
};

const numberToCheck = 6; //odd number

checkNumber(numberToCheck).then((message) => {
    console.log(`Success: ${message}`);
}).catch(error => {
    console.log(`Error: ${error}`);
});
*/

/*
function callbackHell(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "Inside (callbackHell) function"
            console.log(data);
            resolve(data);
        }, 2000);
    });
}

function firstFunc(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processedData = `${data} - Processed data`;
            console.log("Inside (firstFunc) function");
            resolve(processedData);
        }, 2000);
    });
}

function secondFunc(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processedData = `${data} - Processed data`;
            console.log("Inside (secondFunc) function");
            resolve(processedData);
        }, 1500);
    });
}

callbackHell()
.then(data => firstFunc(data))
.then((processedData1) => secondFunc(processedData1))
.then(processedData2 => console.log(`Final result of all functions with Promises: ${processedData2}`))
.catch(error => console.log(`Error: ${error}`));
*/

console.log('Start');

function getUserDataFromDB(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Valid Nmae');
            return (name)
        }, 2000);
    });
}

function getUserHobbies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting user hobbies');
            resolve (['Reading', 'Travelling', 'Cooking']);
        }, 2000);
    });
}

getUserDataFromDB("Tony")
    .then(name => getUserHobbies(name))
    .then(hobby => console.log(hobby))
    .catch(error => console.log(`Error: ${error}`));

console.log('End');