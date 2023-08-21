import React, { useContext } from 'react'
import Logout from "../img/Logout.svg"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">WhySocium</span>
      <div className="user">
        <img className="pfp" src={currentUser.photoURL} alt=""/>
        <span className='userName'>{currentUser.displayName}</span>
        <button onClick={() =>signOut(auth)}>
          <img className="logOutIcon" src={Logout} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Navbar