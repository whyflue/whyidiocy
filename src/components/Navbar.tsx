import React from 'react'
//import "../styles/Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">WhySocium</span>
      <div className="user">
        <img className="pfp" src="https://sun9-36.userapi.com/impg/1B2Zo22g9bTI3c2BM_qm9YtQleiIdvXq0f_JnQ/4QX7K3-T3Ao.jpg?size=736x736&quality=95&sign=f95d5d4e4f381224d500f4ff3235e05d&type=album=load" alt=""/>
        <span className='userName'>User</span>
        <button>Exit</button>
      </div>
    </div>
  )
}

export default Navbar