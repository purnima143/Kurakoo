import React,{useEffect,useState} from 'react';
import "./adminScreen.css";
import {FormControlLabel,Checkbox} from '@material-ui/core';
import Navbar from "../navbar/Navbar";
import './adminScreen.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

 
export default function MultilineTextFields() {
  useEffect(()=>{
    AOS.init({
        duration:2000,
        delay:1000
    })
},[]);

  const [setValue] = React.useState('Controlled');

const initialState = {
  email: "",
  firstName:"",
  lastName:""
};

const [formData, setFormData] = useState(initialState);
  const [setValue] = React.useState('Controlled');
// eslint-disable-next-line
  const handleChange = (event) => {
    setValue(event.target.value);
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
const updateUser = (e) => {
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
  return (<div><Navbar/><br/><br/>
    <div class="container" style={{width:'50%'}}>
    <h1>Edit User</h1>
<form data-aos="fade-up">
    <div class="txt_field">
        <input type="text" required id="name" name="name"/>
        <span></span>
        <label>First Name</label>
    </div>
    <div class="txt_field">
        <input type="text" required name="subject" id="subject"/>
        <span></span>
        <label>Last Name</label>
    </div>
    <div class="txt_field">
        <input type="email" required name="messege" id="messege"/>
        <span></span>
        <label>Email</label>
    </div>
    <FormControlLabel value="isAdmin" control={<Checkbox color="primary"/>}
    label="isAdmin" labelPlacement="isAdmin"/>
    <input type="submit" value="Update" onClick={updateUser}/>
    <div class="signup_link">
        
    </div>

</form>
</div>
</div>
  );
}