import React from 'react';
import Project from '../Project/Project';
import projects from '../../data/projects.json'

function ProjectGallery() {

    return <div>
            <div className="container mt-3 text-center">
                <h2 className="mb-4">My Projects</h2>
                <div className="row justify-content-center">
                    {projects.map((project) => (
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            screenshot={project.screenshot}
                            linkDeployed={project.linkDeployed}
                            linkRepo={project.linkRepo}
                        />
                    ))}
                </div>
            </div>
        </div>
}

export default ProjectGallery;