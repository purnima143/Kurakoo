import React from "react";
import "./Homepage.css";
import logo from "../images/kurakoo-logo.png";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Homepage = () => {
    return (
        <div className="LandingPage">
            <img
                src={require("../../Homepage/main.png")}
                alt="main"
                className="mainvector"
            />
            <div className="navbar">
                <img src={logo} id="logo" alt="" />
                <div className="links">
                    <Link to="/signin" className="login">
                        Login
                    </Link>
                    <Link to="/signup" className="signup">
                        SignUp
                    </Link>
                </div>
            </div>
            <div className="content">
                <h2>Welcome To</h2>
                <h1>Kurakoo</h1>
                <h4>Get your answers</h4>
                <h3>
                    Kurakoo to ask questions from a community of people who
                    answer them. Kurakoo is especially for the school-college
                    students, people from around the different colleges visit.
                </h3>
            </div>
            <div className="social">
                <ul>
                    <li>
                        <a href="/#">
                            <span>WhatsApp</span>
                            <WhatsAppIcon />
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span>Facebook</span>
                            <FacebookIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/purnima143/Kurakoo">
                            <span>Github</span>
                            <GitHubIcon />
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span>Instagram</span>
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <span>LinkedIn</span>
                            <LinkedInIcon />
                        </a>
                    </li>
                </ul>
            </div>

            <img
                src={require("../../Homepage/leaf1.png")}
                alt="leaf1"
                className="leaf1"
            />
            <div className="Vision">
                <h1 className="head">
                    <span>Our</span> Vision
                </h1>
                <h5>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquam quasi ipsum{" "}
                </h5>
            </div>
            <div className="VisionCards">
                <div className="card">
                    <img src={require("../../Homepage/01.png")} alt="" />
                    <h3>Share and Grow</h3>
                    <h5>
                        As we grow, we will be able to provide larger and larger
                        audiences to writers, cover more and more topics, and
                        have greater and greater impact on the world.
                    </h5>
                </div>
                <div className="card">
                    <img src={require("../../Homepage/02.png")} alt="" />
                    <h3>Create Networks</h3>
                    <h5>
                        We want you to build genuine relationships with your
                        friends and communities close to home or around the
                        world.
                    </h5>
                </div>
                <div className="card">
                    <img src={require("../../Homepage/03.png")} alt="" />
                    <h3>Everything in One</h3>
                    <h5>
                        Original, reliable, playful, and relatable. These are
                        the values that connect our users and our employees at
                        Discord.
                    </h5>
                </div>
            </div>
            <div className="aboutus">
                <img
                    src={require("../../Homepage/about.png")}
                    className="aboutimage"
                    alt=""
                />
                <div className="about-content">
                    <h1 className="head">
                        <span>About</span> Us
                    </h1>
                    <p>
                        In the majority of the colleges and universities across
                        India, thousands of students have many doubts and
                        queries from "Which branch to choose?" to "How to crack
                        interviews?". Kurakoo is a one-stop solution for all
                        these problems. It serves as a platform where students
                        can drop in their questions for the public view and any
                        person from this vibrant community can help by providing
                        answers.
                    </p>
                    <Link to="/team" className="signup">
                        Team
                    </Link>
                </div>
            </div>
            <div className="reach">
                <h1 className="head">
                    <span>Our </span>Reach
                </h1>
                <div className="reach-cards">
                    <div className="card">
                        <img
                            src={require("../../Homepage/student.png")}
                            alt=""
                        />
                        <h2>
                            <CountUp end={30} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor
                                        onChange={start}
                                        delayedCall
                                    >
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            +
                        </h2>
                        <h5>Contributors</h5>
                    </div>
                    <div className="card">
                        <img
                            src={require("../../Homepage/calendar.png")}
                            alt=""
                        />
                        <h2 className="red">
                            <CountUp end={260} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor
                                        onChange={start}
                                        delayedCall
                                    >
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            +
                        </h2>
                        <h5>Commits</h5>
                    </div>
                    <div className="card">
                        <img
                            src={require("../../Homepage/leadership.png")}
                            alt=""
                        />
                        <h2 className="red">
                            <CountUp end={60} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor
                                        onChange={start}
                                        delayedCall
                                    >
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            +
                        </h2>
                        <h5 className>Stars</h5>
                    </div>
                </div>
                <img
                    src={require("../../Homepage/leaf2.png")}
                    className="leaf2"
                    alt=""
                />
            </div>
        </div>
    );
};
export default Homepage;
