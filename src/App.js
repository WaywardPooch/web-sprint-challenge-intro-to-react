// Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Header from "./components/Header";
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
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("GET request attempted!");
      });
  }, []);

  // Return Markup
  return (
    <div className="App">
      <Header />
      <Gallery swData={swData} />
    </div>
  );
};

export default App;
