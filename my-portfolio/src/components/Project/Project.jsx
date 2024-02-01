import React from 'react';

function Project({ title, description, screenshot, linkDeployed, linkRepo }) {
    return (
        <div className="col-md-6">
          <div className="card mb-4">
          <img src={screenshot} className="card-img-top" alt={`Screenshot of ${title}`} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={linkDeployed} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View Deployed
              </a>
              <a href={linkRepo} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                View Repository
              </a>
            </div>
          </div>
        </div>
      );
}

export default Project;