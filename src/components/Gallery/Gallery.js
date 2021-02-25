import React from "react";
import { items } from "./data";
export const Gallery = () => {
  const row = (item) => {
    const { title, largeImg, smallImg, hoverText } = item;
    return (
      <div key={JSON.stringify(item)} className="col-sm-6 col-md-4 col-lg-4">
        <div className="portfolio-item">
          <div className="hover-bg">
            <a
              href={largeImg}
              title={"New Era"}
              data-lightbox-gallery="gallery1"
            >
              <div className="hover-text">
                <h4>{hoverText}</h4>
              </div>
              <img src={smallImg} className="img-responsive" alt={title} />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Our Works</h2>
          <div className="row">
            <div className="portfolio-items">{items.map(row)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
