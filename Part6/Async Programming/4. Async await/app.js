//Async Func
//Async is a special function that is desined to operate asynchronously, meaning that it can perform tasks in the background while other code continues to execute. Async functions are marked with the async keyword.

//await
//The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code.

/*
function fetchDataFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User dara retrieved from server.");
        }, 4000);
    });
};

async function getUserData() {
    try {
        const data = await fetchDataFromServer();
        console.log(data);
        console.log("Remaining tasks can be executed here.");
    } catch (error) {
        console.log(error);
    };
};

getUserData().then().catch();
*/

// --------------------------------------------------------------------

/*
function callbackHell() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = `Inside (callbackHell) function`;
            console.log(data);
            resolve(data);
        }, 2000);
    });
}

function firstFunc(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const processedData = `${data} - Processed in firstFunc`;
            console.log("Inside (firstFunc) Function");
            resolve(processedData);
        }, 2000);
    });
}

function secondFunc(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const processedData = `${data} - Processed in secondFunc`;
            console.log("Inside (secondFunc) Function.");
            resolve(processedData);
        }, 1500);
    });
}

async function processedDataWithAsyncAwait() {
    try {
        const data = await callbackHell();
        const processedData1 = await firstFunc(data);
        const processedData2 = await secondFunc(processedData1);
        console.log(`Final result of all functions with async/await: ${processedData2}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    };
}

processedDataWithAsyncAwait();
*/
// --------------------------------------------------------------------

// Refactor this code to use async/await
// console.log("Start");

// function getUserDataFromDB(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Valid Name");
//       resolve(name);
//     }, 2000);
//   });
// }

// function getUserHobbies() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting user hobbies...");
//       resolve(["Football", "Singing", "Solving Math"]);
//     }, 2000);
//   });
// }

// getUserDataFromDB("HuXn")
//   .then((name) => getUserHobbies(name))
//   .then((hobby) => console.log(hobby))
//   .catch((err) => console.log(err));

// console.log("End");

// --------------------------------------------------------------------

function getUserDataFromDB(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Valid Name");
            resolve(name);
        }, 2000);
    });
}

function getUserHobbies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting user hobbies...");
            resolve(["Football", "Singing", "Solving Math"]);
        }, 2000);
    });
}

async function showUserHobbies() {
    try {
        const name = await getUserDataFromDB("Tony");
        const hobbies = await getUserHobbies(name);
        console.log(`${name} hobbies: ${hobbies}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

showUserHobbies();