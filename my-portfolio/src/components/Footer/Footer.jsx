import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='social-media-wrapper'>
            <footer className="text-center text-lg-startd-flex justify-content-evenly align-items-center pt-5">
            <div className="mb-3">

                        <a href="https://github.com/cemileblks" target="_blank" rel="noopener noreferrer" aria-label="Link to GitHub" className="text-pink mx-3">
                            <i className="fab fa-github fa-2x"></i>
                        </a>


                        <a href="https://www.linkedin.com/in/cemile-b-606084146/" target="_blank" rel="noopener noreferrer" aria-label="Link to LinkedIn" className="text-pink mx-3">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>

                        <a href="mailto:cemilebalkas@gmail.com" aria-label="Send an Email" className="text-pink mx-3">
                            <i className="fas fa-envelope fa-2x"></i>
                        </a>

                        <a href="https://twitter.com/Cemile_blks" aria-label="Send an Email" className="text-pink mx-3">
                        <i className="fa-brands fa-x-twitter fa-2x"></i>
                        </a>

                        </div>


                <div className="text-center text-white p-3 footer-text">
                    <a className="text-white" href="https://github.com/cemileblks">© 2024 by CEMILE BALKAS</a>
                </div>
            </footer>
        </div>
    );
}
export default Footer;