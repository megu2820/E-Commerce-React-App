//Stylesheet for CartItem.jsx
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
    backgroundSize: 'contain',
  },
  cardContent: {
    display: 'flex',
    height: '85px',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
    
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',

  },
}));