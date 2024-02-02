import React from "react";
import "./Skills.css"

const skillsData = [
    { name: "HTML", icon: "/assets/images/html.svg" },
    { name: "CSS", icon: "/assets/images/css.svg" },
    { name: "JavaScript", icon: "/assets/images/js.svg" },
    { name: "Bootstrap", icon: "/assets/images/bootstrap.svg" },
    { name: "jQuery", icon: "/assets/images/jquery.svg" },
    { name: "Node.js", icon: "/assets/images/node.svg" },
    { name: "Git", icon: "/assets/images/git.svg" },
    { name: "GitHub", icon: "/assets/images/github.svg" },
    { name: "React.js", icon: "/assets/images/react.svg" },
    { name: "Vite", icon: "/assets/images/vite.svg" },

  ];

function Skills() {
    return (
        <div className="skills-container text-center container">
            <h2 className="mb-4">My Skills</h2>
            <p className="fs-5" >Having acquired skills in various technologies and tools throughout my web development career, I am looking forward to expanding my skill set through future projects and collaborations.</p>
            <div className="d-flex flex-wrap justify-content-center mb-4">
                {skillsData.map((skill, index) => (
                    <div key={index} className="mb-1">
                        <div className="skill-item">
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="img-fluid skill-icon"
                            />
                            <p className="skill-name">{skill.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;