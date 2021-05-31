import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Meta from "../../helpers/Meta";
import { makeStyles } from '@material-ui/core/styles';
import {Progress} from 'bootstrap-4-react';
import {Grid,Typography} from '@material-ui/core';
import './bookmark.css'
import Navbar from "../navbar/Navbar"

const useStyles = makeStyles((theme) => ({
 
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
      return <Progress mb='4' w='25%'><Progress.Bar striped animated min='0'max='100' mx='auto' now='50'>Loading....</Progress.Bar></Progress>;
  }
    return (
        <div>
              <Navbar/><br/><br/>
        <div className="main" style={{marginTop:"50px",backgroundColor:'white'}} >
          
            <Meta title="Bookmark Page ​🔖​| Kurakoo" />
            <Typography variant="h3" component="h2" align="center">
              <hr/>
            <img alt="previe" src="https://freeiconshop.com/wp-content/uploads/edd/bookmark-alt-flat.png" width="80" className={classes.bookMark} />  Bookmark Page&nbsp;
                
</Typography>
<div/>
<div class="card-container">
  <div class="card">
    <div class="side"><img alt="preview" src="https://previews.123rf.com/images/lkeskinen/lkeskinen1707/lkeskinen170708972/82453980-no-answer-rubber-stamp.jpg"
    style={{width:"100%", height:"280px", opacity:0.5}}
    /></div>
    <div class="side back">No Answers</div>
  </div>
</div>
<div class="card-container2">
  <div class="card2">
    <div class="side"><img alt="preview" src="https://previews.123rf.com/images/chrisdorney/chrisdorney1602/chrisdorney160200077/51658510-no-questions-asked-red-rubber-stamp-over-a-white-background-.jpg"
    style={{width:"100%", height:"280px", opacity:0.5}}
    /></div>
    <div class="side back">No Questions</div>
  </div>
</div>
        </div></div>
    );
};

export default SignUp;
