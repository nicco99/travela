import React, { useState} from 'react'
import { NavLink,useNavigate} from "react-router-dom"
import "../css/LoginSignup.css";




// {setUser} pass as prop to signup function

function Signup() {

        // add this to app together with login resource
        const [user, setUser] = useState({})
        const [error, setError] = useState({})
const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail ] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function submitHandler(e){
        e.preventDefault()
        fetch("/passengers", {
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
                res.json().then((user) => setUser(user));
                // localStorage.setItem("jwt", user.jwt);
                // localStorage.setItem("passenger", `${user.passenger.id}`);
                navigate("/login")
            }else{
                res.json().then((error) => setError(error))
            }
        })
      
    }


return (
    <div className='form-inner'>
        <h1>Travela SignUp</h1> 

            <form >
                <div className='form-group'>
                    <input 
                        type="text" min="5"
                        name="username" 
                        required = "required"
                        autoComplete="off"   
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}                    
                    />
                    <span></span>
                    <label>Username</label>
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
                    {error ? <p className='text-red-500'>{error.errors}</p>:null }
                    <button className='outline text-sky-400 hover:bg-sky-400 hover:text-white rounded-lg p-2 ' onClick={submitHandler} type="button"  >SIGN IN</button>

                <div className="login_link">
                    Already have an account
                    <NavLink to="/login">Login</NavLink>
                </div>

            </form>
            
    </div>
)
}

export default Signup