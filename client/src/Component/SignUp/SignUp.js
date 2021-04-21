import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions/user.constants";
import "./SignUp.css";
import { useMediaQuery } from "react-responsive";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const initialState = {
    name: "",
    email: "",
    password: "",
    course: "",
    year: 2021,
    college: ""
};
const SignUp = () => {
    //STATE HOOK FOR INPUT DETAILS
    const [formData, setFormData] = useState(initialState);

    //MAKING CHANGE IN STATE VALUES FROM USER INPUT
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const history = useHistory();

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

        const user = {
            firstName,
            lastName,
            userName,
            email,
            password,
            course,
            year,
            collegeName,
            contactNumber
        };
        dispatch(signup(user));
    };

    if (auth.authenticate) {
        return <Redirect to={"/"} />;
    }

    if (user.loading) {
        return <p>Loading...!</p>;
    }

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
    //TOAST TO DISPLAY FOR SUCCESSFULL SIGNUP
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
        if (formData.name !== "") {
            if (formData.email !== "") {
                // eslint-disable-next-line
                const re = /^(([^<>()[\]\\.,;:"\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(formData.email)) {
                    if (formData.password !== "") {
                        if (formData.course !== "") {
                            if (formData.year !== "") {
                                if (formData.college !== "") {
                                    // If signup process is successfull via an api then
                                    // we will show a toast and redirect the user in a .then() block
                                    successToast("Signup successfull");
                                    history.push("/");
                                } else {
                                    errorToast("Please enter college name");
                                }
                            } else {
                                errorToast("Please enter year");
                            }
                        } else {
                            errorToast("Please enter course name");
                        }
                    } else {
                        errorToast("Please enter password");
                    }
                } else {
                    errorToast("Invalid email id");
                }
            } else {
                errorToast("Please enter email");
            }
        } else {
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
                <label for="show" class="title">
                    sign up<i class="flag left"></i>
                    <i class="flag right"></i>
                </label>
                <form className="form" onSubmit={userSignup}>
                    <div className="group">
                        <div className="col-1">
                            <label for="name">First Name</label>
                        </div>
                        <div class="col-2">
                            <input
                                type="text"
                                placeholder="first name"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="group">
                        <div className="col-1">
                            <label for="name">Last Name</label>
                        </div>
                        <div class="col-2">
                            <input
                                type="text"
                                placeholder="last name"
                                name="lasttName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="group">
                        <div className="col-1">
                            <label for="name">Username</label>
                        </div>
                        <div class="col-2">
                            <input
                                type="text"
                                placeholder="Username"
                                name="name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="group">
                        <div className="col-1">
                            <label for="email">Email</label>
                        </div>
                        <div className="col-2">
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
                        <div className="col-2">
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="group">
                        <div className="col-1">
                            <label for="course">Course</label>
                        </div>
                        <div className="col-2">
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
                        <div className="col-2">
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
                            <label for="college">College Name</label>
                        </div>
                        <div className="col-2">
                            <input
                                type="text"
                                placeholder="college name"
                                name="college"
                                value={collegeName}
                                onChange={(e) => setCollegeName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="group">
                        <div className="col-1">
                            <label for="name">Contact Number</label>
                        </div>
                        <div class="col-2">
                            <input
                                type="text"
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
    );
};

export default SignUp;
