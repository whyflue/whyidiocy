import React from 'react'
import AttachIcon from "../img/Attach.svg"
import SendIcon from "../img/Send.svg"


export const Input = () => {
  return (
    <div className='input'>
      <input type="file" style={{display:"none"}} id="file"/>
      <label htmlFor="file">
        <img className="attach" src={AttachIcon} alt="" />
      </label>
      <input type="text" placeholder='Input message'/>
      <button className="send">
        <img src={SendIcon} alt="" />
      </button>
    </div>
  )
}
