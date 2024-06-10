import React from "react";
import { useRef, useState, useEffect } from "react";

const Login = () => {
  const userRef = useRef();
  const errorRef = useRef();

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
    // for testing purposes I am setting success to true
    setUser(" ");
    setPassword(" ");
    setSuccess(true);
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
