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
    <>
      {success ? (
        <section>
          <p>Login successful</p>
        </section>
      ) : (
        <section>
          <p
            ref={errorRef}
            className={error ? "error: " : "offscreen"}
            aria-live="assertive"
          >
            {error}
          </p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
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
            <label htmlFor="password">Password</label>
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
    </>
  );
};

export default Login;
