// Necessary Imports
import React, {useState} from 'react'
import { Typography, Divider,Button, CssBaseline } from '@material-ui/core'
import CreditCardInput from 'react-credit-card-input'; // Package installed to 
import { MuiThemeProvider,createTheme } from '@material-ui/core/styles';
import Review from './Review'

const PaymentForm = ({checkoutToken,nextStep,backStep,shippingData,onCaptureCheckout}) => {
   
    const theme = createTheme();// to get nice greyish background theme from material-ui
    // Defining Card States
    const [cvc, setCVC] = useState([]);
    const [cardNumber, setCardNumber] = useState([]);
    const [expiry, setExpiry] = useState([]);

    // Functions to handle Card input changes
    const handleCardNumberChange=(e)=>{ setCardNumber(e.target.value); }
    const handleCardExpiryChange=(e)=>{setExpiry(e.target.value);}
    const handleCardCVCChange=(e)=>{setCVC(e.target.value); }
    
    const handleSubmit= (event)=>{
       event.preventDefault();   // To prevent refreshing of Page
       // Creating a object with all necessary information about order to be passed to handleCaptureCheckout function declared in App.js
       const orderData={
               line_items: checkoutToken.live.line_items,
               customer: {firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email,},
               shipping: {name: 'Primary' , 
               street: shippingData.address1, 
               town_city: shippingData.city,
               country_state: shippingData.shippingsubdivision,
               postal_zip_code: shippingData.zip,
               country: shippingData.shippingCountry,    
            },
            fulfillment: {shipping_method: shippingData.shippingOption},
          
           }
           onCaptureCheckout(checkoutToken.id,orderData,cardNumber,cvc,expiry);
           nextStep();}

    
   return (
    <MuiThemeProvider theme={theme}>
        <>
        <CssBaseline/>
           <Review checkoutToken={checkoutToken}/>
           <Divider/>
           <Typography variant="h6" gutterBottom style={{margin: '20px 0'}}>
            Payment Method
           </Typography>
          <form onSubmit={(e) => handleSubmit(e)}>

            <CreditCardInput
               cardNumberInputProps={{ value: cardNumber,onChange:handleCardNumberChange}}
               cardExpiryInputProps={{ value: expiry,onChange:handleCardExpiryChange }}
               cardCVCInputProps={{ value: cvc , onChange:handleCardCVCChange}}
               fieldClassName="input"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained"  color="primary"> Pay {checkoutToken.live.subtotal.formatted_with_symbol}</Button>
            </div>
          </form>
          </>
      </MuiThemeProvider>
    )
}

export default PaymentForm
