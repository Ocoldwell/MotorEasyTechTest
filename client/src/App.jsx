import React from "react";
import "./App.scss";
import Searchbar from "./components/Searchbar/Searchbar";
import TyreDisplay from "./components/TyreDisplay/TyreDisplay";
import DataProvider from "./providers/DataProvider";

const App = () => {
 
  return (
  <DataProvider>
    <div className="App">
      <Searchbar/>
      <TyreDisplay/>
    </div>
  </DataProvider>
  );
};

export default App;
