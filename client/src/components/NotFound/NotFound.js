import React from "react";
import "./NotFound.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const NotFound = () => {
    return (
        <div class="mainbox">
            <div class="err">4</div>
            <CircularProgress className="spinner" />
            <div class="err2">4</div>
            <div class="msg">
                Maybe this page moved? Got deleted? Is hiding out in quarantine?
                Never existed in the first place?
                <p>
                    Let's go <a href="/">home</a> and try from there.
                </p>
            </div>
        </div>
    );
};

export default NotFound;
