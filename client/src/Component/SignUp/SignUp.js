import React, { useState } from 'react';
import {Link,useHistory} from 'react-router-dom';
import './SignUp.css';
import { useMediaQuery } from 'react-responsive';
import Grid from '@material-ui/core/Grid';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


const initialState = {
    name:'',email:'',password:'',course:'',year:2021,college:''
}
const SignUp = ()=>{
    
    //STATE HOOK FOR INPUT DETAILS
    const [formData,setFormData] = useState(initialState);

    //MAKING CHANGE IN STATE VALUES FROM USER INPUT
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const history = useHistory();

    //CHECK WHETHER THE SCREEN IS SMALL OR NOT
    const isSmallScreen = useMediaQuery({
        query: '(max-width: 959.5px)'
    });



    //TOAST TO DISPLAY FOR INVALID INPUTS WITH CUSTOM MESSAGE PARAMETER
    
     const errorToast = (message) =>{
        toast.error(message, {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
     }
    //TOAST TO DISPLAY FOR SUCCESSFULL SIGNUP
    const successToast = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 2000 ,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    
    //FUNCTION TO DO APPROPRIATE TASK ON CLICKING SUBMIT BUTTON
    const PostData = ()=>{
        //CONDITIONS TO CHECK VALID INPUT DETAILS
        if(formData.name !== ""){
            if(formData.email!==""){
                // eslint-disable-next-line
                const re = /^(([^<>()[\]\\.,;:"\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(re.test(formData.email)){
                    if(formData.password!==""){
                        if(formData.course!==""){
                            if(formData.year!==""){
                                if(formData.college!==""){
                                    // If signup process is successfull via an api then
                                    // we will show a toast and redirect the user in a .then() block
                                    successToast("Signup successfull")
                                    history.push("/")
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

    return (
        <Grid container>
            {/* SHOW THE SIDE IMAGE ONLY ON LARGE WIDTH SCREENS */}
            {!isSmallScreen ? (
                <Grid item md={6} lg={6}>
                    <img
                        draggable={false}
                        className="signup_image"
                        src="./images/Formimage.png"
                        alt="signup_image"
                    ></img>
                </Grid>
            ) : (
                <Grid item md={12} lg={12}></Grid>
            )}

            <Grid item xs={12} sm={12} md={6} lg={6}>
                {/* SHOW KURAKOO LOGO RATHER THAN IMAGE ON SMALL SCREENS */}
                {isSmallScreen ? (
                    <Link to="/">
                        <img
                            draggable={false}
                            className="mobile_logo_img"
                            src="./images/kurakoo-logo.png"
                            alt="mobile_logo_img"
                        ></img>
                    </Link>
                ) : (
                    <div></div>
                )}

{/* //INPUT CONTENT */}
<input type="checkbox" id="show" className="show" />
<label for="show" class="title">sign up<i class="flag left"></i><i class="flag right"></i></label>
<form className="form"> 
    <div className="group">
        <div className="col-1">
            <label for="name">Username</label>
        </div>
        <div class="col-2">
            <input type="text" placeholder="Username" name="name" onChange={handleChange} required/>
        </div>
    </div>
     
    <div className="group">
        <div className="col-1">
            <label for="email">Email</label>
        </div>
        <div className="col-2">
            <input type="email" placeholder="example@email.com" name="email" onChange={handleChange} required/>
        </div>
    </div>
    <div className="group">
        <div className="col-1">
            <label for="password">Password</label>
        </div>
        <div className="col-2">
            <input type="password" placeholder="password" name="password" onChange={handleChange} required/>
        </div>
    </div>
    <div className="group">
        <div className="col-1">
            <label for="course">Course</label>
        </div>
        <div className="col-2">
            <input type="text" placeholder="course" name="course" onChange={handleChange} required/>
        </div>
    </div>
    <div className="group">
        <div className="col-1">
            <label for="year">Year</label>
        </div>
        <div className="col-2">
            <input type="number" placeholder="year" name="year" onChange={handleChange} required/>
        </div>
    </div>
    <div className="group">
        <div className="col-1">
            <label for="college">College Name</label>
        </div>
        <div className="col-2">
            <input type="text" placeholder="college name" name="college" onChange={handleChange} required/>
        </div>
    </div>
    <input type="submit" className="submit" value="submit" onClick={PostData}/><br/>
    <p className="signup_signin_message">Already a user? 
                    {/* <a href="/signin" className="signin_link">Sign In</a> */}
                    <Link to="/signin" >Sign In</Link>
                    </p>
                    </form>
            </Grid>   
        </Grid>
    );
};

export default SignUp;
