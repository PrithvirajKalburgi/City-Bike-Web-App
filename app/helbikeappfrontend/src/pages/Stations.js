import React from "react";
import { Table } from "../components/Table";

export const Stations = () => {
  //testing data for the journeys table
  const data = [
    {
      col1: "Hanasaari",
      col2: "Hanasaarenranta",
      col3: "Espoo",
      col4: 10,
    },
    {
      col1: "Keilalahti",
      col2: "Keilalahdentie 2",
      col3: "Espoo",
      col4: 28,
    },
    {
      col1: "Westendinasema",
      col2: "Westendintie 1",
      col3: "Espoo",
      col4: 16,
    },
  ];

  //next set of testing for passing down the title data
  const titles = ["name", "address", "municipality", "capacity"];

  return (
    <div className='Table-Journeys'>
      <div className='JourneyDiv-1'>
        {/*<h1>Stations</h1>*/}
        <h2 className='HomeFront'>Find some Stations</h2>
        <span className='HomeFront1'>
          Don't know about the bike stations! No worries, you can view all the
          stations right here. Click on any station to see if this is the start
          of your next adventure
        </span>
      </div>
      <div className='Table-Journeys-1'>
        <Table data={data} titles={titles} />
      </div>
    </div>
  );
};