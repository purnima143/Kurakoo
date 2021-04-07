import React from "react";
import './homepage.css';
import {Link} from "react-router-dom";
import logo from "../../components/kurakoo-logo.png";

function homepage() {
  return <LandingPageorange {...landingPageorangeData} />;
}

export default homepage;


function LandingPageorange(props) {
  const { vector, vector2, vector3, text1,  place, explore, image3, vector5, signIn, signUp } = props;

  return (
    <div className="landing-page-orange">
        <div className="header">
            <img className="vector-3" src={logo} alt="vector-3" />
            <div className="home">
              <img className="vector-4" src={vector5} alt="vector-4" />
              <div className="place montserrat-bold-white-24px">{place}</div>
            </div>
            <div className="Auth">
            <Link to="/signin"><div className="sign-in montserrat-bold-white-24px">{signIn}</div></Link>
            <Link to="/signup"><div className="sign-up montserrat-bold-white-24px">{signUp}</div></Link>
            </div>
        </div>
              <img className="vec" src={vector2} alt="vector-1" />
              <img className="vec" src={vector3} alt="vector-2" />
        <div className="BigBox">
          <div className="Box">
            <h1 className="text-1 montserrat-bold-black-24px">{text1}</h1>
            <Link to="/notyet"><div className="explore montserrat-bold-white-24px">{explore}</div></Link>
          </div>
          <div className="Question">
            <img className="image-3" src={image3} alt="img-3" />
          </div>
        </div>
    </div>
  );
}
const landingPageorangeData = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/60431c4b77eb01b4ea3292d5/img/line-1@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector-8@1x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector-9@1x.svg",
    text1: <>Kurakoo is a website where you can make friends (safely) and learn more from people you trust.<br/> It is an online community of people providing answers to questions, just like 'Quora'. Kurakoo is specially catered to meet the needs of school/college students. Students from different colleges/universities around the world visit Kurakoo to ask questions to a community of people who are always ready to answer them.</>,
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector@2x.svg",
    place: "Home",
    explore: "Explore",
    image3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/image-3@1x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/vector-1@2x.svg",
    signIn: "Sign In",
    signUp: "Sign Up",
};

