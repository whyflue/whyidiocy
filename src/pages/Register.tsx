import React, {useState} from 'react'
import "../styles/Register.scss"
import Add from "../img/ImagePlus.svg"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"

export const Register = () => {
  
  const [err, setErr] = useState<boolean | Error>(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try { 
      const res = await createUserWithEmailAndPassword(auth, email, password)
    }catch(err){
      setErr(true);
    }

  }

  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">WhySocium</span>
            <span className="title">Registration</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor='file'>
                  <img src={Add} alt=""/>
                  <span>Add an avatar</span>
                </label>
                <button>Sign Up!</button>
                {err && <span>Smth went wrong</span>}
            </form>
            <p>Already have an account? Log in</p>
        </div>
    </div>
  )
}
