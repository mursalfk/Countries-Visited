// CustomAutocomplete.js
import React, { useState, useEffect, useRef } from "react";
import countries from "../countries";
import "../styles/customStyle.css";

export default function CustomAutocomplete({ onSelect }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    // Event listener to hide suggestions when clicking outside the input box
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filteredCountries = countries.filter((country) =>
      country.CountryName.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredCountries);
    setShowSuggestions(true); // Show suggestions when typing
  };

  const handleSelect = (country) => {
    setInputValue(country.CountryName);
    setSuggestions([]);
    onSelect(country);
    setSelectedCountries([...selectedCountries, country]); // Add selected country
    setShowSuggestions(false); // Hide suggestions after selection
  };

  const isCountrySelected = (country) => {
    return selectedCountries.some((selectedCountry) => selectedCountry.Code === country.Code);
  };

  return (
    <div className="autocomplete" ref={inputRef}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setShowSuggestions(true)} // Show suggestions on focus
        placeholder="Country Name"
        className="autocompleteInput"
      />
      {showSuggestions && (
        <div className="suggestions">
          {suggestions.map((country, index) => (
            <div
              key={index}
              className={`suggestion ${isCountrySelected(country) ? 'disabled' : ''}`}
              onClick={() => !isCountrySelected(country) && handleSelect(country)}
            >
              {country.CountryName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
