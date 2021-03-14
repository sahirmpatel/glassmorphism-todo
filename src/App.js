import "./App.css";
import React from "react";
import { Quotes } from "./components/Quotes";
import MainCard from "./components/MainCard";

const App = () => {
  return (
    <div className="App">
      <MainCard />
      <Quotes />
    </div>
  );
};

export default App;
