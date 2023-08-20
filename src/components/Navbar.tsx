import React from 'react'
import Logout from "../img/Logout.svg"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">WhySocium</span>
      <div className="user">
        <img className="pfp" src="https://sun9-36.userapi.com/impg/1B2Zo22g9bTI3c2BM_qm9YtQleiIdvXq0f_JnQ/4QX7K3-T3Ao.jpg?size=736x736&quality=95&sign=f95d5d4e4f381224d500f4ff3235e05d&type=album=load" alt=""/>
        <span className='userName'>Clown</span>
        <button onClick={() =>signOut(auth)}>
          <img className="logOutIcon" src={Logout} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Navbar