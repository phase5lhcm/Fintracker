import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const LOGIN_URL = "/api/login";

const Login = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const { setAuth } = useContext(AuthContext);
  const [user, setUser] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(" ");
  const [success, setSuccess] = useState(" ");

  // focuses on user input
  useEffect(() => {});

  // remove error messages as user changes inputs in password field
  useEffect(() => {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setUser(" ");
      setPassword(" ");
      setSuccess(true);
      const accessToken = response?.data.accessToken();
      const isAdmin = response?.data.isAdmin;
      setAuth({ user, password, isAdmin, accessToken });
    } catch (error) {
      setError("error: " + error);
    }
  };

  return (
    <div style={{ backgroundColor: "#001f3f", width: "100%" }}>
      {!success ? (
        <section>
          <p>Login successful</p>
        </section>
      ) : (
        <section
          style={{
            backgroundColor: "#add8e6",
            padding: "20px",
            borderRadius: "10px",
            width: "50%",
            margin: "20px auto",
          }}
        >
          <p
            ref={errorRef}
            className={error ? "error: " : "offscreen"}
            aria-live="assertive"
          >
            {error}
          </p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="username"
              style={{ display: "block", marginBottom: "5px" }}
            >
              username
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            ></input>
          </form>
          <form>
            <label
              htmlFor="password"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            ></input>
            <button>Sign in</button>
            <p>Need an account?</p>
            <br />
            <span className="line">
              <a href="#">Sign up</a>
            </span>
          </form>
        </section>
      )}
    </div>
  );
};

export default Login;
