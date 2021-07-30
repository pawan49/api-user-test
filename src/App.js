import React, { useState, useEffect } from "react";
import Users from "./Users";

const url = "https://jsonplaceholder.typicode.com/users";
const App = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(console);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="main">
      <Users users={users} />
    </main>
  );
};

export default App;
