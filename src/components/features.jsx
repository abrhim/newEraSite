import React, { Component } from "react";
// import grading from "../icons/grading2.png"
export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Services</h2>
          </div>

          <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                <div  key={`${d.name}-${i}`} className="col-xs-6 col-sm-4 col-md-4">
                    {" "}
                    <i className="fa">
                    <img {...d.imgAttributes} ></img>
                    </i>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
