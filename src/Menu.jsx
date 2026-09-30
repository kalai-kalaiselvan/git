import React from 'react'
import './task.css'
import { Link } from 'react-router-dom';
import People from './People';
function Menu() {
  return (
  <div id='menubox'>
    <div className="menu">
        <div className="sub 1"><i id="home-icon" className="fa-solid fa-house"></i><Link to={'/'}>Home</Link></div>
        <div className="sub 2"><i id="home-icon" className="fa-solid fa-circle-user"></i>Profile</div>
        <div className="sub 3"><i id="home-icon" className="fa-solid fa-user-group"></i><Link to={'/People'}>People</Link></div>
        <div className="sub 4"><i id="home-icon" className="fa-solid fa-user-group"></i><Link to={'/Followers'}>Followers</Link></div>
        <div className="sub 5"><i id="home-icon" className="fa-solid fa-user-gear"></i>Settings</div>
        <div className="sub 6"><i id="home-icon" className="fa-solid fa-comment-dots"></i>Send Feedback</div>
    </div>
</div>
  )
}

export default Menu;