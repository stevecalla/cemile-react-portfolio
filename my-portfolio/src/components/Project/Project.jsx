import React from 'react';
import './Project.css';

function Project({ title, description, screenshot, linkDeployed, linkRepo }) {
    return (
        <div className="col-md-6 project-card">
            <div className="card mb-4">
                <div className="overlay">
                    <img src={screenshot} className="card-img-top" alt={`Screenshot of ${title}`} /></div>
                <div className="card-body">
                    <h5 className="card-title fs-3">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={linkDeployed} className="btn button-pink m-2" target="_blank" rel="noopener noreferrer">
                        Go to Application
                    </a>
                    <a href={linkRepo} className="btn button-gray" target="_blank" rel="noopener noreferrer">
                        View Code <i className="fab fa-github fa-lg"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;