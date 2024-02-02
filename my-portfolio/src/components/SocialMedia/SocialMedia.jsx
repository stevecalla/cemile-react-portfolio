import React from 'react';
import CV from '/assets/docs/CV.pdf';
import './SocialMedia.css'

function SocialMedia() {
    return (
        <div className='social-media-wrapper d-flex justify-content-evenly align-items-center mb-4'>
            <a href="https://github.com/cemileblks" target="_blank" rel="noopener noreferrer" aria-label="Link to GitHub" className="icon">
                <i className="fab fa-github fa-3x"></i>
            </a>
            <a href="https://www.linkedin.com/in/cemile-b-606084146/" target="_blank" rel="noopener noreferrer" aria-label="Link to LinkedIn" className="icon">
                <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a href="mailto:cemilebalkas@gmail.com" aria-label="Send an Email" className="icon">
                <i className="fas fa-envelope fa-3x"></i>
            </a>
            <a className='btn button-pink' href={CV} target="_blank" rel="noreferrer" download>Download my CV</a>
        </div>
    );
}

export default SocialMedia;
