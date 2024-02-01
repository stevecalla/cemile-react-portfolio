import React from 'react';
import Skills from '../Skills/Skills';
import './Home.css'

function Home() {
    const name = "CEMILE BALKAS"
    return (
        <div>
            <div className="p-5 mb-4 bg-body-tertiary rounded-3 hero-banner">
                <div className="container-fluid py-5 headline">
                    <div className="row align-items-center">
                        <div className="col-md-8 col-sm-12 mx-auto text-center text-md-start">
                            <p className="fs-4">Hi, my name is </p>
                            <h1 className="display-5 fw-bold">CEMILE BALKAS.</h1>
                            <p className="fs-4 mt-3">
                                I am a front-end web developer with a
                                bioengineering background. My passion for technology and
                                creativity drives me to design and develop unique websites.
                                Combining my technical skills and innovative mindset, I strive to create visually appealing web pages.
                            </p>
                            <a href="https://cemileblks.github.io/react-portfolio/projects" className="btn button-pink mt-3 fs-5" rel="noopener noreferrer">
                                View Projects
                            </a>
                            <a href="https://cemileblks.github.io/react-portfolio/contact" className="btn button-pink mt-3 fs-5 mx-3" rel="noopener noreferrer">
                                Contact me
                            </a>
                        </div>
                        <div className="col-md-4 col-sm-12 order-md-2 mt-3">
                            <div className="image-container rounded-circle">
                                <img
                                    src="/cemile.png"
                                    alt="Cemile Balkas image"
                                    className="img-fluid rounded-circle"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            < Skills />
        </div>
    )
    // <div>
    //     <div className="p-5 mb-4 bg-body-tertiary rounded-3 hero-banner">
    //         <div className="container-fluid py-5 headline">
    //             <h1 className="display-5 fw-bold">CEMILE BALKAS</h1>
    //             <p className="col-md-8 fs-4">Welcome to my portfolio! I am a front-end web developer with 
    //             a bioengineering background. My passion for technology and creativity drives me to design 
    //             and develop unique websites for different businesses and clients. Combining my technical 
    //             skills and innovative mindset, I strive to create visually appealing and functional web pages.
    //             </p>
    //         </div>
    //     </div>
    // </div>

}


export default Home;