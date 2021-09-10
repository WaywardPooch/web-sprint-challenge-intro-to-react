// Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Character from "./components/Character";

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
      .finally(console.log("GET request attempted!"));
  }, []);

  // Return Markup
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {swData.length === 0 && <p>LOADING</p>}
      {swData.map((character, i) => {
        return <Character key={i} characterData={character} />;
      })}
    </div>
  );
};

export default App;
