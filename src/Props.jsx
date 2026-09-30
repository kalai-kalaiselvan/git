// import React, { useState } from 'react'
// import './App.css' 

// function Prop(props) {
//   const [geting,setGeting]=useState("follow");
//     function handelFollow(){ 
//         if(geting==="follow"){
//             setGeting("followed")
//         }
//         // else{
//         //     setGeting("following")
//         // }
//       }
//   return (
//     <div className="Card">
//       <div className='images'> 
//          <img src={props.img} alt="" />
//         </div>
      
//         <h2>{props.name}</h2>
//         {/* <button>{props.foll}</button> */}
//         <button onClick={()=>handelFollow()}>{geting}</button>
//  </div>
//   )
// }
// export default Prop;
import React, { createContext, useState } from 'react'
export const dataContext=createContext();
function Dataprovider({children}) {
  
     const [secondpage,setsecondpage]=useState([]);
    const handlecopy=(card)=>{
      if(!secondpage.find(c=>c.id===card.id)){
        setsecondpage([...secondpage,card]);
      }
    }
    const handelRemove=(ids)=>{
      const selvan=secondpage.filter((kalais)=>kalais.id != ids)
      setsecondpage(selvan)
    }
  return (
    <dataContext.Provider value={{secondpage,handelRemove,handlecopy,setsecondpage}}>{children}</dataContext.Provider>
  )
}

export default Dataprovider;