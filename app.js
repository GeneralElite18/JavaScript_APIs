console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let button = document.querySelector("#submitSearch");
let userInput = document.querySelector("#searchWord");
let imageContainer = document.querySelector("img");
let feedback = document.querySelector("#feedback");

button.addEventListener("click",() => {
    let giphyURL = `https://api.giphy.com/v1/gifs/translate?api_key=mxS5Wibw2baJOJP0MkwH2qheILCLKErm&s=${userInput.value}`;
    fetch(giphyURL)
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        console.log(data);
        imageContainer.src = data.data.images.original.url;
        userInput.value = "";
        feedback.textContent = "";

    })
    .catch((err) => {
        console.error(err);
        feedback.textContent = err;
    })
})
