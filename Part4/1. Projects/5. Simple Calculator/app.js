document.getElementById("btn").addEventListener("click", () => {
    //Getting elements from the DOM
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    let result = document.querySelector(".result");
    let operator = document.getElementById("selectOp").value;

    switch (operator) {
        case "plus":
            result.innerHTML = +num1 + +num2;
            break;
        case "min":
            result.innerHTML = +num1 - +num2;
            break;
        case "div":
            result.innerHTML = +num1 / +num2;
            break;
        case "multi":
            result.innerHTML = +num1 * +num2;
            break;
    }
});