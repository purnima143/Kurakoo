import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions";
import "./SignUp.css";
import { useMediaQuery } from "react-responsive";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Meta from "../../helpers/Meta";
import usePasswordToggle from "../../hooks/usePasswordToggle";
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
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [course, setCourse] = useState("");
    const [year, setYear] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const userSignup = (e) => {
        e.preventDefault();

        dispatch(
            signup({
                firstName,
                lastName,
                userName,
                email,
                password,
                course,
                year,
                collegeName,
                contactNumber
            })
        );
    };

    if (auth.authenticate) {
        return <Redirect to={"/"} />;
    }

    if (user.loading) {
        return <Progress mb='4' w='25%'><Progress.Bar striped animated min='0'max='100' mx='auto' now='50'>Loading....</Progress.Bar></Progress>;
    }

    return (
        <div className={dark ? "dark-mode main" : "main"}>
            <Grid container>
                <Meta title="SignUp ​🚪​👨​​👩🏻​| Kurakoo" />
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
                                src="../images/kurakoo-logo.png"
                                alt="mobile_logo_img"
                            ></img>
                        </Link>
                    ) : (
                        <div></div>
                    )}

                    {/* //INPUT CONTENT */}
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={dark}
                            onChange={() => {
                                setmode(!dark);
                            }}
                        />
                        <span className="slider round"></span>
                        <h2>{dark ? "Dark" : "Light"}</h2>
                    </label>
                    <input type="checkbox" id="show" className="show" />
                    <label for="show" class="title">
                        sign up<i class="flag left"></i>
                        <i class="flag right"></i>
                    </label>
                    <form className="form">
                        <div className="group">
                            <div className="col-1">
                                <label for="name">FirstName</label>
                            </div>
                            <div class="colm-2">
                                <input
                                    type="text"
                                    placeholder="first name"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <div className="group">
                            <div className="col-1">
                                <label for="name">LastName</label>
                            </div>
                            <div class="colm-2">
                                <input
                                    type="text"
                                    placeholder="last name"
                                    name="lasttName"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <div className="group">
                            <div className="col-1">
                                <label for="name">Username</label>
                            </div>
                            <div class="colm-2">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="name"
                                    value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className="group">
                            <div className="col-1">
                                <label for="email">Email</label>
                            </div>
                            <div className="colm-2">
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="group">
                            <div className="col-1">
                                <label for="password">Password</label>
                            </div>
                            <div className="colm-2">
                                <input
                                    name="password"
                                    placeholder="password"
                                    type={PasswordInputType}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                                <span className="password-toggle-icon-signup">
                                    {ToggleIcon}
                                </span>
                            </div>
                        </div>
                        <div className="group">
                            <div className="col-1">
                                <label for="course">Course</label>
                            </div>
                            <div className="colm-2">
                                <input
                                    type="text"
                                    placeholder="course"
                                    name="course"
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="group">
                            <div className="col-1">
                                <label for="year">Year</label>
                            </div>
                            <div className="colm-2">
                                <input
                                    type="number"
                                    placeholder="year"
                                    name="year"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="group">
                            <div className="col-1">
                                <label for="college">College</label>
                            </div>
                            <div className="colm-2">
                                <input
                                    type="text"
                                    placeholder="college name"
                                    name="college"
                                    value={collegeName}
                                    onChange={(e) =>
                                        setCollegeName(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <div className="group">
                            <div className="col-1">
                                <label for="name">ContactNumber</label>
                            </div>
                            <div class="colm-2">
                                <input
                                    type="number"
                                    placeholder="contact number"
                                    name="contactNumber"
                                    value={contactNumber}
                                    onChange={(e) =>
                                        setContactNumber(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <input
                            type="submit"
                            className="submit"
                            value="submit"
                            onClick={userSignup}
                        />
                        <br />
                        <p className="signup_signin_message">
                            Already a user?
                            {/* <a href="/signin" className="signin_link">Sign In</a> */}
                            <Link to="/signin">Sign In</Link>
                        </p>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default SignUp;
