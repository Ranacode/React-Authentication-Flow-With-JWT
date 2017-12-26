import React from "react";

const Publication = props => (
  <li className="publication">
    <p>{props.text}</p>
    <pre>{new Date(props.createdAt).toLocaleDateString()}</pre>
  </li>
);

export default Publication;
