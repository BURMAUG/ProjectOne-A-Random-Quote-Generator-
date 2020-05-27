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
  source: 'Albert Einsten'},

  {quote:`Two things are infinite: the universe and human stupidity; and I'm not sure
           about the universe.`,
  source: 'Albert Einsten'},

  {quote:`I do not know what I may appear to the world, but to myself I seem to have
            been only like a boy playing on the sea-shore, and diverting myself in now 
            and then finding a smoother pebble or a prettier shell than ordinary, whilst the great
            ocean of truth lay all undiscovered before me.`,
  source: 'Issac Newton'},

  {quote:`Don’t let the noise of others’ opinions drown out your own inner voice.`,
  source: 'Steve Jobs',
  year: 2005,
  citation: 'Stanford University commencement speech'
  },

  {quote:`Have the courage to follow your heart and intuition. They somehow already know what
          you truly want to become. Everything else is secondary.`,
  source: 'Steve Jobs'},
  {
    quote: `There are only two ways to live your life. One is as though nothing is 
             a miracle. The other is as though everything is a miracle.`,
    source: `Albert Einstein`
  },
  {
    quote: `I am enough of an artist to draw freely upon my imagination. Imagination is more important than
            knowledge. Knowledge is limited. Imagination encircles the world.`,
    source: `Albert Einstein`,
    year: 1929,
    citation: `Veireck Interview`
  },
  {
    quote:`If you can't explain it to a six year old, you don't understand it yourself`,
    source:`Albert Einstein`
  },
  {
    quote:`If you want your children to be intelligent, read them fairy tales. If you want 
            them to be more intelligent, read them more fairy tales.`,
    source:`Albert Einstein`
  },
  {
    quote: `Taking LSD was a profound experience, one of the most important things in my life. 
            LSD shows you that there’s﻿ another side to the coin, and you can’t remember it when 
            it wears off, but you know it. It reinforced my sense of what was important—creating 
            great things instead of making money, putting things back into the stream of history
             and of human consciousness as much as I could.`,
    source:'Steve Jobs',

  },
  {
    quote: `Walter Issacson biographer of Steve Jobs: I remember sitting in his backyard in his 
          garden, one day, and he started talking about God. He [Jobs] said, “ Sometimes I 
          believe in God, sometimes I don’t. I think it’s 50/50, maybe. But ever since I’ve had 
          cancer, I’ve been thinking about it more, and I find myself believing a bit more, 
          maybe it’s because I want to believe in an afterlife, that when you die, it doesn’t 
          just all disappear. The wisdom you’ve accumulated, somehow it lives on.”
          Then he paused for a second and said, “Yea, but sometimes, I think it’s just
          like an On-Off switch. Click. And you’re gone.” And then he paused again and 
          said, “ And that’s why I don’t like putting On-Off switches on Apple devices.`,
    source: 'Steve Jobs',
    year: 2011,
    citation: `Steve Jobs by Walter Issaacson`
  }
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