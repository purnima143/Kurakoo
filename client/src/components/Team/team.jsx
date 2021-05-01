import React, { useState, useEffect } from "react";
import "./team.css"
import GitHubIcon from '@material-ui/icons/GitHub';

const Team = () => {
    const projectadmin = {
        name: 'Purnima Sharma',
        title: 'Project Admin',
        githublink: 'https://github.com/purnima143',
        image: 'https://avatars1.githubusercontent.com/u/57852378?v=4?s=100'
    };
    const mentor = [
        {
            name: 'Ahmed Mawia',
            title: 'Project Mentor',
            githublink: 'https://github.com/maw1a',
            image: 'https://avatars.githubusercontent.com/u/48566609?v=4'
        },
        {
            name: 'Ishu Raj',
            title: 'Project Mentor',
            githublink: 'https://github.com/ir2010',
            image: 'https://avatars.githubusercontent.com/u/46022116?v=4'
        },
        {
            name: 'Vivekkumar Javiya',
            title: 'Project Mentor',
            githublink: 'https://github.com/codewithvk',
            image: 'https://avatars.githubusercontent.com/u/61119120?v=4'
        }
    ];
    const [contributors, setContributors] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/repos/purnima143/Kurakoo/contributors?per_page=1000")
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setContributors(
              data.filter(element => !(element.login === "smaranjitghose" || element.login === "anushbhatia"))
            );
          });
      }, []);
    return (
        <div className="container">
            <h1 style={{ fontSize: '3rem', marginBottom: '4rem', color: '#212529', textDecoration:'underline' }}><center>Team</center></h1>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}><center>Project Admin</center></h2>
            <div className="cards">
                <img src={projectadmin.image} alt="" />
                <h2>{projectadmin.name}</h2>
                <h3>{projectadmin.title}</h3>

                <a href={projectadmin.githublink}> <GitHubIcon> </GitHubIcon></a>
            </div>
            <h2 style={{ fontSize: '2rem', margin: '2rem' }}><center>Collaborators</center></h2>
            <div className="colabcards">
                {
                    mentor.map((item) => (
                        <div className="cards">
                            <img src={item.image} alt=""/>
                            <h2>{item.name}</h2>
                            <h3>{item.title}</h3>
                            <a href={item.githublink}> <GitHubIcon></GitHubIcon> </a>
                        </div>
                    ))
                }

            </div>
            <h2 style={{ fontSize: '2rem', margin: '2rem' }} ><center>Contributors</center></h2>
            <div className="concards">
                {
                    contributors.map((item)=>(
                        <div>
                            <a href={item.html_url}><img src={item.avatar_url} className="profile" alt=""/></a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Team;