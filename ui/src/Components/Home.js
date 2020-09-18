import React from "react";
import Header from "../Include/Header";
import BannerSection from "../Include/BannerSection";
import Footer from "../Include/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
      <div>
        <header className="header_section">
          <Header />
          <BannerSection />
          <div className="wave_shape">
            <img
                src={require("../assets/images/wave.png")}
                alt="wave"
                className="img-fluid"
            />
          </div>
        </header>
        <section className="services_section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <div className="serv_box">
                      <h5>
                        One-to-One <br /> Tutoring
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Odio corporis, perferendis impedit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="serv_box">
                      <h5>
                        Learn from
                        <br /> Home
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Odio corporis, perferendis impedit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="serv_box">
                      <h5>
                        Personalized
                        <br /> Homework
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Odio corporis, perferendis impedit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tutor_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="tutor_txt">
                  <h3>
                    Connect with Professional <br /> and Peer tutors
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                    unde nobis numquam quas accusantium, assumenda adipisci
                    corrupti tenetur optio autem, quia fugit, iste dolores
                    sapiente aliquam totam sint exercitationem dolor.corrupti
                    tenetur optio autem, quia fugit, iste dolores sapiente aliquam
                    totam sint exercitationem dolor.
                  </p>
                  <Link className="btn btn_start" to="/tutors"> Discover Tutors </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tutor_img">
                  <img
                      src={require("../assets/images/online_learning_2.png")}
                      alt="circle"
                      className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tutor_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="tutor_img">
                  <img
                      src={require("../assets/images/online_learning_1.png")}
                      alt="circle"
                      className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tutor_txt">
                  <h3>
                    Educate yourself &amp; <br /> Earn your certificate
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                    unde nobis numquam quas accusantium, assumenda adipisci
                    corrupti tenetur optio autem, quia fugit, iste dolores
                    sapiente aliquam totam sint exercitationem dolor.corrupti
                    tenetur optio autem, quia fugit, iste dolores sapiente aliquam
                    totam sint exercitationem dolor.
                  </p>
                  <Link className="btn btn_start" to="/about"> Learn More </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
  );
}

export default Home;
