import React from "react";

const Publication = props => (
  <li className="publication">
    <img src={props.src} alt="user_image" />
    <p className="description">{props.text}</p>
    <pre style={{ textAlign: "right" }}>
      {new Date(props.createdAt).toLocaleDateString()}
    </pre>
  </li>
);

export default Publication;
