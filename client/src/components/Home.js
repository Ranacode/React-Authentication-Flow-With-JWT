import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Publications from "./Publications";

const Home = () => (
  <div>
    <div className="formContainer">
      <h2>¡Entra en nuestra aplicación!</h2>
      <h5>Echale un vistazo a las últimas publicaciones</h5>
    </div>

    <Publications />
  </div>
);

export default Home;
