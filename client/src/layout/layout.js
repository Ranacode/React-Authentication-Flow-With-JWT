import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Layout extends Component {
  state = {
    logged: false
  };

  logOut = () => {
    console.log("logout");
    axios({
      method: "POST",
      url: "api/user/logout",
      withCredentials: true
    })
      .then(response => {
        console.log(response);
        this.setState({ logged: false });
      })
      .catch(error => console.log(error.response));
  };

  render() {
    return (
      <div>
        <header className="container">
          <nav className="navbar">
            <h3 className="nav_brand">
              <Link to="/">Publications</Link>
            </h3>
            {!this.state.logged ? (
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>Signup</li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/publications" />
                </li>
                <li>Profile</li>
                <li>
                  <a onClick={this.logOut}>Logout </a>
                </li>
              </ul>
            )}
          </nav>
        </header>
        {this.props.children}
        <footer className="footer">
          <h4>Soy el footer sin nada</h4>
        </footer>
      </div>
    );
  }
}

export default Layout;
