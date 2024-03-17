let speedContainerEl = document.getElementById("speedTypingTest");
let timerElement = document.getElementById("timer");
let quoteDisplayElement = document.getElementById("quoteDisplay");
let submitButtonElement = document.getElementById("submitBtn");
let resetButtonElement = document.getElementById("resetBtn");
let textAreaElement = document.getElementById("quoteInput");
let resultParaElement = document.getElementById("result");
let spinnerEl = document.getElementById("spinner");

let count = parseInt(timerElement.textContent);
let quote = "";
let counterId = setInterval(function() {
    count = count + 1;
    timerElement.textContent = count;
}, 1000);
resetQuote();

function resetQuote() {
    speedContainerEl.classList.add("d-none");
    spinnerEl.classList.remove("d-none");
    count = 0;
    textAreaElement.value = "";
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            // console.log(jsonData.content);
            speedContainerEl.classList.remove("d-none");
            spinnerEl.classList.add("d-none");
            quote = (jsonData.content);
            quoteDisplayElement.textContent = jsonData.content;


        });

}


resetButtonElement.addEventListener('click', resetQuote);

function validateQuote(event) {
    if (event.target.value === quote) {
        console.log(event.target.value);
        console.log(quote);
        clearInterval(counterId);

        resultParaElement.textContent = "You typed in " + count + " sentence";
    } else {
        resultParaElement.textContent = "You typed Incorrect sentence";

    }
}

submitButtonElement.addEventListener('click', validateQuote);