import React from 'react'
import "../styles/Sidebar.scss"
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}
