import React from 'react'
import './task.css'
import { Link } from 'react-router-dom';

function Taskbar() {
  return (
    <div className='Task-main'>
        <div>
            <nav>
                <ul>
                    <li className="fa-solid fa-bars"></li>
                    <li>Green</li>
                    <span id='line'>{"|"}</span>
                    <li>People</li>
                    
                </ul>
            </nav>
             <div className="login"><Link to={"/Login"}><button>login</button></Link>
             <i id='bell'className="fa-solid fa-bell"></i>
             </div>
        </div>
       
    </div>
  )
}

export default Taskbar;