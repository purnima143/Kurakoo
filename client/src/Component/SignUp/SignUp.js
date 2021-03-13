import React, { useState } from 'react';
import './SignUp.css';
import { useMediaQuery } from 'react-responsive';
import Grid from '@material-ui/core/Grid';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const SignUp = ()=>{
    //STATE HOOKS FOR INPUT DETAILS
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [course, setCourse] = useState("");
    const [year, setYear] = useState(2021);
    const [college, setCollege] = useState("");

    //CHECK WHETHER THE SCREEN IS SMALL OR NOT
    const isSmallScreen = useMediaQuery({
        query: '(max-width: 959.5px)'
    });

    //TOAST TO DISPLAY FOR INVALID INPUTS WITH CUSTOM MESSAGE PARAMETER
    const errorToast = (message)=>{
        toast.error(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }); 
    };
    
    //FUNCTION TO DO APPROPRIATE TASK ON CLICKING SUBMIT BUTTON
    const PostData = ()=>{
        //CONDITIONS TO CHECK VALID INPUT DETAILS
        if(name !== ""){
            if(email!==""){
                // eslint-disable-next-line
                const re = /^(([^<>()[\]\\.,;:"\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(re.test(email)){
                    if(password!==""){
                        if(course!==""){
                            if(year!==""){
                                if(college!==""){
                                    toast.success("Valid details", {
                                        position: "top-right",
                                        autoClose: 2000 ,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                    });
                                }else{
                                    errorToast("Please enter college name");
                                }
                            }else{
                                errorToast("Please enter year");
                            }
                        }else{
                            errorToast("Please enter course name");
                        }
                    }else{
                        errorToast("Please enter password");
                    }
                }else{
                   errorToast("Invalid email id"); 
                }
            }else{
                errorToast("Please enter email");
            }
            
        }else{
            errorToast("Please enter name");
        }
    };

    return(
        <Grid container>
            {/* SHOW THE SIDE IMAGE ONLY ON LARGE WIDTH SCREENS */}
            {!isSmallScreen
            ?
            <Grid item md={6} lg={6}>
                <img className="signup_image" src="./images/Formimage.png" alt="signup_image"></img>
            </Grid>
            :
            <Grid item md={12} lg={12}></Grid>
            }
            
            <Grid item xs={12} sm={12} md={6} lg={6}>
                {/* SHOW KURAKOO LOGO RATHER THAN IMAGE ON SMALL SCREENS */}
                {
                    isSmallScreen
                    ?
                    <img className="mobile_logo_img" src="./images/kurakoo-logo.png" alt="mobile_logo_img"></img>
                    :
                    <div></div>
                }

                {/* //INPUT CONTENT */}
                <div className="common_content">
                    <h1 className="signup_heading">Sign up</h1>
                    <label>Name</label>
                    <br></br>
                    <input 
                    className="text_ip"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}></input>
                    <label>Email</label>
                    <br></br>
                    <input 
                    className="text_ip"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}></input>
                    <label>Password</label>
                    <br></br>
                    <input 
                    className="text_ip" 
                    type="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}></input>
                    <Grid container spacing={4}>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <label>Course</label>
                            <br></br>
                            <input 
                            className="text_ip"
                            value={course}
                            onChange={(e)=>{setCourse(e.target.value)}}></input>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <label>Year</label>
                            <br></br>
                            <input 
                            type="number" 
                            className="text_ip"
                            value={year}
                            onChange={(e)=>{setYear(Number(e.target.value))}}></input>
                        </Grid>
                    </Grid>
                    <label>College Name</label>
                    <br></br>
                    <input 
                    className="text_ip"
                    value={college}
                    onChange={(e)=>{setCollege(e.target.value)}}></input>
                    <button 
                    className="create_account_button"
                    onClick={()=>{PostData()}}>Create account</button>
                    <p className="signup_signin_message">Already a user? <span className="signin_link">Sign in</span></p>
                </div>
            </Grid>
            
        </Grid>
    );
};

export default SignUp;