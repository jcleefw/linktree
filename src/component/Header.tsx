import React from 'react'
import { ReactSVG } from 'react-svg'

type HeaderProp = {
  profilePicUrl: string
  username: string
}

const Header: React.FC<HeaderProp> = ({ profilePicUrl, username }) => {
  return (
    <header className="header">
      <img src={profilePicUrl} className="profile-pic" alt={username} />
      <span className="profile-username">{username}</span>
    </header>
  )
}

export default Header
