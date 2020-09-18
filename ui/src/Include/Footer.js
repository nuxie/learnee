import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div>
          <footer className="footer_section pt_90">
            <div className="container">
              <div className="row">
                <div className="col-lg mb-4">
                  <div className="col-lg">
                    <div className="ftr_list_right">
                      <h5>Contact</h5>
                      <ul>
                        <li>
                          <a href="https://goo.gl/maps/9XptHYC26sCcycKX9">
                            221B Baker Street, London, U.K.
                          </a>
                        </li>
                        <li>
                          <a href="mailto:support@learnee.com">support@learnee.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ftr_logo">
                    <Link to="/">
                      <img
                          src={require("../assets/images/logo_white.png")}
                          alt="logo"
                          className="img-fluid"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row brdr_top">
                <div className="col-lg-6">
                  <div className="ftr_left">
                    <Link to="">Copyright 2020 Learnee © All right reserved</Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ftr_left text-right">
                    <Link to="/privacy">Privacy policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
    );
  }
}

export default Footer;
