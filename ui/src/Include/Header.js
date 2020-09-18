import React from "react";
import logo from "../assets/images/logo.png";
import { Link, withRouter } from "react-router-dom";
import Cookies from 'universal-cookie';

const Header = () => {
  const cookies = new Cookies();

    const signouthandler = async (e) => {
        e.preventDefault();
        cookies.remove('tkn', {path: '/'})
        console.log(cookies.get('tkn'))
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    };

  return (
      <React.Fragment>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" className="img-fluid" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/tutors">
                          Tutors
                      </Link>
                  </li>
                {cookies.get('tkn') !== undefined ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/userprofile">
                        Dashboard
                      </Link>
                    </li>
                ) : (
                    <li/>
                )}

                <li
                    className="nav-item"
                    style={{
                      display: cookies.get('tkn') !== undefined ? "block" : "none",
                      textTransform: "capitalize",
                    }}
                >
                </li>
                  {cookies.get('tkn') !== undefined ? (
                      <li className="nav-item">
                          <Link className="nav-link btn btn_login" to="#" onClick={signouthandler}>
                              Log out
                          </Link>
                      </li>
                  ) : (
                      <li className="nav-item">
                          <Link
                              to="/signin"
                              className="nav-link btn btn_login"
                              style={{
                                  display: cookies.get('tkn') !== undefined && "none",
                              }}
                          >
                              Login
                          </Link>
                      </li>
                  )}

                  {cookies.get('tkn') !== undefined ? (
                      <li/>
                  ) : (
                      <li className="nav-item">
                          <Link
                              to="/signup"
                              className="nav-link btn btn_start"
                              style={{
                                  display: cookies.get('tkn') !== undefined && "none",
                              }}
                          >
                              Get Started
                          </Link>
                      </li>
                  )}

              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>


  );
};
export default withRouter(Header);
