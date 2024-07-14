import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const LOGIN_URL = "/api/login";

const Login = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const { setAuth } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Focus on user input when component is rendered
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Clear error message when user or password changes
  useEffect(() => {
    setError("");
  }, [user, password]);

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
      setUser("");
      setPassword("");
      setSuccess(true);
      const accessToken = response?.data.accessToken;
      const isAdmin = response?.data.isAdmin;
      setAuth({ user, password, isAdmin, accessToken });
    } catch (error) {
      setError("error: " + error.response?.data?.message || error.message);
    }
  };

  return (
    <div style={{ backgroundColor: "#001f3f", width: "100%" }}>
      {success ? (
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
            className={error ? "error" : "offscreen"}
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
              Username
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
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
            />
            <button type="submit">Sign in</button>
          </form>
          <p>Need an account?</p>
          <br />
          <span className="line">
            <a href="#">Sign up</a>
          </span>
        </section>
      )}
    </div>
  );
};

export default Login;
