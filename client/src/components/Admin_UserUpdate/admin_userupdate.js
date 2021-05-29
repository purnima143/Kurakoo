import React from 'react';
import "./adminScreen.css";
import {FormControlLabel,Checkbox} from '@material-ui/core';
import Navbar from "../navbar/Navbar";
import './adminScreen.css'

 
export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');
// eslint-disable-next-line
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (<div><Navbar/><br/><br/>
    <div class="container" style={{width:'50%'}}>
    <h1>Edit User</h1>
<form>
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
    <input type="submit" value="Update"/>
    <div class="signup_link">
        
    </div>

</form>
</div>
</div>
  );
}