import React from "react";
import User from "./User";

const Users = ({ users }) => {
  return (
    <section className="users">
      <h1 className="title">Our Users</h1>
      <div className="card-wrapper">
        {users.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </div>
    </section>
  );
};

export default Users;
