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
                    marginBottom: "4rem",
                    color: "#212529",
                    textDecoration: "underline"
                }}
            >
                <center>Team</center>
            </h1>
            <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
                <center>Project Admin</center>
            </h2>

            <div className="box-container">
                <div className="box-item">
                    <div className="flip-box">
                        <div
                            className="flip-box-front text-center"
                            style={{
                                backgroundColor: "pink"
                            }}
                        >
                            <img
                                src={projectadmin.image}
                                alt=""
                                className="profile"
                            />
                            <div className="inner color-black">
                                <h2
                                    className="flip-box-header"
                                    style={{ textTransform: "Capitalize" }}
                                >
                                    {projectadmin.name}
                                </h2>
                                <br />
                                <h2>{projectadmin.title}</h2>
                            </div>
                        </div>
                        <div
                            className="flip-box-back text-center"
                            style={{
                                backgroundColor: "blanchedalmond"
                            }}
                        >
                            <br />
                            <h3>Want to know more ?</h3>

                            <h3>Click on the icon below !</h3>

                            <a href={projectadmin.githublink}>
                                {" "}
                                <GitHubIcon style={{ fontSize: "4rem" }}>
                                    {" "}
                                </GitHubIcon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <h2 style={{ fontSize: "2rem", marginTop: "-7rem" }}>
                <center>Collaborators</center>
            </h2>
            <div className="colabcards">
                {mentor.map((item) => (
                    <div className="box-container cards">
                        <div className="box-item">
                            <div className="flip-box">
                                <div
                                    className="flip-box-front text-center"
                                    style={{
                                        backgroundColor: "pink"
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="profile"
                                    />
                                    <div className="inner color-black">
                                        <h2
                                            className="flip-box-header"
                                            style={{
                                                textTransform: "Capitalize"
                                            }}
                                        >
                                            {item.name}
                                        </h2>
                                        <br />
                                        <h2>{item.title}</h2>
                                    </div>
                                </div>
                                <div
                                    className="flip-box-back text-center"
                                    style={{
                                        backgroundColor: "blanchedalmond"
                                    }}
                                >
                                    <br />

                                    <h3>Want to know more ?</h3>

                                    <h3>Click on the icon below !</h3>

                                    <a href={item.githublink}>
                                        {" "}
                                        <GitHubIcon
                                            style={{ fontSize: "4rem" }}
                                        >
                                            {" "}
                                        </GitHubIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 style={{ fontSize: "2rem", margin: "2rem" }}>
                <center style={{ marginTop: "-13%" }}>Contributors</center>
            </h2>
            <div className="concards">
                {contributors.map((item) => (
                    <div>
                        <a href={item.html_url}>
                            <img
                                src={item.avatar_url}
                                className="profile"
                                alt=""
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Team;
