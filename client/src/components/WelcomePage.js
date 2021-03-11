import React, { useState } from "react";
import './welcomepagestyle.css'
import adminpic from './admin.png'


function WelcomePage() {

  window.onscroll = function () { myFunction() };

  var sty1 = {
    FontColor: "black",
    opacity: "0.8",


  }
  var sty2 = {
    position: "fixed",
    width: "100%",
    backgroundColor: "black"


  }
  const [sty, setsty] = useState(sty1);




  function myFunction() {
    if (window.pageYOffset === 0)
      setsty(sty1);
    else
      setsty(sty2);
  }

  return (

    <div>
      <div id="navbar" style={sty}>
        <a href="#home" class="tx" >?Kurakoo</a>
        <a href="#about" class="tx">About</a>
        <a href="#contact" class="tx">Contact Us</a>
      </div>


      <div id="home" class="content" style={{ padding: "10% 20% 20% 20%" }}>

        <div class="container" style={{ textAlign: "center" }}>

          <h1 class="text-light" style={{ fontSize: "1000%" }}>?Kurakoo</h1>

          <h1 class="text-light">ASK  ~ <h1 class="text-light" style={{ display: "inline", fontFamily: "cursive" }}>Always seek knowledge!</h1></h1>


          <a href="javascript:void(0)" class="btn btn-primary btn-xl" style={{ background: "none", fontSize: "200%" }}>Login</a>
          <a style={{ fontSize: "250%", paddingLeft: "1%", paddingRight: "1%", color: "white" }}>|</a>
          <a href="javascript:void(0)" class="btn btn-primary btn-xl" style={{ background: "none", fontSize: "200%" }}>Sign Up</a>


        </div>

      </div>

      <div id="about" class="content" style={{ padding: "10% 0% 10% 0%" }}>
        <div id="aboutStyle">

          <div class="row" style={{ padding: "5% 10% 5% 10%" }}>
            <div class="col-6 ">
              <img src={adminpic} />
            </div>
            <div class="col-6 " style={{ borderLeft: "3px solid white" }}>
              <h1>
                " Lorem ipsum dolor Inciderint efficiantur his       ... SOME WORD BY ADMIN ...      Lorem ipsum dolor Inciderint efficiantur or Inciderint efficiant".
          </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" style={{ textAlign: "center", padding: "10% 10% 5% 10%" }}>
        <div class="row">
          <div class="col-12" style={{ color: "white" }}>
            <h1 class="margin-top-0 wow fadeIn">Get in Touch</h1>
            <hr class="primary" />
            <h3>We love feedback. Fill out the form below and we'll get back to you as soon as possible.</h3>
          </div>
          <div class="col-12">

            <form class="contact-form row">
              <div class="col-md-4">
                <label></label>
                <input type="text" class="form-control" placeholder="Name" />
              </div>
              <div class="col-md-4">
                <label></label>
                <input type="text" class="form-control" placeholder="Email" />
              </div>
              <div class="col-md-4">
                <label></label>
                <input type="text" class="form-control" placeholder="Phone" />
              </div>
              <div class="col-md-12">
                <label></label>
                <textarea class="form-control" rows="9" placeholder="Your message here.."></textarea>
              </div>
              <div class="col-12">
                <label></label>
                <button type="button" data-toggle="modal" data-target="#alertModal" class="btn btn-primary btn-block btn-lg">Send <i class="ion-android-arrow-forward"></i></button>
              </div>
            </form>
            <div class="container" style={{ textAlign: "center", padding: "0 30% 0 30% " }}>
              <div class="row icons">
                <div class="col-3">
                  <a href="javascript:void(0)" ><i class="fab fa-github icon"></i></a><br></br>

                </div>
                <div class="col-3">
                  <a href="javascript:void(0)" ><i class="far fa-file icon"></i></a><br></br>

                </div>
                <div class="col-3">
                  <a href="javascript:void(0)" ><i class="fas fa-paper-plane icon"></i></a><br></br>

                </div>
                <div class="col-3">
                  <a href="javascript:void(0)" ><i class="fab fa-linkedin icon"></i></a><br></br>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>



    </div>

  )

}


export default WelcomePage;