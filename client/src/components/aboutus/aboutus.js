import React from "react";
import "./aboutus.css";

function aboutus() {
    return <LandingPageorange {...landingPageorangeData} />;
}

export default aboutus;

function LandingPageorange(props) {
    const { image3, text10, text2, text3, text4, text5, text6 } = props;
    return (
        <div className="grouping10">
            <img className="image-3" src={image3} alt="img-3" />
            <img
                draggable={false}
                className="mobile_logo_img"
                src="./images/kurakoo-logo.png"
                alt="mobile_logo_img"
            ></img>
            <h1 className="text-10 ">{text10}</h1>
            <h2 className="text-2 montserrat-bold-black-24px">{text2}</h2>
            <h3 class="title-text1">{text3}</h3>
            <h4 class="title-text2">{text4}</h4>
            <h4 class="title-text3">{text5}</h4>
            <h4 class="text-6 ">{text6}</h4>
        </div>
    );
}
const landingPageorangeData = {
    image3:
        "https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/6053337a80ac5a0028404f78/img/image-3@1x.svg",
    text10: <>WHO ARE WE?</>,
    text2: (
        <>
            "KURAKOO" <br />
            <br />A world of pleasure and pain. Something tO share with our
            dearest ones. Its a big growing family with the moto to shine and
            improve together.
            <br /> <br />
            -A place to share your knowledge and doubts.
            <br />
            <br />
            -We guide you and let you guide others.
        </>
    ),
    text3: <></>,
    text4: <></>,
    text5: <></>,
    text6: <>"NOW YOUR LEARNING IS IN YOUR HANDS!" </>
};
