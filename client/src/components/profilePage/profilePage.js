import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import "./profilePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import logo from "../images/profile-pic.png";
import { Link } from "react-router-dom";
const Footer = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('../Footer/footer')), 6000);
    });
  });
const followers = 0;
const following = 0;
class profilePage extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <img
                    src={logo}
                    className="rounded-circle"
                    alt="Profile"
                />
                <div className="Intro">
                    <h1>Purnima Sharma</h1>
                    <h5>Open Source Project Manager</h5>
                </div>
                <div className="Header">
                    <h3>
                        {" "}
                        <Link to="/profile" className="profile">
                            Profile
                        </Link>
                        <span>|</span>
                        <Link to="/addaquestion">Questions</Link>
                        <span>|</span> <Link to="feed">Answers</Link>
                    </h3>
                    <hr></hr>
                </div>
                <div className="followers">
                    <h3>
                        {" "}
                        Following - <span>{following}</span> &nbsp; &nbsp;
                        &nbsp;Followers - <span>{followers}</span>{" "}
                    </h3>
                </div>
                <div className="Content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque at felis condimentum, imperdiet magna non,
                        efficitur dui. In hac habitasse platea dictumst. Etiam
                        semper libero lectus, ut faucibus ipsum malesuada eu.
                        Vivamus at nulla condimentum, cursus ipsum quis,
                        porttitor magna. Mauris tellus orci, molestie at tellus
                        sed, feugiat sollicitudin urna. Nam vel enim nec mauris
                        congue finibus. Cras aliquam tellus sit amet velit
                        dapibus, vel eleifend orci consectetur. Mauris eget
                        rutrum augue. Aliquam erat volutpat.
                    </p>
                </div>
                <div className="foot">
                    <h1>Lorem Impsum University</h1>
                    <i className="fa fa-edit fa-2x"></i>
                    <span>Edit</span>
                    <h2>Humanities - Sophomore Year</h2>
                </div>
                <br />
                <br />
                <div>
                <React.Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '50px',
              fontWeight: 'medium',
            }}
          >
            Loading...
          </div>
        }
      >
        <Footer />
      </React.Suspense>
                </div>
            </div>
        );
    }
}

export default profilePage;
