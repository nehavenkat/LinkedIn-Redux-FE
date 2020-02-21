import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Button } from "reactstrap";
import Navigation from "./Navigation";
import Profile from "./Profile";
import CurrentUserPage from "./CurrentUserPage";
import Newsfeed from "./Newsfeed";
import Translator from "./Translator";
import Login from "./Login";
import loginAuth from "./loginAuth";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Container className="parentcontainer">
          <Switch>
            <Route path="/login" exact component={loginAuth} />
            <Route path="/Main" exact component={Translator} />

            <Route path="/Profile" exact component={Profile} />

            <Route
              path="/currentUserPage/:userId"
              component={CurrentUserPage}
            />
            <Route path="/Newsfeed" component={Newsfeed} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default Main;
