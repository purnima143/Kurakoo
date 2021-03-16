import React, { useState } from "react";
import './feedComponent.css';
import { AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike, AiOutlineComment } from "react-icons/ai";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: "18px",
    padding: "4px 18px",
    margin: "0px"
  },
});

function Feed(props) {
  const [likeDislike, setLikeDislike] = useState([false, false]);

    const classes = useStyles();
    return (
      <div>
        <section className = "feed-component">
          <div className = "bio-div">
            <img src = { props.img } id = "profile-pic" alt = "img" />
            <div id = "bio-details">
              <h4 id = "username">{ props.username }</h4>
              <small>{ props.profession }</small>
            </div>
          </div>
          <hr/>
          <div id = "feed-content">
            <h4 id = "question">
              { props.question }
            </h4>
            <p id = "answer">
              { props.answer }
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