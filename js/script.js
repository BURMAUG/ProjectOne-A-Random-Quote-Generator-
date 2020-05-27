/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quote = [
  {quote:`Two things are infinite: the universe and human stupidity; and I'm not 
          sure about the universe.`,
  source: 'Einsten'},

  {quote:`Two things are infinite: the universe and human stupidity; and I'm not sure
           about the universe.`,
  source: 'Albert'},

  {quote:`I do not know what I may appear to the world, but to myself I seem to have
            been only like a boy playing on the sea-shore, and diverting myself in now 
            and then finding a smoother pebble or a prettier shell than ordinary, whilst the great
            ocean of truth lay all undiscovered before me.`,
  source: 'Newton'},

  {quote:`Don’t let the noise of others’ opinions drown out your own inner voice.`,
  source: 'Steve'},

  {quote:`Have the courage to follow your heart and intuition. They somehow already know what
          you truly want to become. Everything else is secondary.`,
  source: 'Jobs'}
            ];


/* 
    make a random background color generator
*/
function backGroundColors(){
  const color ='0123456789ABCDEF';
  let pound = '#'
  for (let i =0; i<color.length; i++){
    pound+= color[Math.floor(Math.random() * 16)];
  }

  var bodOfDisplay = document.querySelector('body');
  bodOfDisplay.style.backgroundColor = pound;
}




/***
 * `getRandomQuote` function
***/

 function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quote.length);
  return quote[randomNumber];
 };

/***
 * `printQuote` function
***/
function printQuote(){

  // create a variable to hold the random quote object
  var getQuoteObject = getRandomQuote();
  //grab the id from the html
  var displayRanQoute = document.getElementById('quote-box');

  var HTMLString = `<p class="quote"> ${getQuoteObject.quote} </p>
                   <p class="source"> ${getQuoteObject.source}`;

  if (getQuoteObject.citation) {
    HTMLString+= `<span = "citation"> ${getQuoteObject.citation}</span>`;
  }

  if (getQuoteObject.year){
    HTMLString+= `<span class="year">${getQuoteObject.year} </span>`;
  }

  HTMLString += '</p>';

  displayRanQoute.innerHTML = HTMLString;

  backGroundColors();

  //return HTMLString.citation + HTMLString.year
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);