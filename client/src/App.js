import React, { Component } from "react";
import Validator from "validator";
import axios from "axios";

class App extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {},
    loading: false,
    logged: false,
    publications: []
  };

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  validate = data => {
    const { email, password } = data;
    const errors = {};

    if (!email || !Validator.isEmail(email)) {
      errors.email = "Este email es inválido";
    }
    if (
      !password ||
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(password)
    ) {
      errors.password =
        "Debe tener al menos una mayúscula, minúscula y un número";
    }

    return errors;
  };

  onSubmit = e => {
    this.setState({ loading: true });
    e.preventDefault();

    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (!(Object.keys(errors).length === 0)) {
      this.setState({ loading: false });
    }

    axios({
      method: "POST",
      url: "api/user/login",
      data: this.state.data
    })
      .then(response => {
        this.setState({ loading: false });
        console.log(response);
      })
      .catch(error => console.error(error));
    /*
    fetch("api/user/login", {
      method: "POST",
      body: JSON.stringify(this.state.data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(json => {
        this.setState({ loading: false });
        console.log(json.message);
      })
      .catch(error => console.error(error));
      */
  };

  getPublications = () => {
    axios({
      withCredentials: true,
      method: "GET",
      url: "api/user/publications",
      headers: {
        "Cache-control": "no-cache",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        this.setState({ publications: response.data.publications });
      })
      .catch(error => console.error(error));

    /*
    fetch("api/user/publications", {
      credentials: "include",
      method: "GET",
      headers: {
        "Cache-control": "no-cache",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(json => {
        console.log(json);
        this.setState({ publications: json.publications });
      })
      .catch(error => console.error(error));
      */
  };

  render() {
    const { errors, publications } = this.state;
    return (
      <div>
        <h2>¡Entra en nuestra aplicación!</h2>
        <h5>Echale un vistazo a las últimas publicaciones</h5>

        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            placeholder="example@hotmail.com"
            type="email"
            onChange={this.onChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            name="password"
            placeholder="93*^TY%aKf"
            type="password"
            minLength="5"
            autoComplete="on"
            onChange={this.onChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          {this.state.loading ? (
            <div className="sk-fading-circle">
              <div className="sk-circle1 sk-circle" />
              <div className="sk-circle2 sk-circle" />
              <div className="sk-circle3 sk-circle" />
              <div className="sk-circle4 sk-circle" />
              <div className="sk-circle5 sk-circle" />
              <div className="sk-circle6 sk-circle" />
              <div className="sk-circle7 sk-circle" />
              <div className="sk-circle8 sk-circle" />
              <div className="sk-circle9 sk-circle" />
              <div className="sk-circle10 sk-circle" />
              <div className="sk-circle11 sk-circle" />
              <div className="sk-circle12 sk-circle" />
            </div>
          ) : (
            <button type="submit">Entrar</button>
          )}
        </form>

        <div className="publications">
          <button onClick={this.getPublications}>Publicaciones</button>
          <ul>
            {publications.map((publication, index) => {
              return (
                <li className="publication" key={index}>
                  <p>{publication.text}</p>
                  <pre>
                    {new Date(publication.createdAt).toLocaleDateString()}
                  </pre>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
