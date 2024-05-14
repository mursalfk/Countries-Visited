// App.js
import React from "react";
import Navbar from "./Components/Navbar";
import MapChart from "./Components/Maps";
import "./styles/customStyle.css";

function App() {
  return (
    <div className="mainApp">
      <Navbar />
      <MapChart />
    </div>
  );
}

export default App;
