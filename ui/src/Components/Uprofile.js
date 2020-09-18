import React from "react";
import { Link } from "react-router-dom";

import Footer from "../Include/Footer";
import Header from "../Include/Header";
import Cookies from "universal-cookie";
import Axios from "axios";


export default class Uprofile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email : "",
      description: ""
    }
  }

  getDetails = async (e) => {
    const cookies = new Cookies();
    await Axios.get("http://localhost:9000/profile", {
      mode: 'cors',
      headers: {
        'Accept': "application/json, text/plain, */*",
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': cookies.get('tkn')
      }}).then((res) => {
        //console.log(res)
        // console.log(res.data.tutor['name'])
      this.setState({
        email: res.data.tutor['name'],
        description: res.data.tutor['description']
      })
        // return window.location = "http://learnee.com:3000"
    }).catch(() => {
      console.log("err while retrieving details")
      //return window.location = "http://learnee.com:3000/error"
    })
    console.log(cookies.get('tkn'))
    // console.log(this.state.email)
  };

  componentDidMount() {
    this.getDetails().then(r => console.log(r)).catch(() => console.log("wtf"));
    console.log(this.state.email)
    console.log(this.state.description)
  }

  render() {
    return (
        <div>
          <header className="header_section user_pro_head">
            <Header />
            {/* banner section start */}
            <div className="container mt_50">
              <div className="row">
                <div className="col-lg-2"/>
                <div className="col-lg-2">
                <div className="media-body">
                  <Link
                      to="/profile/edit"
                      type="button"
                      className="btn btn_login"
                  >
                    Edit Description
                  </Link>
                </div>
                <div className="media-body">
                  <Link
                      to="/profile/addlesson"
                      type="button"
                      className="btn btn_login"
                  >
                    Offer a lesson
                  </Link>
                </div>
                  <div className="media-body">
                    <Link
                        to="/profile/removelesson"
                        type="button"
                        className="btn btn_login"
                    >
                      Remove lesson
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="tutr_pro">
                    <div className="media">
                      <img
                          src={require("../assets/images/profile.png")}
                          alt="tutor_profile"
                          className="img-fluid"
                      />
                      <div className="media-body">
                        <h2>Welcome, {this.state.email}!</h2>
                        <h6>You're currently introduced as:</h6>
                        <h6>{this.state.description}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Footer />
        </div>
    );
  }
}


