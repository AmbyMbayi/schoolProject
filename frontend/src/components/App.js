import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import Header from "./layout/Header";
import Dashboard from "./schools/Dashboard";
import TeachersDashboard from "./teachers/TeachersDashboard";

import Home from "./pages/Home";

import Login from "./accounts/Login";
import Register from "./accounts/Register";

import SingleSchool from "./schools/SingleSchool";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Dashboard} />

                <Route exact path="/teachers" component={TeachersDashboard} />

                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
