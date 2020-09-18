import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/montserat.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "./assets/css/themify-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import { Switch, Route } from "react-router-dom";
import SomethingWentWrong from "./Components/SomethingWentWrong";
import Home from "./Components/Home";
import About from "./Components/About";
import Privacy from "./Components/Privacy";
import Uprofile from "./Components/Uprofile";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import EditProfile from "./Components/EditProfile";
import AddLesson from "./Components/AddLesson";
import OfferedLessons from "./Components/OfferedLessons";
import RemoveLesson from "./Components/RemoveLesson";
// import Root from "./Root";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(text => console.log(text));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/tutors">
                            <OfferedLessons />
                        </Route>
                        <Route exact path="/userprofile">
                            <Uprofile />
                        </Route>
                        <Route exact path="/privacy" component={Privacy} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/profile/edit">
                            <EditProfile />
                        </Route>
                        <Route exact path="/profile/addlesson">
                            <AddLesson />
                        </Route>
                        <Route exact path="/profile/removelesson">
                            <RemoveLesson />
                        </Route>
                        <Route path="*">
                            <SomethingWentWrong />
                        </Route>
                    </Switch>
        )
    }

}

export default () => new App();
