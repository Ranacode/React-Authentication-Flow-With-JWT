import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Publications from "./Publications";

const Home = props => {
  const { disabled } = props.location.state || true;
  return (
    <div>
      <div className="formContainer">
        <h2>¡Entra en nuestra aplicación!</h2>
        <h5>Echale un vistazo a las últimas publicaciones</h5>
      </div>

      <Publications disabled={disabled} />
    </div>
  );
};

export default Home;
