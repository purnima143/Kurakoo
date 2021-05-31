import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector} from "react-redux";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Meta from "../../helpers/Meta";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import './UserEdit.css';
import '../SignUp/SignUp.css'
import Navbar from "../navbar/Navbar";
import {Progress} from 'bootstrap-4-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

toast.configure();
const SignUp = () => {
    useEffect(()=>{
        AOS.init({
            duration:2000,
            delay:1000
        })
    },[]);
    const initialState = {
        email: "",
        firstName:"",
        lastName:""
    };
    // eslint-disable-next-line
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    
    const getMode = () => {
        return JSON.parse(localStorage.getItem("mode")) || false;
    };
    // eslint-disable-next-line
    const [dark, setmode] = useState(getMode());
    useEffect(() => {
        localStorage.setItem("mode", JSON.stringify(dark));
    }, [dark]);

    //CHECK WHETHER THE SCREEN IS SMALL OR NOT
    // eslint-disable-next-line
    const isSmallScreen = useMediaQuery({
        query: "(max-width: 959.5px)"
    });
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const [formData, setFormData] = useState(initialState);

    //MAKING CHANGE IN STATE VALUES FROM USER INPUT
    // eslint-disable-next-line
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //TOAST TO DISPLAY FOR INVALID INPUTS WITH CUSTOM MESSAGE PARAMETER
    const errorToast = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    };

    //TOAST TO DISPLAY FOR SUCCESSFULL SIGNIN
    const successToast = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    };

    const editUser = (e) => {
        //FUNCTION TO DO APPROPRIATE TASK ON CLICKING SUBMIT BUTTON
    // eslint-disable-next-line
        //CONDITIONS TO CHECK VALID INPUT DETAILS
        if (formData.email !== "") {
            // eslint-disable-next-line
            const valid_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (valid_email.test(formData.email)) {
                if (formData.firstName !== "") {
                    if(formData.lastName!=""){
                    //Code to perform authentication via an api
                    // if user is successfully signed then then we can have a .then() block
                    // in which we will show a toast and redirect the user
                    successToast("Successfully edited");
                } else {
                    errorToast("Please enter Last Name");
                }}
                else {
                    errorToast("Please enter First Name");
                }
            } else {
                errorToast("Please enter a valid email id");
            }}
         else {
            errorToast("Please enter email");
        }
    };
    if (auth.authenticate) {
        return <Redirect to={"/"} />;
    }

    if (user.loading) {
        return <Progress mb='4' w='25%'><Progress.Bar striped animated min='0'max='100' mx='auto' now='50'>Loading....</Progress.Bar></Progress>;
    }
    return (
        <div >
              <Navbar/>
              <Meta title="SignUp ​🚪​👨​​👩🏻​| Kurakoo" />
              <div class="container" style={{marginTop:'10%'}}>
              <img  alt= "img"src="https://previews.123rf.com/images/chrisdorney/chrisdorney1602/chrisdorney160200077/51658510-no-questions-asked-red-rubber-stamp-over-a-white-background-.jpg"
    style={{width:"25%", height:"480px", opacity:0.5}}
    data-aos='fade-right'/>
	<section id="content" style={{marginTop:'-40%'}}>
		<form action="" data-aos='fade-in'>
			<h1>Update Profile</h1>
			<div>
				<input type="text" placeholder="First Name"  name="firstName"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    required/>
			</div>
            <div>
				<input type="text" placeholder="Last Name"
                                    name="lasttName"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    required />
			</div>   
            <div>
				<input  type="email"
                                    placeholder="example@email.com"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required/>
			</div>
            <div>
				<input name="password"
                                    placeholder="Password"
                                    type={PasswordInputType}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required />
			</div>
			<div>
				<input type="submit" value="Update"
                            onClick={editUser} />
			</div>
		</form>
	</section><img alt="preview" src="https://previews.123rf.com/images/lkeskinen/lkeskinen1707/lkeskinen170708972/82453980-no-answer-rubber-stamp.jpg"
    style={{width:"25%", height:"480px", opacity:0.5,marginLeft:'75%',marginTop:'-41%'}}
    data-aos='fade-left'/>
</div></div>
        
    );
                                }

export default SignUp;
