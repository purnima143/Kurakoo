import React, { useState, useEffect } from "react";
import "./SignIn.css";
import { useMediaQuery } from "react-responsive";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Meta from "../../helpers/Meta";
import usePasswordToggle from "../../hooks/usePasswordToggle";
toast.configure();

const initialState = {
    email: "",
    password: ""
};

const SignIn = () => {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    const getMode = () => {
        return JSON.parse(localStorage.getItem("mode")) || false;
    };
    const [dark, setmode] = useState(getMode());
    useEffect(() => {
        localStorage.setItem("mode", JSON.stringify(dark));
    }, [dark]);

    const history = useHistory();

    //STATE HOOK FOR INPUT DETAILS
    const [formData, setFormData] = useState(initialState);

    //MAKING CHANGE IN STATE VALUES FROM USER INPUT
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //CHECK WHETHER THE SCREEN IS SMALL OR NOT
    const isSmallScreen = useMediaQuery({
        query: "(max-width: 959.5px)"
    });

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

    //FUNCTION TO DO APPROPRIATE TASK ON CLICKING SUBMIT BUTTON
    const PostData = () => {
        //CONDITIONS TO CHECK VALID INPUT DETAILS
        if (formData.email !== "") {
            // eslint-disable-next-line
            const valid_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (valid_email.test(formData.email)) {
                if (formData.password !== "") {
                    //Code to perform authentication via an api
                    // if user is successfully signed then then we can have a .then() block
                    // in which we will show a toast and redirect the user
                    successToast("Successfully signed in");
                    history.push("/feed");
                } else {
                    errorToast("Please enter password");
                }
            } else {
                errorToast("Please enter a valid email id");
            }
        } else {
            errorToast("Please enter email");
        }
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const userLogin = (e) => {
        e.preventDefault();

        dispatch(
            login({
                email,
                password
            })
        );
    };

    if (auth.authenticate) {
        return <Redirect to={"/"} />;
    }

    return (
        <div className={dark ? "dark-mode main" : "main"}>
            <Grid container>
                <Meta title="SignIn ​🚪​🏃​💨​ | Kurakoo" />
                {/* SHOW THE SIDE IMAGE ONLY ON LARGE WIDTH SCREENS */}
                {!isSmallScreen ? (
                    <Grid item md={6} lg={6}>
                        <img
                            draggable={false}
                            className="signin_image"
                            src="./images/Formimage.png"
                            alt="signin_image"
                        ></img>
                    </Grid>
                ) : (
                    <Grid item md={12} lg={12}></Grid>
                )}

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    {/* SHOW KURAKOO LOGO RATHER THAN IMAGE ON SMALL SCREENS */}
                    {!isSmallScreen ? (
                        <div></div>
                    ) : (
                        <Link to="/">
                            <img
                                draggable={false}
                                className="mobile_logo_img"
                                src="../images/kurakoo-logo.png"
                                alt="mobile_logo_img"
                            ></img>
                        </Link>
                    )}

                    {/* Form to take input */}
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
                    <div className="app">
                        <div className="bg"></div>
                        <form className="form1">
                            <header>
                                <img
                                    src="./images/favicon.png"
                                    className="logo"
                                />
                            </header>
                            <div className="inputs">
                                <input
                                    type="text"
                                    placeholder="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type={PasswordInputType}
                                    placeholder="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <span className="password-toggle-icon-signin">
                                    {ToggleIcon}
                                </span>
                            </div>
                        </form>
                        <footer>
                            <button type="submit" onClick={userLogin}>
                                Continue
                            </button>
                            <p className="para">
                                Don't have an account?{" "}
                                <Link to="/signup">Sign Up</Link>
                            </p>
                        </footer>
                    </div>
                </Grid>
            </Grid>
            </div>
    );
};

export default SignIn;
