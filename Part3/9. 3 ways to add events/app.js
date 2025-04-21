//----------BAD WAY----------
/*
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function() {
    console.log("Tony Webdev");
}
*/

//----------GREAT WAY----------
/*
const best = document.querySelector('.best');

// function greetings () {
//     console.log("Hello World");
// };

best.addEventListener("click", () => console.log("Yellow"));
*/

//----------Event (e) Object----------
const para = document.querySelector(".para");

para.addEventListener('click', (event) => {
    console.log(event)
})