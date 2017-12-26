import React, { Component } from "react";
import axios from "axios";
import Publication from "./Publication";

class Publications extends Component {
  state = {
    publications: []
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
    const { publications } = this.state;
    return (
      <div className="publications">
        <button disabled={this.props.disabled} onClick={this.getPublications}>
          Publicaciones
        </button>
        <ul>
          {publications.map((publication, index) => {
            return (
              <Publication
                key={index}
                text={publication.text}
                createdAt={publication.createdAt}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Publications.defaultProps = {
  disabled: true
};

export default Publications;
