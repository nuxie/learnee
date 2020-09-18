import React from "react";

function BannerSection() {

  return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner_txt">
              <h2>
                Discover a new <br /> way of learning
              </h2>
              <h6>Find the right on-line tutor for you</h6>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner_img">
              <img
                  src={require("../assets/images/online_learning_3.png")}
                  alt="banner"
                  className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default BannerSection;
