import React from "react";
import Header from "../Include/Header";
import Footer from "../Include/Footer";

function About() {
  return (
      <div>
        <header className="header_section">
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="about_txt">
                  <img
                      src={require("../assets/images/about_us.png")}
                      alt="about"
                      className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-7" >
                <div className="tutr_pro">
                  <h2 className="mb-5">About Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                    sequi suscipit quos soluta sapiente aspernatur deserunt eius
                    ab, assumenda, quidem animi vero, dignissimos blanditiis!
                    Saepe quaerat odit deserunt maiores officiis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="profile_txt_sec about_sec_txt">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="profile_txt">
                    <h6>Our mission</h6>
                  <p/>
                  <p className="pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    voluptas veritatis, non vel. Ullam asperiores, tempora
                    consequuntur delectus laboriosam ipsam dolor veritatis esse
                    corrupti, eligendi molestias illum at illo excepturi!
                    Quibusdam non perferendis iure atque facere. Doloribus atque
                    temporibus quos!
                  </p>
                  <p className="pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nulla officia illo perspiciatis officiis asperiores sed
                    voluptates saepe provident, omnis accusantium reiciendis fugit
                    ratione vitae, nesciunt ducimus est doloribus veritatis sit.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about_txt">
                  <img
                      src={require("../assets/images/mission.png")}
                      alt="mission"
                      className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
  );
}

export default About;
