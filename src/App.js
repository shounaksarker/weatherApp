import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Searchbar from "./Components/Searchbar/Searchbar";
export const MyContext = createContext();

function App() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("Dhaka");
  const [loading, setLoading] = useState(true);

  const bg = {
    backgroundImage: `url(https://source.unsplash.com/1600x900/?${city})`,
  };

  return (
    <MyContext.Provider
      value={[weather, setWeather, city, setCity, loading, setLoading]}
    >
      <div className="App">
        <div className="bg position-relative h-100" style={bg}></div>
        <div className="cont position-absolute container">
          <Searchbar />
          <Home />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
