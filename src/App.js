import "./styles/styles.css";
import "./styles/bootstrap.min.css";
import React, { useState } from "react";
import Navigationbar from "./components/Navigationbar";
import Button, { CustomButton } from "./components/Button";
import { Route, Switch, Redirect } from "react-router-dom";

export default function App() {
  const _link = [
    {
      name: "Home",
      link: "/home"
    },
    {
      name: "Signup",
      link: "/signup"
    },
    {
      name: "Register",
      link: "/register"
    }
  ];

  return (
    <div className="App">
      <Navigationbar links={_link} />
      <Switch>
        <Route path="/home" />
        <Route path="/signup" />
        <Route path="/register" />
        <Route path="/home" />
        <Route path="/searchfortutors" />
      </Switch>

      <div>
        <br />
        <br />
        <br />
        <p>Hello</p>
        <Button title="Log In" />
        <CustomButton variant="secondary" title="I'm a button!" />
      </div>
    </div>
  );
}
//
//<Button title="Log In" />
//<Button color="#000000" title="Sign Up" />
//
