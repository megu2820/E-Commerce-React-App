import React from 'react'
import { Container,Typography,Button,Grid } from '@material-ui/core'
import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const Cart=({cart, handleUpdateCartQty,handleRemoveFromCart, handleEmptyCart}) =>{
    const classes = useStyles();
   
    const EmptyCart = () => (   // instant return to show empty cart
        <Typography variant="subtitle1" >You have no items in your shopping cart,
        <Link to='/' classes={classes.link}>start adding some</Link>!  
        </Typography> 
      );
  
      const FilledCart = ()=>( //instant return to display filled cart
          <>
          <Grid container spacing={3} >
            {cart.line_items.map((item)=>(
                 <Grid item  xs={12} sm={6} md={4} lg={3}key={item.id}>
                     <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                     </Grid>
            ))}
          </Grid>
         
              <Grid  style={{marginTop:'20px'}} >
              
              <Typography variant="h4" style={{float: 'left'}}>
                  Subtotal: {cart.subtotal.formatted_with_symbol}
              </Typography>
                 <div style={{display: 'table-cell', float:'right'}}>
                  <Button  className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary"onClick={handleEmptyCart}>Empty Cart</Button>
                  <Button component={Link}  to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
               </div>
                  </Grid>

        
          
          </>
      )
      if (!cart.line_items) return 'Loading';
    return (
        <Container>
             <div className={classes.toolbar}>
                 <Typography className={classes.title} variant='h3' gutterBottom>
                   Your Shopping Cart
                 </Typography>
                 { !cart.line_items.length? <EmptyCart/>: <FilledCart/>}
            
            </div>
        </Container>
       
    )
}

export default Cart
