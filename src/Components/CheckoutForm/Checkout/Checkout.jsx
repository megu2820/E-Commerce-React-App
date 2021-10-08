import React,{useState,useEffect} from 'react'
// Necessary Imports
import {Paper,Stepper,Step,StepLabel,Typography,CircularProgress} from '@material-ui/core'
import { commerce } from '../../../lib/Commerce';
import useStyles from './styles'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import Confirmation from './Confirmation';
import  Error  from './Error';



const steps=['Shipping Address','Payment Details']; // Declaring steps of stepper

const Checkout = ({cart,onCaptureCheckout, error, order}) => {
    const classes = useStyles();// instance to import styles from the corresponding stylesheet
    // Defining States
    const [activeStep,setActiveStep]= useState(0);
    const[checkoutToken,setCheckoutToken]= useState(null);
    const [shippingData,setShippingData]= useState({});
  
  
    useEffect(()=>{
      if (cart.id && cart.line_items.length) {  // if cart exists and it is not empty
        const generateToken= async()=>{
            
            try {
               
                 await commerce.checkout.generateToken(cart.id,{type: 'cart'})
                .then((checkout) =>{ setCheckoutToken(checkout)
                  }
                  );
              } catch (error) {
                console.log(error);
               
            }
        }
        generateToken();
      return()=>{
        setCheckoutToken({});   // CleanUp Function
      }
      }
    },[cart]);  // sensitive to Cart
   
   
    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);   // to increment to next step
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);   // to decrement to next step
    
    // To determine which form needs to be rendered
    const Form = () => activeStep===0?<AddressForm checkoutToken={checkoutToken} next={next} />
    :<PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout}/>;
    
  
    const next=(data)=>{
     
        setShippingData(data);
        nextStep();
    }
    // 
    return (
        <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.Stepper}> 
               {steps.map((step)=>(                                     
                   <Step key={step}>
                     <StepLabel>  {step}</StepLabel>
                       </Step>
               ))}
          </Stepper>
          
          { checkoutToken?  (activeStep===steps.length? (error? <Error error={error}/>:<Confirmation order={order} />) : checkoutToken &&<Form/>):(
          <div style={{display: 'flex', justifyContent: 'center'}}>
           <CircularProgress/>
          </div>
          )}
          </Paper>
        </main>    
       
        </>
    )
}

export default Checkout

