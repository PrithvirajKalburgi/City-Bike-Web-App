import React from 'react';
import bikes from '../images/bikes.jpg';

export const Home = () => {
  return (
    <div className='Home'>
      <div className='Table-jeourny-12'>
        <h1 className='HomeFront'>Discover Citi Bikes in Helsinki</h1>
        <span className='HomeFront1'>
          come see analysis and data on citi bike trips all over Helsinki to see
          how people like you use them everyday!
        </span>
      </div>
      <div className='bike-image'>
        <img src={bikes} alt='' className='rounded-image' />
      </div>
    </div>
  );
};
