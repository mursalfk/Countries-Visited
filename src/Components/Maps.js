// Maps.js
import React, { useState } from "react";
import WorldMap from "react-svg-worldmap";
import Sidebar from "./Sidebar";
import CustomAutocomplete from "./CustomAutocomplete";
import "../styles/customStyle.css";

export default function Maps() {
    const [selectedCountries, setSelectedCountries] = useState([]);

    const handleAddCountry = (country) => {
        setSelectedCountries([...selectedCountries, { ...country, disabled: true }]);
    };

    const handleRemoveCountry = (countryToRemove) => {
        setSelectedCountries(selectedCountries.filter(country => country !== countryToRemove));
    };

    const addCountryByClick = (event) => {
        const clickedCountryName = event.countryName;
        const clickedCountryCode = event.countryCode;
        const index = selectedCountries.findIndex((country) => country.CountryName === clickedCountryName && country.Code === clickedCountryCode);
        if (index === -1) {
            setSelectedCountries([...selectedCountries, { CountryName: clickedCountryName, Code: clickedCountryCode, disabled: true }]);
        } else {
            setSelectedCountries(selectedCountries.filter(country => country.CountryName !== clickedCountryName || country.Code !== clickedCountryCode));
        }
    };

    const data = selectedCountries.map((country) => ({
        country: country.Code,
        value: 1,
    }));

    return (
        <div className="map-page">
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
            <div className="sidebar">
                <CustomAutocomplete onSelect={handleAddCountry} />
                <Sidebar selectedCountries={selectedCountries} onRemoveCountry={handleRemoveCountry} />
            </div>
        </div>
    );
}
