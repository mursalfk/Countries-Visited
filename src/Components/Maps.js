// Maps.js
import React from "react";
import WorldMap from "react-svg-worldmap";
import "../styles/style.css";

export default function MapChart({ selectedCountries, addCountryByClick }) {
  const data = selectedCountries.map((country) => ({
    country: country.Code,
    value: 1,
  }));

  // Get screen width
  const screenWidth = window.screen.width;

  // Set the size of the map based on the screen width
  const mapSize = screenWidth < 768 ? 300 : 1000;

  return (
    <div className="map-container">
      <WorldMap
        color="white"
        backgroundColor="#ffffff00"
        borderColor="black"
        size={mapSize}
        data={data}
        onClickFunction={addCountryByClick}
      />
    </div>
  );
}
