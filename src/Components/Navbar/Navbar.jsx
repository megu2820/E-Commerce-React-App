
//Necessary imports
import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import {  ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../assests/logo.jpg';
import { Link,useLocation } from 'react-router-dom';


const Navbar=({totalItems})=> {
    const classes = useStyles();
    const location= useLocation();
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography  component={Link} to="/" variant="h6" className={classes.title}>
                        <img src={logo} alt="Shop Now" height='25px' className={classes.image} />
                        Shop Now
                    </Typography>
                    <div className={classes.grow} />
                    
                    {/*Logic to hide the cart icon in the Navbar when u are already in the cart*/}
                    {location.pathname==='/'&&
                   ( <div className={classes.button}>
                      <IconButton  component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                               <ShoppingCart />
                        </Badge>
                       </IconButton>
                  </div>)}
               
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar
