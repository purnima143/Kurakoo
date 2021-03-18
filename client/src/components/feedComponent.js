import React, { useState } from "react";
import './feedComponent.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: "18px",
    padding: "4px 18px",
    margin: "0px"
  },
});

function Feed({ username, question, img, profession, answer }) {
  const [likeDislike, setLikeDislike] = useState([false, false]);

    const classes = useStyles();
    return (
      <div>
        <section className = "feed-component">
          <div className = "bio-div">
            <img src = { img } id = "profile-pic" alt = "img" />
            <div id = "bio-details">
              <h4 id = "username">{ username }</h4>
              <small>{ profession }</small>
            </div>
          </div>
          <hr/>
          <div id = "feed-content">
            <h4 id = "question">
              { question }
            </h4>
            <p id = "answer">
              { answer }
            </p>
          </div>
          <hr/>
          <div id = "response-bar">
            <button class = "button" onClick = {() => likeDislike[0]?(setLikeDislike([false, false])):(setLikeDislike([true, false]))}>
              {(likeDislike[0])?
              (< ThumbUpIcon className={classes.root} />):
              (< ThumbUpOutlinedIcon className={classes.root} />)
              }
            </button>
            <button class = "button" onClick = {() => likeDislike[1]?(setLikeDislike([false, false])):(setLikeDislike([false, true]))}>
              {(likeDislike[1])?
              (<ThumbDownIcon className={classes.root}/>):
              (< ThumbDownOutlinedIcon className={classes.root} />)
              }
              </button>
            <button class = "button">
              <InsertCommentOutlinedIcon className={classes.root}/></button>
          </div>
        </section>
      </div>
    );
  }
  
  export default Feed;