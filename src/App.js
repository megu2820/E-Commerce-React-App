// Necessary imports
import React, { useState,useEffect} from 'react'
import {commerce} from './lib/Commerce'
import {Products,Navbar,Cart,Checkout} from './Components'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'



function App() {


   // States
   const [products,setProducts] = useState([]);
   const [cart, setCart] = useState({});
   const[order,setOrder]= useState({});
   const [errorMessage,setErrorMessage]= useState('');
   
   // functions

   const fetchProducts= async ()=>{
      const {data} = await commerce.products.list();
      setProducts(data);
   }

   const fetchCart = async ()=>{
      setCart(await commerce.cart.retrieve());
   }
   const handleAddToCart = async (productID, quantity)=>{
   const {cart}= await commerce.cart.add(productID,quantity);
   setCart(cart)
   }
   const handleUpdateCartQty = async(productID,quantity)=>{
      const {cart}= await commerce.cart.update(productID,{quantity});
      setCart(cart);
   }
   const handleRemoveFromCart = async(productID)=>{
      const {cart} = await commerce.cart.remove(productID);
      setCart(cart);
   }
   const handleEmptyCart= async()=>{
      const {cart} = await commerce.cart.empty();
      setCart(cart);
   }
   const refreshCart= async()=>{
      const newCart= await commerce.cart.refresh();
      setCart(newCart);
   }
   const handleCaptureCheckout= async(checkoutTokenId, newOrder,cardNumber,cvc,expiry)=>{
      setErrorMessage('');  // setting states to default values so that when the component gets rendered..
      setOrder({});         // it should always be rendered with fresh state
      try {
         const incomingOrder= await commerce.checkout.capture(checkoutTokenId,{...newOrder,
            payment: {
               gateway: 'test_gateway', //using the test gateway provided by commerce.js
               card: {
                 number: cardNumber,
                 expiry_month: expiry.slice(0,2),  //to split the expiry format MM/YY to month portion 
                 expiry_year: expiry.slice(5,7),   //to split the expiry format MM/YY to year portion 
                 cvc: cvc,
                 postal_zip_code: '4242',
               }}}
         );
         setOrder(incomingOrder);
        
         refreshCart();
         
      } catch (error) {
         setErrorMessage(error.data.error.message);
         console.log(error);
      }


   }
   useEffect(() => {
      fetchProducts();
      fetchCart();
   }, [])

  
   return (
      <Router>
         <div>
         <Navbar totalItems={cart.total_items}/>
         <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart}/>
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart}
             handleUpdateCartQty={handleUpdateCartQty}
             handleRemoveFromCart={handleRemoveFromCart}
             handleEmptyCart={handleEmptyCart}
            />   
          </Route>
          <Route exact path="/checkout">
            <Checkout
             cart={cart}
             order={order}
             error={errorMessage}
             onCaptureCheckout={handleCaptureCheckout}
             />
          </Route>
         </Switch>
         </div>
      </Router>
      
   )
}

export default App
