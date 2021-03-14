import React, { Component } from "react";
import { Navbar } from '../navbar/Navbar';
import './FeedPage.css'

export class FeedPage extends Component {

    render() {
      return (
          <div className="Nav">
             <Navbar/>
             <div className="haeder_i">
            
               <img className="header_img" src="./images/Group_5.png" alt="haeder_image"></img>
               
               <img className="header_img1" src="./images/Group_4.png" alt="haeder_image"></img>
          
               <button className="header_btn">Ask a Question</button>
             </div>

          </div>
      );
    }
  }
