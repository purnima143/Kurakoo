import React, { Component } from "react";
import "./NavBar.css";
import { SearchBar } from '../searchbar/SearchBar';


export class Navbar extends Component {

  render() {
    return (
        <div className="Nav">
            <div className="nav1">
                <div id="navbar" className="row">
                    <div className="col col1">
                        <div className="logo_nav">
                            <a href="#home">
                                <img className="logo_kurakoo"  src="./images/kurakoo-logo.png" alt="kurakoo_logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="col col2">
                        <div className="seachbar_nav">
                            <SearchBar />
                        </div>
                    </div>

                    <div class="col col4">
                        <div class="sign_nav">
                            <div className="col profile_div">
                                <img className="profile_img"  src="./images/profile_pic.jpg" alt="progile_image"/>
                            </div>
                            <div className="col btn_div">
                                <button className="sign_in_btn"><b>Sign In</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}