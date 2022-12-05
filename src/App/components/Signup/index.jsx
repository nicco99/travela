import React, { useState} from 'react'
import { NavLink} from "react-router-dom"
import "../css/LoginSignup.css"

// {setUser} pass as prop to signup function

function SignupForm() {

        // add this to app together with login resource
        const [user, setUser] = useState("")

    const [fullname, setFullName] = useState("")
    const [email, setEmail ] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function submitHandler(e){
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullname,
                email,
                phone,
                password,
                password_confirmation: passwordConfirmation,
            }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => setUser(user));
            }
        })
    }





return (
    <div className='form-inner'>
        <h1>Travela SignUp</h1> 

            <form onSubmit={submitHandler}>
                <div className='form-group'>
                    <input 
                        type="text" min="5"
                        name="fullname" 
                        required = "required"
                        autoComplete="off"   
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}                    
                    />
                    <span></span>
                    <label>Full Name</label>
                </div>

                <div className='form-group'>
                    <input 
                        type="email" 
                        name="email"
                        required = "required"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span></span>
                    <label>Email</label>
                </div>

                <div className='form-group'>
                    <input 
                        type="phone" min="10" max="12"
                        name="phone" 
                        required = "required"
                        autoComplete="off"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <span></span>
                    <label>Phone</label>
                </div>

                <div className='form-group'>
                    <input 
                        type="password" min="8"
                        name="password"
                        required = "required"
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"                              
                    />
                    <span></span>
                    <label>Password</label>
                </div>

                <div className='form-group'>
                    <input 
                        type="password" 
                        name="password" 
                        required = "required"
                        id="password" 
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        autoComplete="current-password"
                    />
                    <span></span>              
                    <label>Password Confirmation</label>      
                </div>        
                    
                    <input type="submit" value="SIGN IN" />

                <div className="login_link">
                    Already have an account
                    <NavLink to="/">Login</NavLink>
                </div>

            </form>
    </div>
)
}

export default SignupForm