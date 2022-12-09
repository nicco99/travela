import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/LoginSignup.css";
function Signup() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [notification,setNotification] = useState(false);

function handleNotification(){
    setNotification((notification) => !notification);
    setTimeout(endNotification, 1000);
}

function endNotification(){
    setNotification((notification) => !notification);
    navigate("/login")
}


  function submitHandler(e) {
    e.preventDefault();
    fetch("https://travela-backend-production.up.railway.app/passengers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        p_number: phone,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => handleNotification());
      } else {
        res.json().then((error) => setError(error));
      }
    });
  }


  return (
    <div className="form-inner">
      <h1>Travela SignUp</h1>
      {notification ? (
        <p className="bg-sky-900 transition-ease-in-out text-white w-full p-3 rounded-md flex flex-row justify-center items-center">
          signup successfull
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
      <form>
        <div className="form-group">
        {error ? <p className="border text-center p-3 text-red-500 outline-none rounded-md w-full mt-2">{error.errors}</p> : null}
          <input
            type="text"
            min="5"
            name="username"
            required="required"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span></span>
          <label>Username</label>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            required="required"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span></span>
          <label>Email</label>
        </div>

        <div className="form-group">
          <input
            type="phone"
            min="10"
            max="12"
            name="phone"
            required="required"
            autoComplete="off"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <span></span>
          <label>Phone</label>
        </div>

        <div className="form-group">
          <input
            type="password"
            min="8"
            name="password"
            required="required"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <span></span>
          <label>Password</label>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            required="required"
            id="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          <span></span>
          <label>Password Confirmation</label>
        </div>
      
        <button
          className="outline text-sky-400 hover:bg-sky-400 hover:text-white rounded-lg p-2 "
          onClick={submitHandler}
          type="button">
          SIGN IN
        </button>

        <div className="login_link">
          Already have an account
          <NavLink to="/login">Login</NavLink>
        </div>
      </form>
    </div>
  );
}

export default Signup;
