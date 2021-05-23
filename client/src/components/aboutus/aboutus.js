import React from "react";
import "./aboutus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/footer'

function aboutus() {
    return (<div><Navbar/><section class="text-center about">
        
    <h1>WHO ARE WE ?</h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
          <span class="fa fa-group"></span>
          <h2>Grow Together</h2>
          <p class="lead">A world of pleasure and pain. Something to share with our
            dearest ones. Its a big growing family with the moto to shine and
            improve together.</p>
        </div>
        <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
          <span class="fa fa-bullseye"></span>
          <h2>Our Mission</h2>
          <p class="lead"> Create a thriving community of engaged people, who share their time and knowledge</p></div>
        <div class="clearfix visible-md-block visible-sm-block"></div>
        <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
          <span class="fa fa-info"></span>
          <h2>Everything in One</h2>
          <p class="lead">Kurakoo in an online community of people providing answers to questions just like Quora site. Kurakoo is especially for scool college-students</p>
        </div>
        
      </div>
      
    </div>
  </section>
  <Footer/>
  </div>)
}

export default aboutus;

