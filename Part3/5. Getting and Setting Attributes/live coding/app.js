//href
//value
//type
//getAttribute(attrName)
//setAttribute(attrName, value)

const a = document.querySelector("a");
const input = document.querySelector('input');

//Getting Attributes
// console.log(a.href);
// console.log(input.value);
// console.log(input.type);

//Setting Attributes
/*
// a.href = "https://youtube.com";
// console.log(input.value = "Bye");
// console.log(input.type = "password");
// console.log(input.placeholder = "Please provide a strong password")
*/

//getAttribute(attrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

input.setAttribute("placeholder", "Password");
input.setAttribute("type", "Password");