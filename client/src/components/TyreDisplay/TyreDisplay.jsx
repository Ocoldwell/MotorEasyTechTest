import { Card, CardContent, CardHeader, StylesProvider, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider.js";
import styles from "./TyreDisplay.module.scss";




const TyreDisplay = () => {
  const { tyres, brands } = useContext(DataContext);
  
  return (
    <div>
      {!tyres
        ? "Loading.."
        : tyres.map((tyre) => {
            return (
              <Card key={tyre._id} >
                <CardHeader title={tyre.title} subheader={tyre.brand}/>{tyre.title}
                <img src={tyre.imageUrl} alt="tyreImage" className={styles.tyreImage}/>
                <CardContent>
                  <Typography variant="h4" component="h4">{tyre.size}</Typography>
                  <Typography variant="h5" component="h5">£{tyre.price}</Typography>
                </CardContent>
              </Card>
            );
          })}
    </div>
  );
};

export default TyreDisplay;
