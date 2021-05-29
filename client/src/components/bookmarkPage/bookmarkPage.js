import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Meta from "../../helpers/Meta";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid,Typography} from '@material-ui/core';
import '../SignUp/SignUp.css'
import Navbar from "../navbar/Navbar"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading:{
      textAlign:"center"
  },
  formLabel:{
      marginLeft:'20px',
      fontSize:'20px',
      fontWeight:600,
      marginTop:'120px'


  },
  formBox:{
     marginLeft:'20px', 
     width:"80%"
    },
    bookMark:{
      position:"relative",
      top:"18px"
    }
}));
toast.configure();
const SignUp = () => {
    const classes = useStyles();
    const getMode = () => {
        return JSON.parse(localStorage.getItem("mode")) || false;
    };
    // eslint-disable-next-line
    const [dark, setmode] = useState(getMode());
    useEffect(() => {
        localStorage.setItem("mode", JSON.stringify(dark));
    }, [dark]);

  
    
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);


    

    if (auth.authenticate) {
        return <Redirect to={"/"} />;
    }

    if (user.loading) {
        return <p>Loading...!</p>;
    }

    return (
        <div>
              <Navbar/>
        <div className={"main"} style={{marginTop:"50px"}}>
          
            <Meta title="Bookmark Page ​🔖​| Kurakoo" />
            <Typography variant="h3" component="h2" align="center">
              <hr/>
            <img alt="previe" src="https://freeiconshop.com/wp-content/uploads/edd/bookmark-alt-flat.png" width="80" className={classes.bookMark}/>  Bookmark Page&nbsp;
                
</Typography>
            <Grid container spacing={1}>
            <Grid item xs={6}>
            <h2 className={classes.heading}>My Questions</h2>
          <Paper>
          <img alt="preview" src="https://previews.123rf.com/images/chrisdorney/chrisdorney1602/chrisdorney160200077/51658510-no-questions-asked-red-rubber-stamp-over-a-white-background-.jpg"
    style={{width:"100%", height:"480px", opacity:0.5}}
    />
          </Paper>
        </Grid>
        <Grid item xs={6}>
        <h2 className={classes.heading}>My Answers</h2>
          <Paper>
    <img alt="preview" src="https://previews.123rf.com/images/lkeskinen/lkeskinen1707/lkeskinen170708972/82453980-no-answer-rubber-stamp.jpg"
    style={{width:"100%", height:"480px", opacity:0.5}}
    />
          </Paper>
        </Grid>
       
            </Grid>
        </div>
        </div>
    );
};

export default SignUp;
