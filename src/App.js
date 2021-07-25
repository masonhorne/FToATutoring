import "./styles/styles.css";
import "./styles/bootstrap.min.css";
import React, { useEffect, useState } from "react";

//Firebase
import initFirebase from "./auth/firebase.auth";
import firebase from "firebase";

//Navigation
import AuthNavigationbar from "./components/NavigationBar/Navigationbar.auth";
import TutorNavigationbar from "./components/NavigationBar/Navigationbar.tutor";
import StudentNavigationbar from "./components/NavigationBar/Navigationbar.student";
import { Route, Switch, Redirect, BrowserRouter, Link } from "react-router-dom";

//Auth Routes
import HomeAuth from "./components/auth/home";
import StudentRegister from "./components/auth/Register/register.student";
import TutorRegister from "./components/auth/Register/register.tutor";
import Signin from "./components/auth/signin";
import Signout from "./components/auth/signout";

//Tutoring (Logged In)
import Hub from "./components/tutoring/hub";

//Tutors
import SeeStudents from "./components/tutoring/tutor";

//Students
import TutorSearch from "./components/tutoring/tutor.search";
import SeeCourses from "./components/tutoring/student";

//Misc
import Test from "./components/test/test";
import Misc from "./components/misc/Re";

function TutorView() {
  return (
    <BrowserRouter>
      <div className="App">
        <TutorNavigationbar />
        <Switch>
          <Route path="/see-students" component={SeeStudents} />
          <Route path="/home">
            <Redirect to="/see-students" />
          </Route>
          <Route path="/signout" component={Signout} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function StudentView() {
  return (
    <BrowserRouter>
      <div className="App">
        <StudentNavigationbar />
        <Switch>
          <Route path="/display-course" component={SeeCourses} />
          <Route path="/tutor-home" component={Hub} />
          <Route path="/searchfortutors" component={TutorSearch} />
          <Route path="/signout" component={Signout} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function AuthView() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthNavigationbar />
        <Switch>
          <Route path="/" exact component={Misc} />
          <Route path="/home" component={HomeAuth} />
          <Route path="/signin" component={Signin} />
          <Route path="/register-tutor" component={TutorRegister} />
          <Route path="/register-student" component={StudentRegister} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default function App() {
  initFirebase();

  const [loggedin, setLoggedin] = useState(false);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    checkUser();
  });

  function checkUser() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setLoggedin(true);
        console.log(loggedin);
        const tutorRef = firebase.firestore().collection("tutors");

        const tutorSnapshot = await tutorRef
          .where("uid", "==", firebase.auth().currentUser.uid)
          .get();

        if (!tutorSnapshot.empty) {
          setUserType("tutor");
          console.log(userType);
        } else {
          setUserType("student");
          console.log(userType);
        }
      } else {
        setLoggedin(false);
        console.log(loggedin);
      }
    });
  }

  if (loggedin) {
    if (userType === "tutor") {
      return TutorView();
    }
    console.log(``);
    return StudentView();
  }

  return AuthView();
}

//
//<Button title="Log In" />
//<Button color="#000000" title="Sign Up" />
//
