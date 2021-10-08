// Stylesheet for Cart.jsx


import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  
 
  title: {
    marginTop: '40%',
    '@media (min-width: 420px)' : {
      marginTop: '15%',
    }
   
  },
  
  emptyButton: {
    minWidth: '150px',
    marginBottom: '20px',
    marginRight: '10px',
    float:'right',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '10px',
   
    },
  },
  checkoutButton: {
    minWidth: '150px',
    marginBottom: '20px',
    float:'right',
    marginRight: '10px',
  },
  link: {
    textDecoration: 'none',
  },
 
}));