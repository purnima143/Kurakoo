import React, { useState } from "react";
import "./AddAQuestion.css";
import closeIcon from "./svgs/closesvg.svg";
import logo from "../../components/kurakoo-logo.png";
import link from "./svgs/linksvg.svg";

import { Avatar } from "@material-ui/core";
const AddAQuestion = () => {
  const [question, setQuestion] = useState("");
  const [modal, setModal] = useState(false);
  const [addlink, setAddlink] = useState("");

  const addquestion = (e) => {
    //code to add the question to the backend
    e.preventDefault();
  };
  return (
    <>
      {/* Link Modal */}
      {modal && (
        <div className="addlinkmodal">
          <div onClick={() => setModal(false)}></div>
          <form>
            <label>Add Link</label>
            <input
              type="text"
              placeholder="Add link"
              onChange={(e) => setAddlink(e.target.value)}
              value={addlink}
            />
            <button
              className="addaquestionpage_btn"
              onClick={(e) => {
                e.preventDefault();
                setModal(false);
              }}
            >
              Add Link
            </button>
          </form>
        </div>
      )}
      {/* add question form */}
      <form onSubmit={addquestion} className="addaquestionpage">
        <div className="addaquestionpage_header">
          <img
            src={closeIcon}
            alt="close icons"
            className="addaquestionpage_header_close"
          />
          <div className="addaquestionpage_header_selectdiv">
            <label>
              <select>
                <option value="Addq"> Add question </option>
                <option value="value1">Option 1</option>
                <option value="value2">Option 2</option>
              </select>
            </label>
          </div>
          <img src={logo} alt="logo" className="addaquestionpage_header_logo" />
        </div>
        <div className="semicircle1"></div>
        <div className="semicircle2"></div>
        <div className="addaquestionpage_questionsection">
          <div className="addaquestionpage_askerdetails">
            <Avatar />
            <p>Gaurav Chanda asked</p>

            <select className="addaquestionpage_askerdetails_select">
              <option> Public </option>
              <option> Selected </option>
            </select>
          </div>
          <div className="addaquestionpage_askerdetails_questionInput">
            <textarea
              placeholder="Start your question with “What”, “How”, “Why”, etc"
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
            />
          </div>
          <div className="addaquestionpage_link">
            <img src={link} alt="Link" />
            <p>
              {addlink === ""
                ? "Optional: include a link that gives content"
                : addlink}
            </p>
            <button
              className="addaquestionpage_btn"
              onClick={() => setModal(true)}
            >
              Link
            </button>
          </div>
          <div className="addaquestionpage_bottomsection">
            <button className="addaquestionpage_cancelbtn">Cancel</button>
            <button
              type="submit"
              className="addaquestionpage_btn"
              onClick={addquestion}
            >
              Add question
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddAQuestion;
