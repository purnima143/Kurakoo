import React,{useState,useEffect} from "react";
import './homepage.css';
import {Link} from "react-router-dom";
import logo from "../../components/kurakoo-logo.png";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

function homepage() {
  return <LandingPageorange {...landingPageorangeData} />;
}

export default homepage;

function LandingPageorange(props) {
  const getMode = ()=>{
    return JSON.parse(localStorage.getItem("mode")) || false
  }
const [dark,setmode]=useState(getMode());
useEffect(()=>{
  localStorage.setItem("mode",JSON.stringify(dark))
},[dark])

  const { vector, vector2, vector3, text1, text30, text31, text32, text33, text34,  place, explore, image3, vector5, signIn, signUp, aboutus } = props;

  return (
    <div className={dark ? "landing-page-orange dark-mode":"landing-page-orange"}>
    <div className="landing-page-orange">
      <div className="social">
        <ul>
          <li><a><span>WhatsApp</span><WhatsAppIcon /></a></li>
          <li><a><span>Facebook</span><FacebookIcon /></a></li>
          <li><a><span>Github</span><GitHubIcon /></a></li>
          <li><a><span>Instagram</span><InstagramIcon /></a></li>
          <li><a><span>YouTube</span><YouTubeIcon /></a></li>
          <li><a><span>LinkedIn</span><LinkedInIcon /></a></li>
          </ul>
        </div>

        <div className="header">
            <img className="vector-3" src={logo} alt="vector-3" />
            <div className="home">
              <img className="vector-4" src={vector5} alt="vector-4" />
              <div className="place montserrat-bold-white-24px">{place}</div>
            </div>
            <div className="Auth">
            <Link to="/signin"><div className="sign-in montserrat-bold-white-24px">{signIn}</div></Link>
            <Link to="/signup"><div className="sign-up montserrat-bold-white-24px">{signUp}</div></Link>
       <div className="contributor-section">
            <h4 class="title-text30">{text30}</h4>
            <h4 class="title-text31">{text31}</h4>
            <h4 class="title-text32">{text32}</h4>
            <h4 class="title-text33">{text33}</h4>
            <h1 class="title-text34">{text34}</h1>
            <span class="dot" id="dot1"></span><h1 class="contributor" id="name1">Abcd.. Efgh...</h1>
            <span class="dot" id="dot2"></span><h1 class="contributor" id="name2">Abcd.. Efgh.....</h1>
            <span class="dot" id="dot3"></span><h1 class="contributor" id="name3">Abcd.. Efgh.............</h1>
            <span class="dot" id="dot4"></span><h1 class="contributor" id="name4">Abcd... Efgh...</h1>
            <span class="dot" id="dot5"></span><h1 class="contributor" id="name5">Abcd.... Efgh..</h1>
            <span class="dot" id="dot6"></span><h1 class="contributor" id="name6">Abcd....... Efgh....</h1>
            <span class="dot" id="dot7"></span><h1 class="contributor" id="name7">Abcd.. Efgh...</h1>
            <span class="dot" id="dot8"></span><h1 class="contributor" id="name8">Abcd. Efgh...</h1>
            <span class="dot" id="dot9"></span><h1 class="contributor" id="name9">Abcd.. Efg............</h1>
            <span class="dot" id="dot10"></span><h1 class="contributor" id="name10">Abcd... Efgh</h1>
            
            



       </div> 
      <div className="landing-page-orange">
        <div className="overlap-group">
          <div className="group-7">
            <img className="vector" src={vector} alt="vector" />
            <div className="overlap-group1">
              <img className="vector-1" src={vector2} alt="vector-1" />
              <img className="vector-2" src={vector3} alt="vector-2" />
              
            </div>
          </div>
          <h1 className="text-1 montserrat-bold-black-24px">{text1}</h1>
          <img className="vector-3" src={logo} alt="vector-3" />
          <div className="place montserrat-bold-white-24px" id="switchtoggle">
          <label className="switch">
              <input 
              type="checkbox"
              checked={dark}
              onChange={()=>setmode(!dark)}
              />
              <span className="slider round" />
            </label>
              <h1 className="darkorlight">{dark? "Dark":"Light"}</h1>
          </div>
          
          <div className="place montserrat-bold-white-24px">{place}</div>
          <Link to="/notyet"><div className="group-9">
            <div className="overlap-group2">
              <div className="explore montserrat-bold-white-24px"><span>{explore}</span></div>
            </div>
          </div></Link>
          <img className="image-3" src={image3} alt="img-3" />
          <img className="vector-4" src={vector5} alt="vector-4" />
        </div>
        {/* <Link to="/signin"><div className="sign-in montserrat-bold-white-24px navbar">{signIn}</div></Link> */}
        
        <Link to="/aboutus"><div className="aboutus montserrat-bold-white-24px navbar">{aboutus}</div></Link>
        <Link to="/signin"><div className="sign-in montserrat-bold-white-24px navbar">{signIn}</div></Link>
        <Link to="/signup"><div className="group-8">
          <div className="overlap-group3 navbar">
            <div className="sign-up montserrat-bold-white-24px navbar">{signUp}</div>
           
            {/* <div className="rectangle-33 border-class-1"></div> */}
          </div>
        </div></Link>
        
      </div>
    </div>
  
  );
}
const landingPageorangeData = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/line-1@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector-8@1x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector-9@1x.svg",
    text1: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Nulla tempor augue imperdiet faucibus interdum.<br />Tincidunt diam vivamus convallis fames vel mattis.<br />Sit pretium nisl ullamcorper id elit velit dolor,</>,
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector@2x.svg",
    place: "Home",
    explore: "Explore",
    image3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/image-3@1x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector-1@2x.svg",
    signIn: "Sign In",
    signUp: "Sign Up",
    aboutus: "about us",
    text30: <></>,
    text31: <></>,
    text32: <></>,
    text33: <></>,
    text34: <>OUR CONTRIBUTORS</>,
};