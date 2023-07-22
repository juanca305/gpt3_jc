import React from 'react';
import './features.css';

import { LoremIpsum } from 'react-lorem-ipsum';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age arc draw mrs like. Improving end distrusts may instantly was household aplauded'
  },

  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
  },

  {
    title: 'Message on am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address'
  },

  {
    title: 'Really boy law county',
    text: <LoremIpsum avgSentencesPerParagraph={3}/>
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'  >
      
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The future is Now and You Just Need To Realize It.
          Step Into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>

    </div>
  )
}

export default Features