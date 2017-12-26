import React, { Component } from "react";
import Validator from "validator";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginForm} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
