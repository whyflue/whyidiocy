import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find chat'/>
      </div>
      <div className="userChat">
        <img src="https://sun9-36.userapi.com/impg/1B2Zo22g9bTI3c2BM_qm9YtQleiIdvXq0f_JnQ/4QX7K3-T3Ao.jpg?size=736x736&quality=95&sign=f95d5d4e4f381224d500f4ff3235e05d&type=album" alt="" />
        <div className="userChatInfo">
          <span>User0</span>
        </div>
      </div>
    </div>
  )
}

export default Search