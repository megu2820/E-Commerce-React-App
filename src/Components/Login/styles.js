// Stylesheet for login Page
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()=>({
    imagediv:{
        backgroundImage: `url('https://www.ecommercetimes.com/article_images/story_graphics_xlarge/xl-2020-ecommerce-optimization-1.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
       
     },
     container: {
        paddingTop: '150px',
        paddingBottom: '150px',
        
       
     },
     Checkbox: {
        marginTop: '20px'
     },
     button: {
        backgroundColor: '#f50057',
        marginTop: '20px',
        height: '50px',
       
     },
     link: {
        marginTop: '20px',
        textAlign: 'center'
     },
     avatarbox: {
       
           marginTop: 8,
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
       
     },
     footer: {
        color: "text.secondary",
         textAlign: 'center',
         marginTop: '20px',
        
     },
     appbarlogo: {
        borderRadius: '50%',
        marginRight: '10px',
        height: '35px'
     },
     formdiv: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
         padding: '30px',
         marginBottom: '200px',
         marginTop: '200px',
       
       
     },
     messagediv:{
        marginTop: '5px',
        padding: '20px',
        backgroundColor: '#d4edda',
        border: '#006400 3px solid',
        color: '#155724'
     }
    
  
}));