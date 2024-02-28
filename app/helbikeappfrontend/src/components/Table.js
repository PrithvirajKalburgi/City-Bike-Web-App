import React from 'react';
import './Table.css';

export const Table = (props) => {
  //this takes whatever is being passed from the parent component
  //and puts it in the data object
  const { titles, data } = props;

  return (
    <div className='App'>
      <table>
        <thead className='table-head'>
          <tr className='table-row'>
            {/* so for the table titles, I only want a single row
            so I should loop through the array for each th (table header)
            item */}
            {titles.map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.col1}</td>
                <td>{value.col2}</td>
                <td>{value.col3}</td>
                <td>{value.col4}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  //this was for testing purposes, I then moved the data to the journey's
  //parent component since the data will be fetched from there
  // const data = [
  //   {
  //     departureStation: "Messeniuksenkatu",
  //     returnStation: "Pasilan asema",
  //     km: 1,
  //     duration: 10,
  //   },
  //   {
  //     departureStation: "Herttoniemi (M)",
  //     returnStation: "Abraham Wetterin tie",
  //     km: 1,
  //     duration: 10,
  //   },
  //   {
  //     departureStation: "Venttiilikuja",
  //     returnStation: "Velodrominrinne",
  //     km: 1,
  //     duration: 10,
  //   },
  // ];

  //this is testing to make the table component alot more dynamic
  //that way I can just have a single table object that takes
  //the table titles as a prop and the table data as a prop
  // const titles = ["departure", "return", "distance(km)", "duration(mins)"];
};
