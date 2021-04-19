import React, {createContext, useEffect, useState} from 'react';
import { getBrands, getTyres } from '../services/tyres.service';

export const DataContext = createContext({})
const DataProvider = (props) => {
// Sets API data on mounting of components in App.
const [tyres, setTyres] = useState(null);
const [brands, setBrands]= useState(null);

useEffect(() => {
 getTyres().then((response) =>
  setTyres(response)
 )
}, []);

useEffect(()=> {
 getBrands().then((response)=>
  setBrands(response)
 )
}, [])


  return (
    <DataContext.Provider value={{
      tyres,
      brands
    }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider


