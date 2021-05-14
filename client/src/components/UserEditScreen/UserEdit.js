import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions";
import "../SignUp/SignUp.css";
import { useMediaQuery } from "react-responsive";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Meta from "../../helpers/Meta";
import usePasswordToggle from "../../hooks/usePasswordToggle";
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
    const [ComfirmPassword, setConfirmPassword] = useState("");

    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const userSignup = (e) => {
        e.preventDefault();

        dispatch(
            signup({
                firstName,
                lastName,
                              email,
                password,
                
            })
        );
    };

    if (auth.authenticate) {
        return <Redirect to={"/"} />;
    }

    if (user.loading) {
        return <p>Loading...!</p>;
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
                     <h1>Update</h1>
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
                                
                            </div>
                        </div>
                        <div className="group">
                            <div className="col-1">
                                <label for="password">Confirm Password</label>
                            </div>
                            <div className="colm-2">
                                <input
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    type={PasswordInputType}
                                    value={ComfirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    required
                                />
                                
                            </div>
                        </div>
                        
                        <input
                            type="submit"
                            className="submit"
                            value="Update"
                            onClick={userSignup}
                        />
                        <br />
                        
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default SignUp;
