import React, { Component } from "react";
import "./NavBar.css";
import { SearchBar } from '../searchbar/SearchBar';
import Logo from '../kurakoo-logo.png';

export default function Navbar() {

    return (
        <div>
            <nav className = "Nav">
                <div>
                    <img id = "logo" src= {Logo} alt = "alt"/>
                </div>
                <div className = "nav-options">
                    <div className = "option">
                        feed
                    </div>
                    <div className = "option">
                        write
                    </div>
                    <div className = "option">
                        <SearchBar/>
                    </div>
                </div>
            </nav>
        </div>
    );
  
}
