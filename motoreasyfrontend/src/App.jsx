import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [tyres, setTyres] = useState(null);
  const [brands, setBrands]= useState(null);

  useEffect(() => {
    fetch("/api/tyres")
      .then((res) => res.json())
      .then((data) => setTyres(data));
  }, []);

  useEffect(()=> {
    fetch("/api/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data))
  })
  return (
    <div className="App">
     {!tyres && !brands ? "Loading.." : tyres.map((tyre) => {
       return ( 
         <React.Fragment key={tyre._id}>
          <h2>{tyre.title}</h2>
          <h3>{tyre.brand}</h3>
          <img src={tyre.imageUrl} alt="tyreImage" />
          <h4>{tyre.size.join(", ")}</h4>
          <h4>£{tyre.price.join(", ")}</h4>
        </React.Fragment>)
      })}
    </div>
  );
};

export default App;
