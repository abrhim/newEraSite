import React from "react";

export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="container">
              <div className="col-xs-12 col-md-3">
                <img src="img/about.jpg" className="img-responsive" alt="" />
              </div>
              <div className="col-xs-12 col-md-3">
                <img src="img/about.jpg" className="img-responsive" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-11">
                <div className="about-text">
                  <h2>Who We Are</h2>
                  <p>
                    Johnathon and Gabriel have worked in the residential
                    contracting industry for a combined 12 years. They pride
                    themselves in honest, efficient, and high quality work for
                    home builders in the Austin Area.
                  </p>
                  <h3>Why Choose Us?</h3>
                  <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        <li>12 Years of Experience</li>
                        <li>Cost Control Experts</li>
                        <li>100% Satisfaction Guarantee</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        <li>Free Consultation</li>
                        <li>Satisfied Customers</li>
                        <li>Affordable Pricing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
