import React from 'react';
import './sideBar.css';
import Logo from '../kurakoo-logo.png';
import { activityData } from './DummyData';

function Sidebar(){

    return (
        <>
            <div className = "sidebar">
                <div className = "activities-div">
                    <div className = "activities-head">
                        <h2>Your recent activities in groups</h2>
                    </div>
                    <div className = "activities-body">
                        <ul className = "activities-list">
                            { activityData.map((item, index) =>

                                <li className = "activity">
                                    <div className = "image-div">
                                        <img className = "rare-img img" src = { item.image1 } alt = "alt" />
                                        <img className = "front-img img" src = { item.image2 } alt = "alt" />
                                    </div>
                                    <div className = "content">
                                        <div className = "activity-head">
                                            <div className = "topic">
                                                { item.head }
                                            </div>
                                            <div className = "detail line-word-space">
                                                { item.detail }
                                            </div>
                                        </div>
                                        <div className = "disc line-word-space">
                                            <p>
                                                { item.disc }
                                            </p>
                                            <button>More</button>
                                        </div>
                                        
                                    </div>
                                </li>

                            )}
                        </ul>
                    </div>
                </div>

                <footer className = "footer">
                    <div className = "footer-line1">
                        About | Privacy | Contact Us
                    </div>
                    <div className = "footer-line2">
                        <div>GitHub</div>
                        <div className = "email">✉ loremimpsum@gmail.com</div>
                    </div>
                    <div className = "footer-line3">
                        <div className = "logo">
                            <img src = { Logo } alt = "alt" />
                        </div>
                        <div className = "copyright">© kurakoo 2021</div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Sidebar;

