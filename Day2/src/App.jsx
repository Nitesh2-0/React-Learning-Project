import React, { useState } from "react";
// import css from "./App.module.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("mumbai");
  const [msg, setMsg] = useState("Hello");
  const [accept, setAccept] = useState(true);

  function submitHandler(event) {
    event.preventDefault();
    const newUser = { username, gender, city, msg, email };
    setUsers([...users, newUser]);
    console.log(newUser);

    setUsername("")
    setEmail("")
    setMsg("")
    setAccept("")

  }

  let listUser = users.length > 0 ? (
    users.map((user, index) => (
      <div key={index}>
        <h1>{user.username}</h1>
        <p>{user.city}</p>
      </div>
    ))
  ) : (
    <h1>No Data Present</h1>
  );  

  // const x = {fontSize:"50px", color:"purple"}

  return (
    <div>
      <h1>Two Way Binding</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(evt) => setUsername(evt.target.value)}
          value={username}
          type="text"
          name="username"
          placeholder="enter username"
        />
        <br />
        <br />
        <input
          onChange={(evt) => setEmail(evt.target.value)}
          value={email}
          type="email"
          name="email"
          placeholder="enter email"
        />
        <br />
        <br />
        <select
          defaultValue={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          name="city"
        >
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
          <option value="chennai">Chennai</option>
        </select>
        <br /> <br />
        <textarea
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          name="msg"
          cols="30"
          rows="5"
        ></textarea>
        <br />
        <br />
        <input
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "male"}
          type="radio"
          name="gender"
          value="male"
        />
        male
        <input
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "female"}
          type="radio"
          name="gender"
          value="female"
        />
        female
        <br /> <br />
        <input
          onChange={(e) => setAccept(e.target.checked)}
          checked={accept}
          type="checkbox"
          name="accept"
        />
        Accept
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <hr />
      {listUser}
    </div>
  );
}

