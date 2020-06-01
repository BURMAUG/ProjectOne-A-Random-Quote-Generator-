
/* 
    make a random background color generator
*/
function backgroundColors() {
    const color = '0123456789ABCDEF';
    let pound = '#';
    //looping though the color string to make a unique color on random
    for (let i = 0; i < 6; i++) {
        pound += color[Math.floor(Math.random() * 16)];
    }
    document.querySelector('body').style.backgroundColor = pound;
};
/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
};

/*
    time interval
*/
var wait;
function changeQuote() {
    wait = setInterval(printQuote, 18000);
}


/***
 * `printQuote` function
***/
function printQuote() {

    // create a variable to hold the random quote object
    var getQuoteObject = getRandomQuote();
    //grab the id from the html
    var displayRanQoute = document.getElementById('quote-box');

    var HTMLString = `<p class="quote"> ${getQuoteObject.quote} </p>
                   <p class="source"> ${getQuoteObject.source}`;

    //check if there is a citation to be added to the quote
    if (getQuoteObject.citation) {
        HTMLString += `<span class= "citation"> ${getQuoteObject.citation}</span>`;
    }

    //Check if there is a year in the quote citation
    if (getQuoteObject.year) {
        HTMLString += `<span class="year">${getQuoteObject.year} </span>`;
    }

    //Check if there is a category and print that
    if(getQuoteObject.category){
        HTMLString += `<span class="category"> ${getQuoteObject.category} </span>`;
    }

    HTMLString += '</p>';

    //display the qupte as required
    displayRanQoute.innerHTML = HTMLString;

    backgroundColors();
};
changeQuote();



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);