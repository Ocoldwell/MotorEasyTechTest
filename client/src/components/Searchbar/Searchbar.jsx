import { Button, TextField } from '@material-ui/core'
import React from 'react'

const Searchbar = () => {
  return (
    <form>
      <TextField id="standard-search" label="Search here" type="search"/>
      <Button variant="contained" color="primary">Search</Button> 
    </form>
  )
}

export default Searchbar
