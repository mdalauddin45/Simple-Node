import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);
    e.target.reset();
  };
  return (
    <div className="App">
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder="Enter your name" />{" "}
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter your email"
        />{" "}
        <br />
        <button type="submit"> Add user</button>
      </form>
      <h1>user:{user.length}</h1>
      <div>
        {user.map((user) => (
          <p key={user.id}>
            {user.name} {user.email}{" "}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
