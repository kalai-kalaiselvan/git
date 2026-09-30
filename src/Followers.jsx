import React, { useContext } from 'react'
import './task.css'
import { Link } from 'react-router-dom'
import Rout from './Rout'
import { dataContext } from './Props'
function Followers() {

  const {secondpage,handelRemove}=useContext(dataContext)|| []
 
  return (
  <div>
      <Rout/>
    <div className='followers'><h1>Following</h1></div>
      <div className='Card-container'>
       { secondpage.length === 0 ? <p id='ADD'>Add new followers</p>:
        secondpage.map((kalai)=>(
                      <div key={kalai.id} className="Card">
              <div className='images'><img src={kalai.img}/></div>
              <h2>{kalai.name}</h2>
              <button id='Remove1' onClick={()=>handelRemove(kalai.id)}>Unfollow</button>
              <h2 id='Remove2' >followed</h2>
            </div>
        ))

        }
        </div>
    
    
  </div>
  )
}

export default Followers;