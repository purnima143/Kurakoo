import React from "react";
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import logo from "../images/kurakoo-logo.png";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import Footer from "../Footer/footer";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Clockwise from '../Clock/clock';

const successToast = (message) => {
    toast.warning(message, {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });
};
successToast("Great Landing! Create a profile to get started.")
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
                <div className="clock"><Clockwise/></div>
                <div className="links">
                    <Link to="/signin" className="login">
                        Login
                    </Link>
                    <Link to="/signup" className="signup">
                        SignUp
                    </Link>
                </div>
            </div>
            <div className="content" style={{marginLeft:'0rem',marginTop:'12rem'}}>
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
            /><br/>
            <div className='container-fluid'>
      <br />
      <h1 className='mb-3 headercontent'>
      Our <span>Vision</span>
                </h1>
                <h5 style={{marginLeft:'2%'}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                   {" "}
                </h5>
            <br/><br/>
            <div className='row' style={{ justifyContent: 'space-evenly' }}>
        <div className='col-md-3 c2'>
          <div className='text-white mb-3 cards2'>
            <div className='card-body color4'>

                    <img src={require("../../Homepage/01.png")} alt="" className='mx-auto d-block'
/>
<br/>
                    <h3>Share and Grow</h3><br/>
                    <h5>
                        As we grow, we will be able to provide larger and larger
                        audiences to writers, cover more and more topics, and
                        have greater and greater impact on the world.
                    </h5>
                </div>
                </div>
          </div>
          <div className='col-md-3'>
          <div className='text-white mb-3 cards2'>
            <div className='card-body color4'>

                    <img src={require("../../Homepage/02.png")} alt="" className='mx-auto d-block'
/>
<br/>
                    <h3>Create Networks</h3><br/>
                    <h5>
                        We want you to build genuine relationships with your
                        friends and communities close to home or around the
                        world.
                    </h5>
                </div>
                </div></div>
                <div className='col-md-3'>
          <div className='text-white mb-3 cards2'>
            <div className='card-body color4'>

                    <img src={require("../../Homepage/03.png")} alt="" className='mx-auto d-block'
/>
<br/>
                    <h3>Everything in One</h3><br/>
                   
                    <h5>
                        Original, reliable, playful, and relatable. These are
                        the values that connect our users and our employees at
                        Discord.
                    </h5>
                </div>
            </div>
            </div>
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
            <div className='container-fluid'>
        <br />
        <h1 className='text-center mb-3 headercontent'>
          Our <span>Reach</span>
        </h1>
        <br/>

        <div className='row' style={{ justifyContent: 'space-evenly' }}>
          <div className='col-md-3'>
            <div className='text-white mb-3 cards2'>
              <div className='card-body color1'>

                        <img
                            src={require("../../Homepage/student.png")}
                            alt=""
                            className='mx-auto d-block'

                        /><br/>
                        <h2 className='card-title text-center black'>
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
                        <h5 className='text-center'>Contributors</h5>
                    </div>
                    </div></div>
                
          <div className='col-md-3'>
            <div className='text-white mb-3 cards2'>
              <div className='card-body color2'>

                        <img
                            src={require("../../Homepage/calendar.png")}
                            alt=""
                            className='mx-auto d-block'

                        /><br/>
                        <h2 className='card-title text-center black'>

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
                        <h5 className='text-center'>Commits</h5>
                    </div>
                    </div></div>
                    
          <div className='col-md-3'>
            <div className='text-white mb-3 cards2 media'>
              <div className='card-body color3'>

                        <img
                            src={require("../../Homepage/leadership.png")}
                            alt=""
                            className='mx-auto d-block'

                        /><br/>
                        <h2 className='card-title text-center yellow'>

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
                        <h5 className='text-center'>Stars</h5>
                    </div>
                </div>
                </div></div>
                <img
                    src={require("../../Homepage/leaf2.png")}
                    className="leaf2"
                    alt=""
                />
            </div><br/><br/><br/><br/>
            <Footer/>
        </div>
       
    );
};
export default Homepage;
