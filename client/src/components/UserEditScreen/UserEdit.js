import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Meta from "../../helpers/Meta";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import './UserEdit.css';
import '../SignUp/SignUp.css'
import Navbar from "../navbar/Navbar";
import {Progress} from 'bootstrap-4-react';

toast.configure();
const SignUp = () => {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    
    const getMode = () => {
        return JSON.parse(localStorage.getItem("mode")) || false;
    };
    const [dark, setmode] = useState(getMode());
    useEffect(() => {
        localStorage.setItem("mode", JSON.stringify(dark));
    }, [dark]);

    //CHECK WHETHER THE SCREEN IS SMALL OR NOT
    const isSmallScreen = useMediaQuery({
        query: "(max-width: 959.5px)"
    });
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const updateUser = (e) => {
        e.preventDefault();
        //dispatch
    
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
              <img src="https://previews.123rf.com/images/chrisdorney/chrisdorney1602/chrisdorney160200077/51658510-no-questions-asked-red-rubber-stamp-over-a-white-background-.jpg"
    style={{width:"25%", height:"480px", opacity:0.5}}
    />
	<section id="content" style={{marginTop:'-40%'}}>
		<form action="">
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
                            onClick={updateUser} />
			</div>
		</form>
	</section><img src="https://previews.123rf.com/images/lkeskinen/lkeskinen1707/lkeskinen170708972/82453980-no-answer-rubber-stamp.jpg"
    style={{width:"25%", height:"480px", opacity:0.5,marginLeft:'75%',marginTop:'-41%'}}
    />
</div></div>
        
    );
};

export default SignUp;
