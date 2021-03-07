import React from 'react';
import './feedStyles.css';
import Feed from '../../components/feedContent/feed';
import profileImg from './images/imgAvatar.png';

function FeedPage() {

    var feedData = [
      {
        userName: "userName1",
        question: "Which Engineering colleges are good in Mumbai?"
      },
      {
        userName: "userName2",
        question: "Which Engineering colleges are good in Mumbai, and what is the admission procedure or requirement for these colleges?"
      },
      {
        userName: "userName3",
        question: "Which Engineering colleges are good in Mumbai?"
      },
      {
        userName: "userName4",
        question: "Which Engineering colleges are good in Mumbai, and what is the admission procedure or requirement for these colleges?"
      },
    ];

    var connect = [
      {
        userName: "user1", 
        profilePic: ""
      }, 
      {
        userName: "userName2", 
        profilePic: ""
      }, 
      {
        userName: "aniketbagayatkar",
        profilePic: "/"
      }, 
      {
        userName: "user4",
        profilePic: "/"
      }, 
      {
        userName: "user5",
        profilePic: "/"
      }
    ];

    return (
      <div>
        <nav>
          <h1 style = {{color: "white"}}>Nav heading</h1>
        
        </nav>
        <div className = "side-bar-left">
          <h3 id = "category-heading">Categories</h3>
          <hr style = {{padding: "1px 0px 0px 0px", backgroundColor: "black", border: "0rem", width: "60%", margin: "0rem auto", marginBottom: "0.5rem"}}></hr>
          <ul className = "sidebar-left-categories">
            <li className = "sidebar-left-items">
              <a href = "/">Science</a>
            </li>
            <li className = "sidebar-left-items">
              <a href = "/">Sports</a>
            </li>
            <li className = "sidebar-left-items">
              <a href = "/">Coding</a>
            </li>
            <li className = "sidebar-left-items">
              <a href = "/">Web development</a>
            </li>
            <li className = "sidebar-left-items">
              <a href = "/">Placement</a>
            </li>
          </ul>
        </div>

        <div className = "side-bar-right">
          <h3 id = "connect-heading">Connect</h3>
          <hr style = {{padding: "1px 0px 0px 0px", backgroundColor: "black", border: "0rem", width: "60%", margin: "0rem auto", marginBottom: "0.5rem"}}></hr>
          <ul className = "sidebar-right-categories">
            {connect.map((item, index) => {
              return (
                <li>
                  <a href = "/"><img src = { profileImg } alt = "alternate" className="profile-pic"/>{ item.userName }</a>
                </li>
              );
            })}
            
          </ul>
        </div>

        {feedData.map((item, index) => {
          return (
            <Feed username = { item.userName } question = { item.question } />
          )
        })}

        

      </div>
    );
  }
  export default FeedPage;