import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Publications from "./Publications";

class Home extends Component {
  state = {
    logged: false,
    disabled: true
  };

  componentDidMount() {
    if (document.cookie) {
      this.setState({ logged: true, disabled: false });
    }
  }

  logOut = () => {
    axios({
      method: "POST",
      url: "api/user/logout",
      withCredentials: true
    })
      .then(response => {
        this.setState({ logged: false, disabled: true });
      })
      .catch(error => console.log(error.response));
  };
  render() {
    return (
      <div>
        <Navbar logged={this.state.logged} logOut={this.logOut} />
        <div className="container-basic">
          <h2>¡Entra en nuestra aplicación!</h2>
          <h5>Echale un vistazo a las últimas publicaciones</h5>
        </div>
        <Publications
          logged={this.state.logged}
          disabled={this.state.disabled}
        />
      </div>
    );
  }
}

export default Home;
