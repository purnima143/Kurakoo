import React from 'react';
import './feed.css';
import Feed from './feedComponent';
import profileImg from './imgAvatar.png';

function FeedPage() {

    //dummy data
    var feedData = [
      {
        userInfo: {
          userName: "userName1",
          profilePic: profileImg,
          profession: "profession details"
        },

        question: "Which Engineering colleges are good in Mumbai?",
        answer: "IIT Bombay is definitely number 1.ICT can be placed number 2.But now look at colleges that are under Mumbai University, which take students primarily on Mahrastra CET score.The top 5 spots taken by the autonomous colleges of Mumbai. To attain autonomous status is not easy. A college has to consistently perform in various fields such as scholastic, placements, co-curricular activities and internship opportunities, and have good infrastructure (I did not say CAMPUS, as most colleges have negligible campus size, usually up to 1~3 buildings only), for a minimum number of years. I think minimum period is 10 years for which the college has to perform consistently in the above areas to avail autonomous status."
      },
      {
        userInfo: {
          userName: "userName2",
          profilePic: profileImg,
          profession: "profession details"
        },
        question: "Which Engineering colleges are good in Mumbai, and what is the admission procedure or requirement for these colleges?",
        answer: "IIT Bombay is definitely number 1.ICT can be placed number 2.But now look at colleges that are under Mumbai University, which take students primarily on Mahrastra CET score.The top 5 spots taken by the autonomous colleges of Mumbai. To attain autonomous status is not easy. A college has to consistently perform in various fields such as scholastic, placements, co-curricular activities and internship opportunities, and have good infrastructure (I did not say CAMPUS, as most colleges have negligible campus size, usually up to 1~3 buildings only), for a minimum number of years. I think minimum period is 10 years for which the college has to perform consistently in the above areas to avail autonomous status."
      },
      {
        userInfo: {
          userName: "userName3",
          profilePic: profileImg,
          profession: "profession details"
        },
        question: "Which Engineering colleges are good in Mumbai?",
        answer: "IIT Bombay is definitely number 1.ICT can be placed number 2.But now look at colleges that are under Mumbai University, which take students primarily on Mahrastra CET score.The top 5 spots taken by the autonomous colleges of Mumbai. To attain autonomous status is not easy. A college has to consistently perform in various fields such as scholastic, placements, co-curricular activities and internship opportunities, and have good infrastructure (I did not say CAMPUS, as most colleges have negligible campus size, usually up to 1~3 buildings only), for a minimum number of years. I think minimum period is 10 years for which the college has to perform consistently in the above areas to avail autonomous status. IIT Bombay is definitely number 1.ICT can be placed number 2.But now look at colleges that are under Mumbai University, which take students primarily on Mahrastra CET score.The top 5 spots taken by the autonomous colleges of Mumbai. To attain autonomous status is not easy. A college has to consistently perform in various fields such as scholastic, placements, co-curricular activities and internship opportunities, and have good infrastructure (I did not say CAMPUS, as most colleges have negligible campus size, usually up to 1~3 buildings only), for a minimum number of years. I think minimum period is 10 years for which the college has to perform consistently in the above areas to avail autonomous status."
      },
      {
        userInfo: {
          userName: "userName4",
          profilePic: profileImg,
          profession: "profession details"
        },
        question: "Which Engineering colleges are good in Mumbai, and what is the admission procedure or requirement for these colleges?",
        answer: "IIT Bombay is definitely number 1.ICT can be placed number 2.But now look at colleges that are under Mumbai University, which take students primarily on Mahrastra CET score.The top 5 spots taken by the autonomous colleges of Mumbai. To attain autonomous status is not easy. A college has to consistently perform in various fields such as scholastic, placements, co-curricular activities and internship opportunities, and have good infrastructure (I did not say CAMPUS, as most colleges have negligible campus size, usually up to 1~3 buildings only), for a minimum number of years. I think minimum period is 10 years for which the college has to perform consistently in the above areas to avail autonomous status."
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
            <Feed username = { item.userInfo.userName } question = { item.question } img = { item.userInfo.profilePic } profession = { item.userInfo.profession } answer = { item.answer } />
          )
        })}

        

      </div>
    );
  }
  export default FeedPage;