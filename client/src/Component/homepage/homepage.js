import React, { useState, useEffect } from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import logo from "../../components/kurakoo-logo.png";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
// import Footer from "../Footer/footer";

function homepage() {
    return <LandingPageorange {...landingPageorangeData} />;
}

export default homepage;

function LandingPageorange(props) {
    const getMode = () => {
        return JSON.parse(localStorage.getItem("mode")) || false;
    };
    const [dark, setmode] = useState(getMode());
    useEffect(() => {
        localStorage.setItem("mode", JSON.stringify(dark));
    }, [dark]);

    const {
        vector,
        vector2,
        vector3,
        text1,
        text30,
        text31,
        text32,
        text33,
        text34,
        place,
        explore,
        image3,
        vector5,
        signIn,
        signUp,
        aboutus
    } = props;

    return (
        <div>
      <div className={
        dark ? "landingPage dark-mode" : "landingPage"
      }>
        <div className="social">
          <ul>
            <li>
              <a>
                <span>WhatsApp</span>
                <WhatsAppIcon />
              </a>
            </li>
            <li>
              <a>
                <span>Facebook</span>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a>
                <span>Github</span>
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a>
                <span>Instagram</span>
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a>
                <span>YouTube</span>
                <YouTubeIcon />
              </a>
            </li>
            <li>
              <a>
                <span>LinkedIn</span>
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
        {/* <---Navbar--> */}
        <div className="Navbar">
          <img src={logo} id="Kurakoo-logo" />
          <div className="right">
            <label className="switch">
              <input
                type="checkbox" checked={dark} onChange={() => setmode(!dark)} />
              <span className="slider round" />
            </label>
            <h1 className="darkorlight">
              {dark ? "Dark" : "Light"}
            </h1>
            <a href="#" className="active">Home</a>
            <a href="#">About Us</a>
            <a href="#">Sign In</a>
            <a href="#" className="signUp">Sign Up</a>

          </div>
        </div>
        {/* image vectors */}
        <img class="vector-1" src="https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector-8@1x.svg" alt="vector-1" />
        <img class="vector-2" src="https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector-9@1x.svg" alt="vector-2" />
        <img class="image-3" src="https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/image-3@1x.svg" alt="img-3"></img>
        {/* main-content */}
        <h1 className="main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla tempor augue imperdiet faucibus interdum.
        Tincidunt diam vivamus convallis fames vel mattis.
        Sit pretium nisl ullamcorper id elit velit dolor,</h1>
        {/* Explore */}
        <button className="explore"><a>Explore</a></button>
      </div>
    </div>
    );
}
const landingPageorangeData = {
    vector:
        "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/line-1@2x.png",
    vector2:
        "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector-8@1x.svg",
    vector3:
        "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector-9@1x.svg",
    text1: (
        <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Nulla tempor augue imperdiet faucibus interdum.
            <br />
            Tincidunt diam vivamus convallis fames vel mattis.
            <br />
            Sit pretium nisl ullamcorper id elit velit dolor,
        </>
    ),
    vector4:
        "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector@2x.svg",
    place: "Home",
    explore: "Explore",
    image3:
        "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/image-3@1x.svg",
    vector5:
        "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector-1@2x.svg",
    signIn: "Sign In",
    signUp: "Sign Up",
    aboutus: "about us",
    text30: <></>,
    text31: <></>,
    text32: <></>,
    text33: <></>,
    text34: <>OUR CONTRIBUTORS</>
};
