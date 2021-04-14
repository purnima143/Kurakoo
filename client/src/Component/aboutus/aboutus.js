import React from "react";
import './aboutus.css';


function aboutus() {
        return <LandingPageorange {...landingPageorangeData} />;
      }

export default aboutus;

function LandingPageorange(props) {
  const {image3, text10, text2, text3, text4, text5} = props;
  return (
      
      <div className="grouping10">
          <img className="image-3" src={image3} alt="img-3" />
          <img draggable={false} className="mobile_logo_img" src="./images/kurakoo-logo.png" alt="mobile_logo_img"></img>
          <h1 className="text-10 ">{text10}</h1>
          <h2 className="text-2 montserrat-bold-black-24px">{text2}</h2>
          <h3 class="title-text1">{text3}</h3>
          <h4 class="title-text2">{text4}</h4>
          <h4 class="title-text3">{text5}</h4>
          
      </div>
      
    
    
  );
}
const landingPageorangeData = {
image3: "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/image-3@1x.svg",
text10: <>WHO ARE WE?</>, 
text2: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Nulla tempor augue imperdiet faucibus interdum.<br />Tincidunt diam vivamus convallis fames vel mattis.<br />Sit pretium nisl ullamcorper id elit velit dolor,</>, 
text3: <></>,  
text4: <></>,
text5: <></>,
};
