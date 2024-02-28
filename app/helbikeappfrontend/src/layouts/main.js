import React from "react";
import Layout from "../components/Layout";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Journeys } from "../pages/Journeys";
import { Stations } from "../pages/Stations";
import { StationDetails } from "../pages/Station Details";
import { Footer } from "../components/Footer";

export const Main = () => {
  return (
    <div className="MainPage">
      <Layout />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/stationdetails/:location" element={<StationDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};
