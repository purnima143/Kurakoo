import React from 'react';
import './NotificationPage.css';
import Navbar from '../navbar/Navbar';
import Sidebar from './sideBar';
import Notification from './NotficationComp';
import { currentuser, data } from './DummyData';
import Image from './images/Vector.png';


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
            <Navbar />
            <br/><br/><br/><br/><br/><br/>
            <div id = "notification-container">
                <div className ="greet-msg">
                    <div className ="img-div">
                        <img className = "img" src = { Image } alt = "alt" />
                    </div>
                    <div className = "content-div">
                        <div className = "content-head">
                         <h1> <span role="img" aria-label="wave">👋</span>  Good { getTime() }, {currentuser.name} </h1>
                        </div>
                        <br></br>
                        <div>
                            <p className = "content-body">
                                You have {currentuser.msgCount} new messages, 1 new follower and you are accepted as a member at The Heritage
                            </p>
                        </div>
                    </div>
                </div>

                <br/>

                <div className = "notification-body">
                    
                    <div className = "notifications-container">
                        <ul className = "notification-list">
                            {
                                data.map((item, index) =>{
                                    return (
                                        <li>
                                            <Notification {...item} />
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <Sidebar />

                </div>
            </div>
        </div>
    );
}

export default NotificationPage;

