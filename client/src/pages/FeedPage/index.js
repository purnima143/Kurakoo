import React from 'react';
import './feedStyles.css';
import Feed from '../../components/feedContent/feed';
import profileImg from './images/imgAvatar.png';

function FeedPage() {

    //dummy data
    var feedData = [
      {
        userInfo: {
          userName: "userName1",
          profilePic: profileImg,
          profession: "profession details"
        },

        question: "Which Engineering colleges are good in Mumbai?"
      },
      {
        userInfo: {
          userName: "userName2",
          profilePic: profileImg,
          profession: "profession details"
        },
        question: "Which Engineering colleges are good in Mumbai, and what is the admission procedure or requirement for these colleges?"
      },
      {
        userInfo: {
          userName: "userName3",
          profilePic: profileImg,
          profession: "profession details"
        },
        question: "Which Engineering colleges are good in Mumbai?"
      },
      {
        userInfo: {
          userName: "userName4",
          profilePic: profileImg,
          profession: "profession details"
        },
        question: "Which Engineering colleges are good in Mumbai, and what is the admission procedure or requirement for these colleges?"
      },
    ];

    var connect = [
      {
        userName: "user1", 
        profilePic: profileImg
      }, 
      {
        userName: "userName2", 
        profilePic: profileImg
      }, 
      {
        userName: "aniketbagayatkar",
        profilePic: profileImg
      }, 
      {
        userName: "user4",
        profilePic: profileImg
      }, 
      {
        userName: "user5",
        profilePic: profileImg
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
                  <a href = "/">
                    <img src = { item.profilePic } alt = "alternate" className="profile-pic"/>{ item.userName }
                  </a>
                </li>
              );
            })}
            
          </ul>
        </div>

        {feedData.map((item, index) => {
          return (
            <Feed username = { item.userInfo.userName } question = { item.question } img = { item.userInfo.profilePic } profession = { item.userInfo.profession } />
          )
        })}

        

      </div>
    );
  }
  export default FeedPage;