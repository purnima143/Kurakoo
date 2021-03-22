import React from 'react';
import './NotificationPage.css';
import Logo from '../kurakoo-logo.png';
import Navbar from '../navbar/Navbar';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';

function NotificationPage(){
    return (
        <div>
            <Navbar></Navbar>
            <br/><br/><br/><br/><br/><br/>
            <div id = "notification-container">
                <div className ="greet-msg">
                    <div className ="img-div">

                    </div>
                    <div className = "content-div">
                        <div className = "content-head">
                            <h1>👋 Good Evening, Aniket </h1>
                        </div>
                        <br></br>
                        <div>
                            <p>
                                You have 3 new messages, 1 new follower and you are accepted as a member at The Heritage
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationPage;

const data = {
    currentuser: {
        name: "Purnima",
        msgCount: 3,
        followersCount: 1
    },

    user1:{
        username: "Emma Watson",
    }
}