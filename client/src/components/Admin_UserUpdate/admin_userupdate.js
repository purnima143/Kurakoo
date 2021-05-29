import React from 'react';
import "./adminScreen.css";
import { makeStyles } from '@material-ui/core/styles';
import {FormControlLabel,Checkbox, TextField, Box,CardContent,Typography,Container,Card,Button} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Navbar from "../navbar/Navbar"


const defaultTheme = createMuiTheme({})
// eslint-disable-next-line
const { breakpoints, typography: { pxToRem } } = defaultTheme
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
  },
  textField:{
    width:'100%',
    height:'500%',
    color:'red'
  },
  background:{
    backgroundColor:'#39BD3D',
    padding:theme.spacing(1),
    fontSize:20,
    fontWeight:800,
    fontFamily: "Roboto",
    textAlign:"center",
  color:"white",
    [breakpoints.down("xs")]: {
      fontSize: "1rem",
     
    },

  },
  spanText:{
    fontSize:17,
    color:"#F9FABD"
  },
  textarea: {
    resize: "both"
  },
  cardContent:{
    backgroundImage:'https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg'
  }
}));
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

});
// eslint-disable-next-line
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});



 
export default function MultilineTextFields() {
  const classes = useStyles();
  // eslint-disable-next-line
  const [value, setValue] = React.useState('Controlled');
// eslint-disable-next-line
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <>
      <Navbar/>
    <Container
        className={classes.root}
        maxWidth="sm"
        style={{marginTop:"50px"}}
        >
          <hr/>
         <Typography variant="h3" component="h2">
Edit User
</Typography>
        <Card className="login" style={{backgroundImage:"https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg"}}>
          <CardContent className={classes.cardContent}>
              <form
          noValidate
        
        
        >
<Typography variant="h6" component="h6">
First Name
</Typography>
          <TextField
          
            fullWidth
            id="name"
            label=""
            margin="normal"
            name="name"
          
            variant="outlined"
          />
          <Typography variant="h6" component="h6">
Last Name
</Typography>
           <TextField
           
           fullWidth
        
           label=""
           margin="normal"
           name="subject"
           id="subject"
           variant="outlined"
         />
         <Typography variant="h6" component="h6">
Email 
</Typography>
           <TextField
          id="message"
          label=""
          margin="normal"
          name="message"
          fullWidth
          multiline
        
         
          variant="outlined"
        />
         <FormControlLabel
          value="isAdmin"
          control={<Checkbox color="primary" />}
          label="isAdmin"
          labelPlacement="isAdmin"
        />
          <Box mt={2}>
            <Button
              color="secondary"
             
              size="large"
              type="submit"
              variant="contained"
              value="Create Email"
            
            >
              Update
            </Button>


           {/* */}
          </Box>
        </form>
 
          </CardContent>
        </Card>
       
      </Container>
      </>
  );
}