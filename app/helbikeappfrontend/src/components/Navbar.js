import React from "react";
import { ReactComponent as Logo } from '../images/logo.svg';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <h1>Navbar</h1>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/journeys">
            Journeys
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/stations">
            Stations
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={{
              pathname: "/stationdetails/helsinki",
              state: { stationname: "helsinki station" },
            }}
          >
            Station Details
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
