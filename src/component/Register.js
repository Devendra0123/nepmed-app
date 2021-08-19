import React from 'react'
import "./Register.css"

function Register() {
    return (
        <div className="register">
        <div className="register_container">
           <div className="navbar_left register_logo">
             <h1>D</h1>
           </div>    
            <form>
                <label for="#fullname">Fullname</label>
                <input id="fullname" type="text" placeholder="Fullname"/>
                <label for="#email">Email</label>
                <input id="email" type="text" placeholder="Email"/>
                <label for="#password">Password</label>
                <input id="password" type="password" placeholder="Password"/>
                <label for="#confirmpassword">Confirm Password</label>
                <input id="confirmpassword" type="text" placeholder="Confirm Password"/>
                <button type="button">Register</button>
            </form>
        </div>
    </div>
    )
}

export default Register;
