import React, { useState } from "react";
import "./SignIn.css";
import { useMediaQuery } from "react-responsive";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../actions/auth.constants";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
toast.configure();

const SignIn = () => {
    const history = useHistory();
    //CHECK WHETHER THE SCREEN IS SMALL OR NOT
    const isSmallScreen = useMediaQuery({
        query: "(max-width: 959.5px)"
    });

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
        <Grid container>
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
                            src="./images/kurakoo-logo.png"
                            alt="mobile_logo_img"
                        ></img>
                    </Link>
                )}

                {/* Form to take input */}
                <div className="app">
                    <div className="bg"></div>
                    <form className="form1">
                        <header>
                            <img src="./images/favicon.png" className="logo" />
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
                                type="password"
                                placeholder="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
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
    );
};

export default SignIn;
