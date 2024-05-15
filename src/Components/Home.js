// Home.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import MapChart from "./Maps";
import Sidebar from "./Sidebar";
import CustomAutocomplete from "./CustomAutocomplete";
import "../styles/style.css";
import Footer from "./Footer";

function Home() {
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

    return (
        <div className="homeApp">
            <Navbar />
            <MapChart
                selectedCountries={selectedCountries}
                addCountryByClick={addCountryByClick}
            />
            <div className="sidebar">
                <CustomAutocomplete onSelect={handleAddCountry} />
                <Sidebar
                    selectedCountries={selectedCountries}
                    onRemoveCountry={handleRemoveCountry}
                />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
