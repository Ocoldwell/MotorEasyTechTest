import React from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import DataProvider from "./providers/DataProvider";

const App = () => {
 
  return (
    <div className="App">
    <DataProvider>
      <Searchbar/>
    </DataProvider>
    </div>
  );
};

export default App;
