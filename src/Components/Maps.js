// Maps.js
import React, { useState } from "react";
import WorldMap from "react-svg-worldmap";
import CustomAutocomplete from "./CustomAutocomplete";
import "../styles/customStyle.css";

export default function Maps() {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const addCountry = (country) => {
    setSelectedCountries([...selectedCountries, country]);
  };

  const data = selectedCountries.map((country) => ({
    country: country.Code,
    value: 1,
  }));

  return (
    <div>
      <h1>Europe Map</h1>
      <div className="inputArea">
        <CustomAutocomplete onSelect={addCountry} />
        <button className="addButton" onClick={() => addCountry(selectedCountries[selectedCountries.length - 1])}>Add Country</button>
      </div>
      <div className="map-container">
        <WorldMap
          color="white"
          backgroundColor="#ffffff00"
          borderColor="black"
          size="xxl"
          data={data}
        />
      </div>
      <div>
        <h2>Selected Countries</h2>
        <ul>
          {selectedCountries.map((country, index) => (
            <li key={index}>{country.CountryName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
