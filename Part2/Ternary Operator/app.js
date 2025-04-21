/**
 * The ternary operator in JS is a concise way of writing     contifional expressions. It is de only JS operator that takes three operands:
 * A condition followed by a question mark (?)
 * An expression to execute if the condition is true, followed by a colon (:)
 * An expression to execute if the condition is false.
 */

// condition ? exprIfTrue : exprIfFalse;

/*
let password = 7;

function passwordChecker(ps) {
    return ps >= 8 ? "Strong Password" : "Password should be 8 characters";
}

const res = passwordChecker(password);
console.log(res);
*/

/*
const age = 25;

const isAdult = age >= 18 ? "Adult" : "Is not Adult";
console.log(isAdult);
*/

//If the person have money they can "buy products"
//If the person don't have any money "They should bring money"

const person = true;

const haveMoney = person === true ? "Buy Products" : "They should bring money";
console.log(haveMoney);