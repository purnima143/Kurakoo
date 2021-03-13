import React, { useState } from 'react';
import './SignIn.css';
import { useMediaQuery } from 'react-responsive';
import Grid from '@material-ui/core/Grid';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const SignIn = () =>{

    //STATE HOOKS FOR INPUT DETAILS
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //CHECK WHETHER THE SCREEN IS SMALL OR NOT
    const isSmallScreen = useMediaQuery({
        query: '(max-width: 959.5px)'
    });

    //TOAST TO DISPLAY FOR INVALID INPUTS WITH CUSTOM MESSAGE PARAMETER
    const errorToast = (message)=>{
        toast.error(message, {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }); 
    };
    
    //FUNCTION TO DO APPROPRIATE TASK ON CLICKING SUBMIT BUTTON
    const PostData = ()=>{
        //CONDITIONS TO CHECK VALID INPUT DETAILS
            if(email!==""){
                // eslint-disable-next-line
                const valid_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(valid_email.test(email)){
                    if(password!==""){
                        //Code to perform authentication via an api         
                    }else{
                        errorToast("Please enter password");
                    }
                }else{
                   errorToast("Please enter a valid email id"); 
                }
            }else{
                errorToast("Please enter email");
            }
    };

    return(
        <Grid container>
            {/* SHOW THE SIDE IMAGE ONLY ON LARGE WIDTH SCREENS */}
            {
                !isSmallScreen
                ?
                <Grid item md={6} lg={6}>
                    <img className="signin_image" src="./images/Formimage.png" alt="signin_image"></img>
                </Grid>
                :
                <Grid item md={12} lg={12}></Grid>
            }
            
            <Grid item xs={12} sm={12} md={6} lg={6}>
                {/* SHOW KURAKOO LOGO RATHER THAN IMAGE ON SMALL SCREENS */}
                {
                    !isSmallScreen
                    ?
                    <div></div>
                    :
                    <img className="mobile_logo_img" src="./images/kurakoo-logo.png" alt="mobile_logo_img"></img>
                }

                {/* Form to take input */}
                <div className="common_content">
                    <h1 className="signin_heading">
                        Sign In
                    </h1>
                    <div className="signin_form">
                        <label>
                            Email id
                        </label>
                        <br></br>
                        <input 
                            className="text_ip"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}} 
                        />

                        <label>
                            Password
                        </label>
                        <br></br>
                        <input 
                            className="text_ip" 
                            type="password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}} 
                        />
                        <br></br>

                        <button 
                            className="sign_in_button"
                            type="submit"
                            onClick={()=>{PostData()}}
                        >
                            Continue
                        </button>
                        <p className="signup_signin_message">
                            New User ? <a href="/signup" className="signup_link">Sign up</a>
                        </p>
                    </div>
                    
                </div>
            </Grid>
            
        </Grid>
    );
};

export default SignIn;
