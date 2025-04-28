//In JavaScript, try and catch are keywords used to implement error handling. Error handling is essential when writing code to grafully handle unexpected errors and exceptions that may occur during program execution. The try and catch block work together to enable developers to catch and handle errors, preventing them from crashing the entire application.

function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (err) {
        console.log(`Error parsing JSON: ${err.message}`);
        return null;
    }
}

const validJSON = '{"name": "John", "age": 30}';
const invalidJSON = '{"name": "John", "age": 30,}'; 

const result1 = parseJSON(validJSON);
const result2 = parseJSON(invalidJSON);

console.log(result1);
console.log(result2);