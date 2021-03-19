import React from "react";
import './homepage.css';
import {Link} from "react-router-dom";
import logo from "../../components/kurakoo-logo.png";

function homepage() {
  return <LandingPageorange {...landingPageorangeData} />;
}

export default homepage;


function LandingPageorange(props) {
  const { vector, vector2, vector3, text1, vector4, place, explore, image3, vector5, signIn, signUp } = props;

  return (
    <div className="landing-page-orange">
      <div className="landing-page-orange">
        <div className="overlap-group">
          <div className="group-7">
            <img className="vector" src={vector} />
            <div className="overlap-group1">
              <img className="vector-1" src={vector2} />
              <img className="vector-2" src={vector3} />
            </div>
          </div>
          <h1 className="text-1 montserrat-bold-black-24px">{text1}</h1>
          <img className="vector-3" src={logo} />
          <div className="place montserrat-bold-white-24px">{place}</div>
          <Link to="/notyet"><div className="group-9">
            <div className="overlap-group2">
              <div className="explore montserrat-bold-white-24px">{explore}</div>
            </div>
          </div></Link>
          <img className="image-3" src={image3} />
          <img className="vector-4" src={vector5} />
        </div>
        <Link to="/signin"><div className="sign-in montserrat-bold-white-24px">{signIn}</div></Link>
        <Link to="/signup"><div className="group-8">
          <div className="overlap-group3">
            <div className="sign-up montserrat-bold-white-24px">{signUp}</div>
            <div className="rectangle-33 border-class-1"></div>
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
};

