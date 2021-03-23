import React from 'react';
import './NotificationComp.css';

function Notification({image}){

    return (
        <>
            <div className = "notification">
                <div className ="img-div">
                    <img className = "img" src = { image } alt = "alt" />
                </div>
                <div className = "content-div">
                    <div className = "content-head">
                        <h1> You have recieved 2 messages from xyz </h1>
                    </div>
                    <hr/>
                    <div>
                        <p className = "content-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;