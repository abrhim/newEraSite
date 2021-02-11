import React from "react";

export const Hero = () => {
  return (
    <React.Fragment>
      <header id="header">
        <div class="intro">
          <div class="overlay">
            <div class="container">
              <div class="row">
                <div class="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    Home Construction
                    <br /> & Remodeling
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante
                    facilisis bibendum dolor feugiat at.
                  </p>
                  <a href="#about" class="btn btn-custom btn-lg page-scroll">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="get-touch">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6 col-md-offset-1">
              <h3>Cost for your home renovation project</h3>
              <p>
                Get started today and complete our form to request your free
                estimate
              </p>
            </div>
            <div class="col-xs-12 col-md-4 text-center">
              <a href="#contact" class="btn btn-custom btn-lg page-scroll">
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
