import React, { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const[time,setTime]=useState(new Date().toLocaleTimeString());
  const[seconds,setSeconds]=useState(0);
  const[isRunning,setIsrunning]=useState(false);
  const intervalRef=useRef(null);
  const updateTime=()=>{
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(updateTime,1000); 

  useEffect(()=>{
    if(isRunning){
      intervalRef.current=setIsrunning(()=>{
        setSeconds(prev=> prev+1);
      },1000);
    }else{
      clearInterval(intervalRef.current);
    }
    return()=>clearInterval(intervalRef.current);
  },[isRunning]);
  return (
    <div className='time'>
      <h1>{time}⌚</h1>
      {/* <h2>{seconds}</h2> */}
      {/* <button onClick={()=>setIsrunning(true)}>Start</button> */}
      {/* <button onClick={()=>setIsrunning(false)}>Pause</button>   */}
      {/* <button onClick={()=>{setIsrunning(false);setSeconds(0);}}>Reset</button> */}

    </div>
  )
}

export default App;