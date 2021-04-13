import React from 'react'
import "./Preloader.css";

function Preloader() {
    return (
        <div className="preloader">
            <div className="updown">
                <img src={require('./KURKOO logo.png')} alt="KURKOO Logo" />
                <h1>Kurakoo<span> .</span><span> .</span><span> .</span></h1>
            </div>
        </div>
    );
}

export default Preloader;