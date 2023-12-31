import React, { useContext } from 'react'
import '../styles/Chat.scss'
import AddFriendIcon from "../img/AddFriend.svg"
import VideoCallIcon from "../img/VideoCall.svg"
import CallIcon from "../img/Call.svg"
import MoreIcon from "../img/More.svg"
import { Messages } from "../components/Messages"
import { Input } from './Input'
import { ChatContext } from '../context/ChatContext'

export const Chat = () => {
  const {data} = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={AddFriendIcon} alt="" />
          <img src={CallIcon} alt="" />
          <img src={VideoCallIcon} alt="" />
          <img src={MoreIcon} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
