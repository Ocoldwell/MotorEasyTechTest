import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { DataContext } from '../../providers/DataProvider';
import styles from './Searchbar.module.scss';

const Searchbar = () => {
  const {setSearchQuery,  setSearchFilter, handleSearch} = useContext(DataContext)
  const handleSearchTextChange = (event) => {
    setSearchQuery(event.target.value)
  }
  const handleRadioChange = (event) => {
    setSearchFilter(event.target.value)
  }

  return (
    <div className={styles.form}>
    <FormControl >
      <TextField id="standard-search" label="Search here" type="search" onChange={handleSearchTextChange}/>
      <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
      <RadioGroup aria-label="filter" name="filter"  row>
        <FormControlLabel value="brand" control={<Radio />} label="Brand" onChange={handleRadioChange}/>
        <FormControlLabel value="title" control ={<Radio />} label="Title" onChange={handleRadioChange}/>
      </RadioGroup> 
    </FormControl>
    </div>
  )
}

export default Searchbar
