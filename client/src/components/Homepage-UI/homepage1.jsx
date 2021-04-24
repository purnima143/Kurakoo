import React from "react"
import "./Homepage.css"
import logo from "../../components/kurakoo-logo.png";

const Homepage = () => {
    return (
        <div className="LandingPage">
            <img src={require('../Homepage assets/main.png')} alt="main" className="mainvector" />
            <div className="navbar">
                <img src={logo} className="logo" alt="" />
                <div className="links">
                    <a href="#" className="login">Login</a>
                    <a href="#" className="signup">SignUp</a>
                </div>
            </div>
            <div className="content">
                <h2>Welcome To</h2>
                <h1>Kurakoo</h1>
                <h4>Get your answer</h4>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque velit et maxime minus, suscipit omnis architecto quia cupiditate aliquam ipsa iusto commodi vero amet quos, eius modi corrupti? Facilis!</h3>
            </div>
            <img src={require('../Homepage assets/leaf1.png')} alt="leaf1" className="leaf1" />
            <div className="Vision">
                <h1 className="head"><span>Our</span> Vision</h1>
                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi ipsum </h5>
            </div>
            <div className="VisionCards">
                <div className="card">
                    <img src={require('../Homepage assets/01.png')} alt="" />
                    <h3>Share and Grow</h3>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eveniet autem illum animi fugiat optio obcaecati nihil iusto nam ratione.</h5>
                </div>
                <div className="card">
                    <img src={require('../Homepage assets/02.png')} alt="" />
                    <h3>Create Networks</h3>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eveniet autem illum animi fugiat optio obcaecati nihil iusto nam ratione.</h5>
                </div>
                <div className="card">
                    <img src={require('../Homepage assets/03.png')} alt="" />
                    <h3>Everything in One</h3>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eveniet autem illum animi fugiat optio obcaecati nihil iusto nam ratione.</h5>
                </div>
            </div>
            <div className="aboutus">
                <img src={require('../Homepage assets/about.png')} className="aboutimage" alt="" />
                <div className="about-content">
                    <h1 className="head"><span>About</span> Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reprehenderit sapiente molestiae beatae labore. Nulla, explicabo aut beatae non voluptates delectus amet dolorem nostrum consequuntur similique repudiandae, sunt accusantium dolore!</p>
                </div>
            </div>
            <div className="reach">
                <h1 className="head"><span>Our </span>Reach</h1>
                <div className="reach-cards">
                    <div className="card">
                        <img src={require('../Homepage assets/student.png')} alt="" />
                        <h2>30+</h2>
                        <h5>Contributors</h5>
                    </div>
                    <div className="card">
                        <img src={require('../Homepage assets/calendar.png')} alt="" />
                        <h2 className="red">260+</h2>
                        <h5>Commits</h5>
                    </div>
                    <div className="card">
                        <img src={require('../Homepage assets/leadership.png')} alt="" />
                        <h2 className="red">60+</h2>
                        <h5 className>Stars</h5>
                    </div>
                </div>
                <img src={require('../Homepage assets/leaf2.png')} className="leaf2" alt=""/>
            </div>

        </div>
    )
}
export default Homepage;