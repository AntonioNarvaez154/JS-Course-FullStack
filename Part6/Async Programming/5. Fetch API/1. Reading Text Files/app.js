// text method returns promise 
// if resolved will return text representation of body

// const result = document.querySelector('.results');

// async function renderData() {

//     try {
//         const response = await fetch('text.txt');

//         if(!response.ok) throw Error(response.statusText);

//         const data = await response.text();
//         result.textContent = data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// renderData();

// fetch("text.txt")
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error(res.statusText);
//         }
//         return res.text(); // returns a promise
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));