import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../images/helsinki-region-transport-hsl-vector-logo.svg';
import './Layout.css';

const Layout = () => {
  return (
    <navbar className='navbar'>
      <div className='nav-element'>
        <img className='nav-header' src={image} alt='logo' />

        <div className='Circle'></div>

        <ul className='nav-items'>
          <li>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/journeys'>
              Journeys
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/stations'>
              Stations
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={{
                pathname: '/stationdetails/helsinki',
                state: { stationname: 'helsinki station' },
              }}
            >
              Station Details
            </NavLink>
          </li>
        </ul>
      </div>
    </navbar>
  );
};

export default Layout;
