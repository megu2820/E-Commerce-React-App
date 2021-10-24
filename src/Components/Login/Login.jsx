// Login Page ui

import React, { useState} from 'react'
import {TextField, Box, CssBaseline,Avatar, Container, Typography, Grid,Button,Link} from '@material-ui/core'
import VpnKey from '@material-ui/icons/VpnKey'
import useStyles from './styles'



const Login= ({LoginUser})=> {
    const classes= useStyles(); // to access my custom css from styles.js
    const [email, setEmail] = useState('');  // user's email
    const [message, setMessage] = useState('');
    
    const handleSubmit = (event)=>{
           event.preventDefault();
           LoginUser(email);
           setEmail('');
           setMessage('We have just sent you a short lived magic link on your email address. Please touch that link to log in to your account');
           document.getElementById('message-div').classList.add(classes.messagediv);
    }


    return (<><div className={classes.imagediv}> 
     
      <Container component="main" maxWidth="md"className={classes.container}>
    
           <div  className={classes.formdiv}>
             <CssBaseline />
        
               <Box className={classes.avatarbox}>
                      <Avatar  style={{backgroundColor: '#f50057'}}>
                        <VpnKey />
                      </Avatar>
                      <Typography component="h1" variant="h5">  Login </Typography>
             </Box>
             <Box component="form" onSubmit={handleSubmit} noValidate  >
                  <Grid container spacing={2}>
                  <Grid item xs={12}>
                 {localStorage.getItem('logoutMessage')&&(<div id='logout-div ' className={classes.messagediv}><Typography variant= 'h6' >{localStorage.getItem('logoutMessage')}</Typography></div>)} 
                  <div id='message-div'><Typography variant= 'h6'>{message}</Typography></div>
                  </Grid>
                       <Grid item xs={12}>
                           <TextField
                                  required
                                  fullWidth
                                  type="email"
                                  value={email}
                                  id="email"
                                  label="Email Address"
                                  name="email"
                                  autoComplete="email"
                                  variant="outlined"
                                  InputLabelProps={{
                                         style: { color: '#000' },
                                            }}
                                          
                                  onChange={(e)=> setEmail(e.target.value) } />
                   </Grid>
                 </Grid>
                 <Button
                        type="submit"
                         fullWidth
                          variant="contained"
                          className={classes.button} >
                       < Typography variant="h6" > Send Magic Link</Typography>
                 </Button>
                 <  Typography variant="h6" className={classes.footer} >{'Copyright © '}<Link color="inherit" href="#">
                       Megu Community</Link>{' '} {new Date().getFullYear()}  {'.'}
                 </Typography>

                </Box>
           </div>
       </Container>
     
       </div>
</>
    )
}

export default Login
