//Necessary imports

import React, {useEffect} from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles';
import { commerce } from '../../lib/Commerce';
import { CircularProgress } from '@material-ui/core';





const Products= ({products,onAddToCart}) =>{
const classes= useStyles();


useEffect(() => {
// getting access token from the url
const  token = window.location.search;
let params = new URLSearchParams(token);
let q = params.get("token");
 
console.log(q);

commerce.customer.getToken(q,true).then((jwt) =>console.log(jwt));// exchanging access token for customer's jwt token and storing it in 
   
}, [])

   


       
     return (  
        <>
       
            <main className={classes.content}>
            <div className={classes.toolbar}/>  
            <Grid container justifyContent='center' spacing={4}>
               { products.length===0  ?  <CircularProgress/>:
               products.map((product) => (
                   <Grid item key={product.id } xs={12} sm={6} md={4} lg={3}>
                       <Product product={product} onAddToCart={onAddToCart}/>
                       </Grid>
               ))}
            </Grid>
            
        </main>
        </>   
       
                    );
};

export default Products
