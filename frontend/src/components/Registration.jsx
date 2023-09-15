import { useState } from "react";
import { registerAPICall } from "../services/AuthService";

function Registration() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegistration(e) {
    e.preventDefault();

    const register = { name, username, email, password };

    registerAPICall(register)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="registration">
      <div className="registration__container">
        <span className="registration__title">Sign Up</span>

        <form className="registration__form">
          <div className="form-section">
            <label className="registration__label">Name</label>
            <input
              className="registration__input"
              placeholder="Name"
              type="text"
              autoComplete="off"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="form-section">
            <label className="registration__label">Username</label>
            <input
              className="registration__input"
              placeholder="Username"
              type="text"
              autoComplete="off"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>

          <div className="form-section">
            <label className="registration__label">Email</label>
            <input
              className="registration__input"
              placeholder="Email"
              type="email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="form-section">
            <label className="registration__label">Password</label>
            <input
              className="registration__input"
              placeholder="Password"
              type="password"
              autoComplete="off"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="sign-btn" onClick={(e) => handleRegistration(e)}>
            Sign Up
          </button>
        </form>
      </div>
      <div className="registration__sign">
        <span className="registration__welcome">Welcome to Task Temple!</span>
        <span className="registration__account-text">
          Already have an account?
        </span>
        <a href="/login" className="registration__sign-btn">
          Sign In
        </a>
      </div>
    </div>
  );
}

export default Registration;
