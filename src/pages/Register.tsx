import React from 'react'
import "./Register.scss"

export const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">WhySocium</span>
            <span className="title">Registration</span>
            <form>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input type="file"/>
                <button>Sign Up!</button>
            </form>
            <p>Already have an account? Log in</p>
        </div>
    </div>
  )
}
