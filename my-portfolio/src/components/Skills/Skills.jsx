import React from "react";
import "./Skills.css"

const skillsData = [
    { name: "HTML", icon: "/html.svg" },
    { name: "CSS", icon: "/css.svg" },
    { name: "JavaScript", icon: "/js.svg" },
    { name: "Bootstrap", icon: "/bootstrap.svg" },
    { name: "jQuery", icon: "/jquery.svg" },
    { name: "Node.js", icon: "/node.svg" },
    { name: "Git", icon: "/git.svg" },
    { name: "GitHub", icon: "/github.svg" },
    { name: "React.js", icon: "/react.svg" },
    { name: "Vite", icon: "/vite.svg" },

  ];

function Skills() {
    return (
        <div className="skills-container text-center">
            <h2 className="mb-4">My Skills</h2>
            <p className="fs-5" >Over the course of my web development journey, I have gained skills in different technologies and tools.</p>
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