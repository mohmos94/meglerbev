import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Prosjects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
             src='images/react.png'
             text='REACT PROSJECT DOCUMENTATION'
             label='FRONTEND'
             path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/python.png'
              text='PYTHON PROSJECT DOCUMENTATION'
              label='BACKEND'
              path='/'
            />
            <CardItem
              src='images/spring.png'
              text='JAVA PROSJECT DOCUMENTATION'
              label='BACKEND'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;