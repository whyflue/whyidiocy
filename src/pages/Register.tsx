import React from 'react'
import "./Register.scss"
import Add from "../img/ImagePlus.svg"

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">WhySocium</span>
            <span className="title">Registration</span>
            <form>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor='file'>
                  <img src={Add} alt=""/>
                  <span>Add an avatar</span>
                </label>
                <button>Sign Up!</button>
            </form>
            <p>Already have an account? Log in</p>
        </div>
    </div>
  )
}

export default Register
