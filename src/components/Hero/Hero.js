import React from "react";

export const Hero = () => {
  return (
    <React.Fragment>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-2 intro-text">
                  <h1>
                    New Era
                    <br /> Contracting
                  </h1>
                  <p>
                    Austin Area residential construction contracting working for
                    you.
                  </p>
                  {/* <a
                    href="#about"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="get-touch">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-md-offset-1">
              <h3>Cost for your home project</h3>
              <p>
                Get started today and complete our form to request your free
                estimate
              </p>
            </div>
            <div className="col-xs-12 col-md-4 text-center">
              <a href="#contact" className="btn btn-custom btn-lg page-scroll">
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
