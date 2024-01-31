import React from 'react';

function Home() {
    return (
        <div>
              <div className="p-5 mb-4 bg-body-tertiary rounded-3 hero-banner">
                <div className="container-fluid py-5 headline">
                  <div className="row align-items-center">
                  <div className="col-md-8">
                      <h1 className="display-5 fw-bold">CEMILE BALKAS</h1>
                      <p className="fs-4">
                        Welcome to my portfolio! I am a front-end web developer with a
                        bioengineering background. My passion for technology and
                        creativity drives me to design and develop unique websites. 
                        Combining my technical skills and innovative mindset, I strive to create visually appealing web pages.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img
                        src="/public/cemile.png"
                        alt="Cemile Balkas image"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    
                  </div>
                </div>
              </div>
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