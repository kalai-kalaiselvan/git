import React, {createContext, useContext, useState } from 'react'
import './App.css' 
import Rout from './Rout';
import img1 from './assets/img1.webp'
import img2 from './assets/img2.webp'
import img3 from './assets/img3.webp'
import img4 from './assets/img4.webp'
import img5 from './assets/img5.webp'
import img6 from './assets/img6.jpg'; 
import { dataContext } from './Props';

function People() {
  const {handlecopy}=useContext(dataContext) ||[]
   const [geting,setGeting]=useState("follow");
      function handelFollow(){ 
        if(geting==="follow"){
             setGeting("followed")
        }
      }
      
  // const useFetch=(url)=>{
    

  //   return[secondpage]
  // }
    const [data,setData]=useState([
        {id:5,img:img6,name:"Iron Man",foll:"follow"},
        {id:1,img:img1,name:"Captain America",foll:"follow"},
        {id:2,img:img2,name:"Batman",foll:"follow"},
        {id:3,img:img3,name:"Strange",foll:"follow"},
        {id:4,img:img4,name:"Black Panther",foll:"follow"},
        {id:8,img:img5,name:"Thanos",foll:"follow"},
        {id:6,img:img1,name:"Captain America",foll:"follow"},
        {id:7,img:img2,name:"Batman",foll:"follow"},
        {id:9,img:img4,name:"Black Panther",foll:"follow"}
    ]);

//     const values=data.map((kalai)=>(
//         <Prop
//         key={kalai.id}
//         img={kalai.img}
//         name={kalai.name}
//         foll={kalai.foll}
//         copy={()=>handlecopy(kalai)}
//        />       =// ))
  
  return (
<div > 
    <Rout/>
    {/* <People>
      <Followers/>
    </People> */}
    <h2 id='sugges'>suggestions for you</h2>
      <div className='Card-container'>
          {/* {values} */}
          {data.map((kalai)=>(
            <div key={kalai.id} className="Card">
              <div className='images'><img src={kalai.img}/></div>
              <h2>{kalai.name}</h2>
              <button onClick={()=>handlecopy(kalai)}>{geting}</button>


            </div>
       ))}
    

      </div>
</div>
  )

}

export default People;

   