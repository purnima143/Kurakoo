import React from "react";
import './feed_styles.css';

function Feed(props) {
    return (
      <div>
        <section className = "feed-content">
          <div className = "bio-div">
            <img src = { props.img } id = "profile-pic" alt = "img" />
            <div id = "bio-details">
              <h4 id = "username">{ props.username }</h4>
              <small>{ props.profession }</small>
            </div>
          </div>

          <hr/>

          <div id = "q-ans-div">
            <h4 id = "question">
              { props.question }
            </h4>
            <p>
              { props.answer }
            </p>
          </div>
        </section>
      </div>
    );
  }
  
  export default Feed;