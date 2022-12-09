import React, { useState } from 'react'
import { NavLink,useNavigate} from "react-router-dom"
import "../css/LoginSignup.css";


// {setUser} pass as prop to login function

function Login({setUser}) {
const navigate = useNavigate()
    // add this to app together with login resource
    // const [user, setUser] = useState("")
    const [error, setError] = useState({})
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function submitHandler(e){
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
                    console.log(user)
                    localStorage.setItem("jwt", user.jwt);
                    localStorage.setItem("passenger", `${user.passenger.id}`);
                    setUser(user)
                navigate("/dashboard")
                });
            } else {
                console.log(res.json().then(error=>setError(error)))
            }
        })
    }

    return (
        <div className='form-inner'>
            <h1>Travela Login</h1> 

            <form onSubmit={submitHandler}>      
                <div className='form-group'>
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

                <div className='form-group'>
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
                    { error ? <p>{error.errors}</p>:null}
                    <input type="submit" value="Login" />
                
                <div className="signup_link">
                    Not a member?
                    <NavLink to="/signup">Signup</NavLink>
                </div>
            </form>
           
        </div>
    )
}

export default Login