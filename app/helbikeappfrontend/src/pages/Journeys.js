import React from 'react';
import { Table } from '../components/Table';
import '../App.css';
export const Journeys = () => {
  //testing data for the journeys table
  const data = [
    {
      col1: 'Messeniuksenkatu',
      col2: 'Pasilan asema',
      col3: 1,
      col4: 10,
    },
    {
      col1: 'Herttoniemi (M)',
      col2: 'Abraham Wetterin tie',
      col3: 1,
      col4: 10,
    },
    {
      col1: 'Venttiilikuja',
      col2: 'Velodrominrinne',
      col3: 1,
      col4: 10,
    },
  ];

  //next set of testing for passing down the title data
  const titles = ['departure', 'return', 'distance(km)', 'duration(mins)'];

  return (
    <div className='Table-Journeys'>
      <div className='JourneyDiv-1'>
        {/*<h1 style={{ marginLeft: '6rem' }}>Journeys</h1>*/}

        <h2 className='HomeFront'>Check Out where others are going!</h2>
        <span className='HomeFront1'>
          here you can view data on what kind of journeys other riders are going
          on and find your own inspiration for discovering new areas of our
          beuatiful city.
        </span>
      </div>

      <div className='Table-Journeys-1'>
        <Table data={data} titles={titles} />
      </div>
    </div>
  );
};
