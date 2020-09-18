import React from "react";
import { Link } from "react-router-dom";

function SomethingWentWrong() {
  return (
    <section className="err">
      <div className="container">
        <div className="not_found">
          <div className="ntfn_img">
            <img
              src={require("../assets/images/woops.png")}
              alt="woops"
              className="img-fluid"
          />
          </div>
          <div className="ntfn_txt">
            <h3>Woops!</h3>
            <h2>Something went wrong.</h2>
            <Link to="/">Go Back</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SomethingWentWrong;
