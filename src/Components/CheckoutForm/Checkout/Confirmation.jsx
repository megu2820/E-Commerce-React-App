// Necessary imports
import React from 'react'
import { CssBaseline,Typography,Divider,Button,CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Confirmation=({order}) =>{
    
    // To check if order Exists
  return (order.customer?(
            <>
            <CssBaseline/>
                <div>
                  <Typography variant='h5'>
                    Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!!
                  </Typography>
                  <Divider/>
                  <Typography variant='subtitle2'>Order ref: {order.customer_reference}</Typography>
                </div>
                <br/>
                <Button component={Link} to="/" variant="outlined" type="button" style={{display: 'grid'}} >Back to Store</Button>
            </>
        ):(<div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',}}><CircularProgress/></div>)
    )
}

export default Confirmation
