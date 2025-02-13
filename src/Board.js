import React from "react";

export default function Board({ id, list_name, content, user_name }) {
  return (
    <div>
      <h2>{list_name}</h2>
      <h5>{user_name}</h5>
      <hr />
      <p>{content}</p>
    </div>
  );
}
