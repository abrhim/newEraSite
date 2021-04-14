import React from "react";
import { services } from "./data";

export const Services = () => {
  const firstThree = services.slice(0, 3);
  const lastThree = services.slice(3);
  const row = (serv) => {
    return (
      <div key={JSON.stringify(serv)} className="col-md-4">
        <div className="service-media">
          <img src={serv.img} alt=" " />
        </div>
        <div className="service-desc">
          <h3>{serv.title}</h3>
        </div>
      </div>
    );
  };
  return (
    <div id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">{firstThree.map(row)}</div>
        <div className="row">{lastThree.map(row)}</div>
      </div>
    </div>
  );
};
