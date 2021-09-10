// Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Gallery from "./components/Gallery";

// Styles
import "./App.css";

const App = () => {
  // Set States
  const [swData, setSwData] = useState([]);

  // Fetch Data
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((response) => {
        setSwData(response.data);
        console.log("Star wars data:", swData);
      })
      .catch(console.error("Could not fetch data from Star Wars API!"))
      .finally(console.log("GET request attempted!"));
  }, []);

  // Return Markup
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Gallery />
    </div>
  );
};

export default App;
