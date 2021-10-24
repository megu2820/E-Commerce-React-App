
//Necessary imports
import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography, Button } from '@material-ui/core';
import {  ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../assests/logo.png';
import { Link } from 'react-router-dom';
import  {commerce}  from '../../lib/Commerce';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router';


const Navbar=({totalItems})=> {
    const classes = useStyles();
   const location= useLocation();
    const history = useHistory();

  // function to log user out
    const logout = ()=>{
   
        try {
           commerce.customer.logout()
           localStorage.clear();  // clearing customer jwt token stored in localstorage and value of loggedIn state
           localStorage.setItem('logoutMessage','You have successfully logged out of your account! Log in back in order to continue shopping.')
           history.push('/' );
         
     
           
        } catch (error) {
           console.log(error);
        };
     
     }
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='secondary'>
                <Toolbar>
                    <Typography  component={Link} to="/products" variant="h6" className={classes.title}>
                        <img src={logo} alt="Shop Now" height='25px' className={classes.image} />
                        Easy Order
                    </Typography>
                    <div className={classes.grow} />
                    
                    {/*Logic to hide the cart icon in the Navbar when u are already in the cart*/}
                    {location.pathname==='/products'&&
                   ( <div className={classes.button}>
                      <IconButton  component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                               <ShoppingCart />
                        </Badge>
                       </IconButton>
                  </div>)}
                   {/*Logic to display the Logout Button in the Navbar when the user is logged in*/}
                  {location.pathname!=='/' && (
                     <div className={classes.button}>
                     <Button variant="contained" color="secondary" onClick={logout}>Log Out</Button>
                     </div>
                  )}
                 
               
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar
