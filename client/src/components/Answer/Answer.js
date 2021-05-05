import React, { useState } from "react";
import "../AddAQuestion/AddAQuestion.css";

import closeIcon from "./svgs/closesvg.svg";
import logo from "../images/kurakoo-logo.png";
import link from "./svgs/linksvg.svg";

import { Avatar } from "@material-ui/core";
const Answerquestion = () => {
  const [Answer, setAnswer] = useState("");
  const [addlink, setAddlink] = useState("");

  const answer = (e) => {
    //code to add the question to the backend
    e.preventDefault();
  };
  return (
    <>
      
      {/* Answer form */}
      <form onSubmit={answer} className="addaquestionpage">
        <div className="addaquestionpage_header">
         <img src={logo} alt="logo" className="addaquestionpage_header_logo" />
        </div>
        <div className="semicircle1"></div>
        <div className="semicircle2"></div>
        <div className="addaquestionpage_questionsection">
          <div className="addaquestionpage_askerdetails">
            <Avatar />
            <p>User answered the question</p>
            <select className="addaquestionpage_askerdetails_select">
              <option> Tags </option>
              <option> Selected </option>
            </select>
          </div>
          <div className="addaquestionpage_askerdetails_questionInput">
            <textarea
              placeholder="Answer to the question"
              onChange={(e) => setAnswer(e.target.value)}
              value={Answer}
            />
          </div>
          
          
          <div className="addaquestionpage_bottomsection">
            <button
              type="submit"
              className="addaquestionpage_btn"
              onClick={answer}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              Add answer
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Answerquestion;