import React, { useState } from 'react'

const OnClick = () => {
  const [user, setUser] = useState('')
  const HandlerClick=(e)=>{
    setUser(e.target.value)
  }
  return (
    <div>
      <input type="text" placeholder='Username' name="username" value={user}/>
      <input tyle="submit" value="Submit" onClick={HandlerClick}/>
      <p>{user}</p>
    </div>
  )
}

export default OnClick
