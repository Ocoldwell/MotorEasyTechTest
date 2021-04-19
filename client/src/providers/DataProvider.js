import React, { createContext, useEffect, useState } from "react";
import { getBrands, getTyres } from "../services/tyres.service";

export const DataContext = createContext({});
const DataProvider = (props) => {
  // Sets API data on mounting of components in App.
  const [tyres, setTyres] = useState(null);
  const [brands, setBrands] = useState(null);
  const [searchQuery, setSearchQuery]= useState("")
  const [searchFilter, setSearchFilter]= useState("")


  const getBrandSearch = () => {
    fetch(`/api/${searchQuery}`)
      .then((res) => res.json())
      .then((data) => setTyres(data))
      .catch((error) => console.log(error)
      )
  };

  const getTitleSearch = () => {
    fetch(`/api/tyres/title/${searchQuery}`)
    .then((res) => res.json())
    .then((data) => setTyres(data))
    .catch((error) => console.log(error))
  };

  const handleSearch = () => {
    switch(searchFilter) {
      case "title":
        getTitleSearch()
        break;
      case "brand":
        getBrandSearch()
        break;
      default:
        getBrandSearch()
    }
  }
  useEffect(() => {
    getTyres().then((response) => setTyres(response));
  }, []);

  useEffect(() => {
    getBrands().then((response) => setBrands(response));
  }, []);

  return (
    <DataContext.Provider
      value={{
        tyres,
        brands,
        setSearchQuery,
        setSearchFilter,
        handleSearch
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
