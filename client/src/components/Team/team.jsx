import React, { useState, useEffect } from "react";
import "./team.css";
import GitHubIcon from "@material-ui/icons/GitHub";

const Team = () => {
    const projectadmin = {
        name: "Purnima Sharma",
        title: "Project Admin",
        githublink: "https://github.com/purnima143",
        image: "https://avatars1.githubusercontent.com/u/57852378?v=4?s=100"
    };
    const mentor = [
        {
            name: "Ahmed Mawia",
            title: "Project Mentor",
            githublink: "https://github.com/maw1a",
            image: "https://avatars.githubusercontent.com/u/48566609?v=4"
        },
        {
            name: "Ishu Raj",
            title: "Project Mentor",
            githublink: "https://github.com/ir2010",
            image: "https://avatars.githubusercontent.com/u/46022116?v=4"
        },
        {
            name: "Vivekkumar Javiya",
            title: "Project Mentor",
            githublink: "https://github.com/codewithvk",
            image: "https://avatars.githubusercontent.com/u/61119120?v=4"
        }
    ];
    const [contributors, setContributors] = useState([]);
    useEffect(() => {
        fetch(
            "https://api.github.com/repos/purnima143/Kurakoo/contributors?per_page=1000"
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setContributors(
                    data.filter(
                        (element) =>
                            !(
                                element.login === "codewithvk" ||
                                element.login === "ir2010" ||
                                element.login === "maw1a" ||
                                element.login === "purnima143"
                            )
                    )
                );
            });
    }, []);
    return (
        <div className="container">
            <h1
                style={{
                    fontSize: "3rem",
                    marginBottom: "0rem",
                    color: "#212529",
                    textDecoration: "underline"
                }}
            >
                <center>Team</center>
            </h1>
            <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
                <center>Project Admin</center>
            </h2>
            <div className='badges_container'>
          
            <div
              className='badge hvr-bounce-to-top hvr-icon-grow'
            >
              <img src={projectadmin.image} alt='Avatar' className='badge_img' />
              <div className='badge_text'>
                <h5>
                  <b>{projectadmin.name}</b>
                </h5>
                <p>
                  <a href={projectadmin.githublink}>
                    <GitHubIcon
                      style={{ color: 'black', fontSize: 30 }}
                      className='hvr-icon'
                    />
                  </a>
                </p>
              </div>
            </div> 
        </div>
            <h2 style={{ fontSize: "2rem", marginTop: "2rem" }}>
                <center>Collaborators</center>
            </h2>
            <div className='badges_container'>
          {mentor.map(item => (
            <div
              className='badge hvr-bounce-to-top hvr-icon-grow'
              key={item.title}
            >
              <img src={item.image} alt='Avatar' className='badge_img' />
              <div className='badge_text'>
                <h5>
                  <b>{item.name}</b>
                </h5>
                <p>
                  <a href={item.githublink}>
                    <GitHubIcon
                      style={{ color: 'black', fontSize: 30 }}
                      className='hvr-icon'
                    />
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
            <h2 style={{ fontSize: "2rem", margin: "2rem" }}>
                <center style={{ marginTop: "1%" }}>Contributors</center>
            </h2>
            <div className='badges_container'>
          {contributors.map(item => (
            <div
              className='badge hvr-bounce-to-top hvr-icon-grow'
              key={item.id}
            >
              <a href={item.html_url}><img src={item.avatar_url} alt='Avatar' className='profile' /></a>
            </div>
          ))}
        </div>
        </div>
    );
};
export default Team;
