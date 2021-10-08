import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
// To display Error Page
const Error=({error})=> {
    return (
       <>
        <Typography variant='h5'>{error}</Typography>
        <br/>
        <Button component={Link} to="/" variant="outlined" type="button" style={{dsiplay: 'grid'}}>Back to cart</Button>
      </>
            
       
    )
}

export default Error;
