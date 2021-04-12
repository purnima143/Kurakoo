import React from 'react';
import './feed.css';
import Feed from './feedComponent';
import {feedData, connect} from './dummyData';
import NavBar from '../Component/navbar/Navbar';

function FeedPage() {

    return (
      <div>
        <NavBar/>
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
                    <img src = { item.profilePic } alt = "alt" className="profile-pic"/>{ item.userName }
                  </a>
                </li>
              );
            })}
            
          </ul>
        </div>

        <div id = "feeds">
        {feedData.map((item, index) => {
          return (
            <Feed username = { item.userInfo.userName } question = { item.question } img = { item.userInfo.profilePic } profession = { item.userInfo.profession } answer = { item.answer } />
          )
        })}
        </div>
        

      </div>
    );
  }
  export default FeedPage;