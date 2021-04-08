import React, { useState } from 'react';
import './NotificationComp.css';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
    more: {
        margin: "0rem .5rem",
        position: "relative",
        top: "50%",
        transform: "translateY(-50%) scale(1.4)",
    }
});



function Notification({username, timeStamp, type, read, message, image}){

    const classes = useStyles();
    const [status, setStatus] = useState(read);
    const className = "notification " + ((status)? "": "unread");

    return (
        <>
            <div className = {className} onClick = {() => setStatus(true)} >
                <div className ="img-div">
                    <img className = "img" src = { image } alt = "alt" />
                </div>
                <div className = "content-div">
                    <div className = "content-head-div">
                        <h1 className = "content-head"> You have recieved 2 messages from {username} </h1>
                        <div className = "time-stamp">
                            {timeStamp}
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <p className = "content-body">
                            {message}
                        </p>
                    </div>
                </div>
                <div className = "more">
                    <MoreVertIcon className = { classes.more } />
                </div>
            </div>
        </>
    );
}

export default Notification;