import React, { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("mumbai");
  const [msg, setMsg] = useState("Hello");
  const [accept, setAccept] = useState(true);

  function submitHandler(event) {
    event.preventDefault();

    // console.log(event.target.username.value);
    // console.log(event.target.email.value);

    // console.log(event.target[0].value);
    // console.log(event.target[1].value);

    // console.log(username + " " + email);

    console.log(username, gender, city, msg);
  }
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
          name=""
          id=""
        >
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
          <option value="chenai">chenai</option>
        </select>
        <br /> <br />
        <textarea
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          name="msg"
          id=""
          cols="30"
          rows="5"
        ></textarea>
        <br />
        <br />
        <input
          onChange={(e) => setGender(e.target.value)}
          value="male"
          checked={gender === "male" ? true : false}
          type="checkbox"
          name="male"
          id=""
        />
        male
        <input
          onChange={(e) => setGender(e.target.value)}
          value="feamle"
          checked={gender === "feamle" ? true : false}
          type="checkbox"
          name="female"
          id=""
        />
        female
        <br /> <br />
        <input
          onChange={(e) => setAccept(e.target.checked)}
          checked={accept ? true:false}
          type="radio"
          name="radio"
          id="acceptRadio"
        />
        Accept
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
