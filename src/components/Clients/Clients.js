const clientAssets = [
  { img: "westinHomes.png", url: "https://westin-homes.com/" },
  { img: "dreamFinder.png", url: "https://www.dreamfindershomes.com/" },
  { img: "scottHomes.png", url: "https://www.scotthomesonline.com/" },
  { img: "grandEndeavor.png", url: "https://www.grandendeavorhomes.com/" },
];

export const Clients = () => {
  return (
    <div id="clients">
      <div className="container">
        <div className="row">
          <div className="section-title ">
            <h2>Our Clients</h2>
          </div>
        </div>
        <div className="row clientLogos">
          {clientAssets.map((assets) => (
            <div className="col-xs-12 col-md-3">
              <a href={assets.url} target="_blank" rel="noreferrer">
                <img
                  src={`img/clients/${assets.img}`}
                  className="img-responsive"
                  alt=""
                />
              </a>
            </div>
          ))}
          {/* <div className="col-xs-12 col-md-3">
            <img
              src="img/clients/grandEndeavor.png"
              className="img-responsive"
              alt=""
            />
          </div>{" "}
          <div className="col-xs-12 col-md-3">
            <img
              src="img/clients/westinHomes.png"
              className="img-responsive"
              alt=""
            />
          </div>{" "}
          <div className="col-xs-12 col-md-3">
            {" "}
            <img
              src="img/clients/dreamFinder.png"
              className="img-responsive"
              alt=""
            />
          </div>{" "}
          <div className="col-xs-12 col-md-3">
            {" "}
            <img
              src="img/clients/scottHomes.png"
              className="img-responsive"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
