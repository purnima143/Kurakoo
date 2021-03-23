import React from 'react';
import './sideBar.css';

function Sidebar(){

    return (
        <>
            <div className = "sidebar">
                <div className = "activities-div">
                    <div className = "activities-head">
                        <h2>Your recent activities</h2>
                    </div>
                    <div className = "activities-body">
                        <ul className = "activities-list">
                            <li className = "activity">
                                activity 1
                            </li>
                            <li className = "activity">
                                activity 2
                            </li>
                            <li className = "activity">
                                activity 3
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;