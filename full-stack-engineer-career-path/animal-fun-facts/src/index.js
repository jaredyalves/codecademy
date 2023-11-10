import {animals} from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const displayFact = e => {
  const animal = e.target.alt;
  const randIndex = Math.floor(Math.random() * animals[animal].facts.length);
  document.getElementById('fact').innerHTML = animals[animal].facts[randIndex];
};

const title = '';
const background = <img className="background" src="/images/ocean.jpg"
                        alt="ocean"/>;
const images = [];
for (const animal in animals) {
  images.push(<img src={animals[animal].image} alt={animal} key={animal}
                   className="animal" aria-label={animal} role="button"
                   onClick={displayFact}/>);
}

const animalsFacts = (<div>
  <h1>{title || 'Click an animal for a fun fact'}</h1>
  {background}
  <div className="animals">{images}</div>
  <p id="fact"></p>
</div>);

ReactDOM.render(animalsFacts, document.getElementById('root'));
