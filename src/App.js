// Necessary imports
import React, { useState,useEffect} from 'react'
import {commerce} from './lib/Commerce'
import {Products,Navbar,Cart,Checkout} from './Components'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import ProtectedRoute from './Components/Login/ProtectedRoute'


function App() {
   

   // States
   const [products,setProducts] = useState([]);
   const [cart, setCart] = useState({});
   const[order,setOrder]= useState({});
   const [errorMessage,setErrorMessage]= useState('');
   
   
   
   localStorage.removeItem('logoutMessage'); // to ensure that the login page is rendered with no logoutMessage intially(no previous stored states from localstorage)
   // functions
   
  const LoginUser = async (email)=>{
     console.log(email);
    await commerce.customer.login(email,new URL('/products?token={token}', window.location.origin).href).then((token)=>{
      
      localStorage.setItem("LoggedIn", true);
      });
  }

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


   return ( <Router>
         <div>
         <Navbar totalItems={cart.total_items}/>
         <Switch>
         <Route exact path="/">
           <Login LoginUser= {LoginUser}/>
          </Route>
          <ProtectedRoute exact
                    path="/products"
                
                  onAddToCart={handleAddToCart}
                   products={products}
                 component={Products}
                
             />
         
          <ProtectedRoute exact path="/cart"
            cart={cart}
            
             handleUpdateCartQty={handleUpdateCartQty}
             handleRemoveFromCart={handleRemoveFromCart}
             handleEmptyCart={handleEmptyCart}
             component={Cart}
            />   
         
          <ProtectedRoute exact path="/checkout"
             
             cart={cart}
             order={order}
             error={errorMessage}
             onCaptureCheckout={handleCaptureCheckout}
             component={Checkout}
             />
       
         </Switch>
         </div>
      </Router>
    
   )
}

export default App
