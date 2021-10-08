import React,{useState,useEffect} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid,Typography,  CssBaseline} from '@material-ui/core'
import { MuiThemeProvider,createTheme } from '@material-ui/core/styles';
import { useForm,FormProvider } from 'react-hook-form'
import FormInput from './CustomTextField'  // import custom input created using material-ui to integrate them to react-hook-form
import {commerce} from '../../lib/Commerce'
import { Link } from 'react-router-dom'

const AddressForm = ({checkoutToken,next}) => {
    const methods= useForm(); 
    // Defining States
    const [shippingCountries,setShippingCountries]= useState([]);
    const [shippingCountry,setShippingCountry]=useState('');
    const [shippingSubdivisions,setShippingSubdivisions]= useState([]);
    const [shippingSubdivision,setShippingSubdivision]=useState('');
    const [shippingOptions,setShippingOptions]= useState([]);
    const [shippingOption,setShippingOption]=useState('');
    // recreating structures to store api returned countries, subdivisions, Options
    const countries= Object.entries(shippingCountries).map(([code,name])=>({id: code, label: name}))
    const subdivisions= Object.entries(shippingSubdivisions).map(([code,name])=>({id: code, label: name}))
    const options= shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` }))
    // To use material-ui custom theme
    const theme = createTheme();
    // Necessary functions to fetch api response
    const fetchShippingCountries= async (checkoutTokenId)=>{
        
        const {countries}= await commerce.services.localeListShippingCountries(checkoutTokenId);

      
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
       
    }
    const fetchShippingSubdivisions= async (CountryCode)=>{
       
        const {subdivisions}= await commerce.services.localeListSubdivisions(CountryCode);
     
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    }

    const fetchShippingOptions = async(checkoutTokenId,country)=>{
       
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId,{country});
        setShippingOptions(options);
        setShippingOption(options[0].id);
    }

    useEffect(()=>{
        fetchShippingCountries(checkoutToken.id);
   return ()=>{
        setShippingCountries([]);
        setShippingCountry('');}
       
    },[checkoutToken.id]);

    useEffect(()=>{
        if(shippingCountry) fetchShippingSubdivisions(shippingCountry);
       return () => {
        setShippingSubdivisions([]);
        setShippingSubdivision('');
      };
    },[shippingCountry]);

    useEffect(()=>{
        if(shippingSubdivision) fetchShippingOptions(checkoutToken.id,shippingCountry,shippingSubdivision);
        return () => {
            setShippingOptions([]);
        setShippingOption('');
          };
     },[shippingSubdivision,checkoutToken.id,shippingCountry]);

     
    return (
    <MuiThemeProvider theme={theme}>
    <>
        <CssBaseline/>
        <FormProvider {...methods}>
        <Typography variant='h6'gutterBottom>Shipping Address</Typography>
           <form onSubmit={methods.handleSubmit((data)=> { next({...data,shippingCountry,shippingSubdivision,shippingOption})})}>
             <Grid container spacing={3}>
             <FormInput  name='firstName' label='First Name'/>
             <FormInput  name='lastName' label='Last Name'/>
             <FormInput  name='address1' label='Address'/>
             <FormInput  name='email' label='Email'/>
             <FormInput  name='city' label='City'/>
             <FormInput  name='zip' label='ZIP/Postal Code'/>
             <div style={{marginTop:'20px', width:'100%'}}>
                <InputLabel>Shipping Country</InputLabel>
                <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                   {countries.map((country)=>(
                      <MenuItem key={country.id} value={country.id}>
                        {country.label}
                      </MenuItem>
                     ))}
                </Select>
             </div>
             <div style={{marginTop:'20px', width:'100%'}}>
                  <InputLabel>Shipping Subdivision</InputLabel>
                  <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                         {subdivisions.map((subdivision)=>(
                             <MenuItem key={subdivision.id} value={subdivision.id}>
                                 {subdivision.label}
                             </MenuItem>
                        ))}
                  </Select>
             </div>
             <div style={{marginTop:'20px', width:'100%'}}>
                  <InputLabel>Shipping Options</InputLabel>
                  <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                              {options.map((option)=>(
                                   <MenuItem key={option.id} value={option.id}>
                                      {option.label}
                                   </MenuItem>
                                ))}
                   </Select>
             </div>
             </Grid>
             <br/>
             <div style={{ display: 'flex', justifyContent: 'space-between' ,marginTop:'30px'}}>
                      <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
                      <Button type="submit" variant="contained" color="primary">Next</Button>
             </div>
         </form>
     </FormProvider>
  </>
 </MuiThemeProvider> )
}

export default AddressForm
