import React, { useState } from "react";
import "./feedComponent.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import InsertCommentOutlinedIcon from "@material-ui/icons/InsertCommentOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import AnswerQuestion from '../Answer/Answer';

import {Box, Popover,Button, Card, CardContent,CardActions,TextField} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';


const useStyles = makeStyles({
    root: {
        width: "18px",
        padding: "4px 18px",
        margin: "0px"
    },
    paper: {
        position: 'absolute',
        top: 45,
        left: 350,
        width: 752,
        height: 512,
        border: '2px solid #000',
        // boxShadow: theme.shadows[5],
  
      },

      commentArea:{
        width: "545px"
        //   marginLeft:"780px"
      },
      typography: {
        //padding: theme.spacing(2),
      },
      divArea:{
        width: "596px",
        height: "66px",
    
      },
      pop:{
        //   marginLeft:"120px"
        position:"absolute",
        left:"750px"
      },
      card:{
          width:"800px",
          backgroundColor:"#BDEEBE"
      },
      button:{
          marginLeft:"15px"
      }

      bookMarkIcon:{
        marginLeft:"680px",
       marginBottom:"9px"
      }
      

});



function Feed({ username, question, img, profession, answer }) {
    const [likeDislike, setLikeDislike] = useState([false, false]);
    const [mark,setMark] = useState([false, false]);
    const [openPopup, setOpenPopup] = useState(false);

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    const handleOpen = () => {
        setOpenPopup(true);
      };

      const handleCloseModal = () => {
        setOpenPopup(false);
      }

    
    return (
        <div>
            <section className="feed-component">
                <div className="bio-div">
                    <img src={img} id="profile-pic" alt="img" />
                    <div id="bio-details">
                        <h4 id="username">{username}</h4>
                        <small>{profession} </small>
                       
                        <span
                   
                        onClick={() =>
                           mark[0]
                                ? setMark([false, false])
                                : setMark([true, false])
                        }
                    >
                        {mark[0] ? (
                            <BookmarkIcon className={classes.bookMarkIcon} />
                        ) : (
                            <BookmarkBorderIcon className={classes.bookMarkIcon} />
                        )}
                    </span>
                    </div>
                </div>
                <hr />
                <div id="feed-content">
                    <h4 id="question">{question}</h4>
                    <p id="answer">{answer}</p>
                </div>
                <hr />
                <div id="response-bar">
                    <button
                        class="button"
                        onClick={() =>
                            likeDislike[0]
                                ? setLikeDislike([false, false])
                                : setLikeDislike([false, true])
                        }
                    >
                        {likeDislike[0] ? (
                            <ThumbUpIcon  />
                        ) : (
                            <ThumbUpOutlinedIcon />
                        )}
                    </button>
                    <button
                        class="button"
                        onClick={() =>
                            likeDislike[1]
                                ? setLikeDislike([false, false])
                                : setLikeDislike([false, true])
                        }
                    >
                        {likeDislike[1] ? (
                            <ThumbDownIcon  />
                        ) : (
                            <ThumbDownOutlinedIcon  />
                        )}
                    </button>
                    <button class="button" onClick={handleClick}>
                        <InsertCommentOutlinedIcon  />
                    </button>

                    <button class="ans_button" onClick={handleOpen}>Answer</button>
                </div>
            </section>
            <Modal
            open ={openPopup}
            onClose={handleCloseModal}>
                <div  className={classes.paper}>
                <AnswerQuestion/>
                </div>

            </Modal>
        <Popover
        className={classes.pop}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
    {/* <Box className={classes.divArea}>
        <Typography className={classes.typography}>
         
                <TextareaAutosize className={classes.commentArea} aria-label="empty textarea" placeholder="Empty" />
                <Button variant="contained" color="secondary">
 Submit
</Button>
                </Typography>  
                </Box> */}

                <div>
    <Card className={classes.card}>
    <CardContent>
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={2}
          fullWidth
          variant="outlined"
        />
      </CardContent>
    <CardActions>
        <Button size="small" variant="contained" color="secondary" className={classes.button}>Submit</Button>
        </CardActions>
    </Card>

                </div>
          
      </Popover>
        </div>
    );
}

export default Feed;
