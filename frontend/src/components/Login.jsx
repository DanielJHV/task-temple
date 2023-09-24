import { useState } from "react";
import { loginAPICall } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    loginAPICall(username, password)
      .then((response) => {
        console.log(response);

        navigate("/tasks");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="registration">
      <div className="login__container">
        <span className="login__title">Sign In</span>

        <form className="registration__form">
          <div className="form-section">
            <label className="registration__label">Username</label>
            <input
              className="registration__input"
              placeholder="Username"
              type="username"
              autoComplete="off"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <button className="sign-btn" onClick={(e) => handleLogin(e)}>
            Sign In
          </button>
        </form>
      </div>
      <div className="registration__sign">
        <span className="registration__welcome">Welcome to Task Temple!</span>
        <span className="registration__account-text">
          Don't have an account yet?
        </span>
        <a href="/register" className="registration__sign-btn">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Login;
