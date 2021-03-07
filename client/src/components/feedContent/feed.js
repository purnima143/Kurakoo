import React from "react";
import './feed_styles.css';

function Feed(props) {
    return (
      <div>
        <section className = "feed-content">
          <div className = "">
            { props.username }
          </div>
          <div>
            <p>
              { props.question }
            </p>
          </div>
        </section>
      </div>
    );
  }
  
  export default Feed;