import React from "react";

const User = ({ name, phone, username, website }) => {
  return (
    <article className="single-user">
      <div className="card">
        <h3>
          <span>Name:-</span> {name}
        </h3>
        <p>
          <span>Phone:-</span> {phone}
        </p>
        <p>
          <span>UserName:-</span> {username}
        </p>
        <p>
          <span>Website:-</span> {website}
        </p>
      </div>
    </article>
  );
};

export default User;
