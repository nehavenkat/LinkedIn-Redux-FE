import React, { Component } from "react";
import { Button, Form, Label, Input, Row, Col } from "reactstrap";
import ErrorMessage from "./Alerts/ErrorMessage";

let divStyle = {
  position: "absolute",
  top: "28%",
  left: "32%",
  border: "0.5px solid gray",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  backgroundColor: "white",
  padding: "50px",
  width: "500px",
  height: "300px"
};

let labelStyle = {
  width: "80px",
  fontWeight: "bold",
  fontSize: "16"
};

let btnStyle = {
  borderRadius: "10%",
  backgroundColor: "#0088D9",
  border: "none"
};

class Login extends Component {
  state = {
    token: {
      username: "",
      password: ""
    },
    error: false
  };

  handleChange = ev => {
    this.state.token[ev.target.id] = ev.target.value;
  };

  login = async () => {
    this.setState({
      error: false
    });
    let usersToken = btoa(
      this.state.token.username + ":" + this.state.token.password
    );
    // const response = await fetch("http://localhost:3300/user/login", {
    //   body: JSON.stringify({
    //     username,
    //     password
    //   }),
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });
    let response = await fetch(" http://localhost:3300/user/login", {
      method: "POST",
      headers: {
        authorization: "Basic " + usersToken
      }
    });
    if (response.ok) {
      // this.props.history.push('/Profile')
      console.log("response ok");
      this.props.handleLogin();
    } else {
      this.setState({
        error: true
      });
    }
  };
  render() {
    console.log(this.state.token.username);
    return (
      <div style={divStyle}>
        <Form inline>
          <Row className="mb-2">
            <Col md="4">
              <Label style={labelStyle}>Login</Label>
            </Col>
            <Col md="8">
              <Input
                onChange={this.handleChange}
                type="text"
                name="email"
                id="username"
                placeholder="username"
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md="4">
              <Label style={labelStyle}>Password</Label>
            </Col>
            <Col md="8">
              <Input
                onChange={this.handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="don't tell!"
              />
            </Col>
          </Row>
        </Form>
        <div style={{ marginLeft: "150px", marginTop: "40px" }}>
          <Button style={btnStyle} onClick={this.login}>
            Submit
          </Button>
        </div>
        {this.state.error && (
          <ErrorMessage style={{ height: "70px", fontSize: "12px" }} />
        )}
      </div>
    );
  }
}

export default Login;
