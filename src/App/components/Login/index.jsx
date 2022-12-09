import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/LoginSignup.css";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotify] = useState(false);

  function notifyUser() {
    setNotify((notify) => !notify);
    setTimeout(endNotification, 1000);
  }

  function submitHandler(e) {
    setError(null)
    e.preventDefault();
    fetch("https://travela-backend-production.up.railway.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
            notifyUser();
          localStorage.setItem("jwt", user.jwt);
          localStorage.setItem("passenger", `${user.passenger.id}`);
        });
      } else {
        res.json().then((error) => setError(error));
      }
    });
  }

  function endNotification() {
    setNotify((notify) => !notify);
    navigate("/dashboard");
  }

  return (
    <div className="form-inner">
      <h1>Travela Login</h1>
      {notify? (
        <p className="bg-sky-900 text-white w-full p-3 rounded-md flex flex-row justify-center items-center">
          login successfull
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </p>
      ) : null}
      <form onSubmit={submitHandler}>
        {error ? (
          <p className="border text-center p-3 text-red-500 outline-none rounded-md w-full mt-2">
            {error.errors}
          </p>
        ) : null}
        <div className="form-group">
          <input
            type="email"
            name="email"
            required="required"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span></span>
          <label>Email</label>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            required="required"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span></span>
          <label>Password</label>
        </div>
        <button className="outline text-sky-600 hover:bg-sky-600 hover:text-white text-2xl px-5 place-self-center rounded-lg h-10" type="submit">Login</button>

        <div className="signup_link">
          Not a member?
          <NavLink to="/signup">Signup</NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;
