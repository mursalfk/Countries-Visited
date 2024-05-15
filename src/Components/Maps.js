// Maps.js
import React from "react";
import WorldMap from "react-svg-worldmap";
import "../styles/style.css";

export default function MapChart({ selectedCountries, addCountryByClick }) {
  const data = selectedCountries.map((country) => ({
    country: country.Code,
    value: 1,
  }));

  return (
    <div className="map-container">
      <WorldMap
        color="white"
        backgroundColor="#ffffff00"
        borderColor="black"
        size={1000}
        data={data}
        onClickFunction={addCountryByClick}
      />
    </div>
  );
}
