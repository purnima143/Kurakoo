import React from 'react';
import './NotificationPage.css';
import Logo from '../kurakoo-logo.png';
import image from './images/Vector.png';
import Navbar from '../navbar/Navbar';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';

function getTime(){
    var hours = new Date().getHours();
    var time;
    if (hours >= 5 && hours < 12){
        time = "Morning";
    }
    else if (hours >= 12 && hours < 18){
        time = "Afternoon";
    }
    else{
        time = "Evening";
    }
    return (time);
}

function NotificationPage(){
    return (
        <div>
            <Navbar></Navbar>
            <br/><br/><br/><br/><br/><br/>
            <div id = "notification-container">
                <div className ="greet-msg">
                    <div className ="img-div">
                        <img className = "img" src = { image } alt = "alt" />
                    </div>
                    <div className = "content-div">
                        <div className = "content-head">
                            <h1>👋 Good { getTime() }, {currentuser.name} </h1>
                        </div>
                        <br></br>
                        <div>
                            <p className = "content-body">
                                You have {currentuser.msgCount} new messages, 1 new follower and you are accepted as a member at The Heritage
                            </p>
                        </div>
                    </div>
                </div>
                <div id = "notification-body">
                    
                </div>
            </div>
        </div>
    );
}

export default NotificationPage;

const currentuser = {
    name: "Purnima",
    msgCount: 3,
    followersCount: 1
};

const data = [
    {
        username: "Emma Watson",
    },
];