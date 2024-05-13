// CustomAutocomplete.js
import React, { useState } from "react";
import countries from "../countries";
import "../styles/customStyle.css";

export default function CustomAutocomplete({ onSelect }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filteredCountries = countries.filter((country) =>
      country.CountryName.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredCountries);
  };

  const handleSelect = (country) => {
    setInputValue(country.CountryName);
    setSuggestions([]);
    onSelect(country);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Country Name"
        className="autocompleteInput"
      />
      <div className="suggestions">
        {suggestions.map((country, index) => (
          <div key={index} className="suggestion" onClick={() => handleSelect(country)}>
            {country.CountryName}
          </div>
        ))}
      </div>
    </div>
  );
}
