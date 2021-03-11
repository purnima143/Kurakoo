import React from "react";
import './feedComponent.css';
import { AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike, AiOutlineComment } from "react-icons/ai";

function Feed(props) {
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
            <button class = "button">
              <span><AiOutlineLike /></span>
            </button>
            <button class = "button"><AiOutlineDislike /></button>
            <button class = "button"><AiOutlineComment /></button>
          </div>
        </section>
      </div>
    );
  }
  
  export default Feed;