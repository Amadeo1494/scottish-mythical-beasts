import React from 'react';
import ReactDOM from 'react-dom';
import { beasts } from './beasts.js'
import './index.css';

// general variables:
const title = 'The Creatures of Scottish Folklore';
const bookBackground = 
  <img 
    className='book-background' 
    alt='book' 
    src={require('./images/antique-book.png')} 
  />;


// a function to create randomised information about a specific creature:
const randomFact = (event) => {
  const targetBeast = event.target.alt;
  const beastInfo = beasts[targetBeast];
  const randomIndex = Math.floor(Math.random() * beastInfo.info.length);
  const funFact = beastInfo.info[randomIndex];
  document.getElementById('info').innerHTML = funFact;
};

// a for loop to push .png files (with a randomFact function beign triggered on hover) into the images array:
const images = [];
for (const beast in beasts) {
  images.push(
    <img
      src={beasts[beast].image}
      key={beast}
      className='beast'
      alt={beast}
      aria-label={beast}
      onMouseEnter={randomFact}
    />
  )
};

// the main setup for the page with all the relevant JSX:
const beastsInfo = (

  <div>

    {bookBackground}

    <div className="title">
      <h1>{title}</h1>
    </div>

    <p id="info" />

    <div className="beasts">
      {images}
    </div>

  </div>

);

ReactDOM.render(beastsInfo, document.getElementById('root'));