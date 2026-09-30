import React from 'react'
import './Home.css'
import Rout from './Rout'
import food1 from './assets/food1.webp'
import food2 from './assets/food2.png'
import food3 from './assets/food3.webp'
import food4 from './assets/food4.png'
import food5 from './assets/food5.png'
import food6 from './assets/food6.webp'
import food8 from './assets/food8.webp'




// function DotsPage(){
//   return(
//     <div className='dots-page'>
//       <h1>kalai</h1>
//     </div>
//   )
// }

function Home(Props) {
  return (
    <div>
      <Rout/>
        <div className='Home'>
          <div className='dots-page'>
            <div id='tittel'>
              <p style={{fontFamily: "Imperial Script, cursive",fontWeight:'900',fontSize:'60px',color:'lightbrown'}}>Daily Healthy Plate</p>
              <h1>PLANNER.</h1>
              <p style={{fontSize:'20px',color:' rgb(0, 92, 0)'}}>Creae a balanced meal every day -- for energy,focus, and a happier body!</p>       </div>
          <div>
            <div className='circule'>
              <div className='circulebox1'><p id='text'>Carbohydrate</p></div>
              <div className='circulebox2'><p id='text'>Protein</p></div>
              <div className='circulebox3'><p id='text'>Fruits</p></div>
              <div className='circulebox4'><p id='text'>Vegetables</p></div>
              <div className='innercircule'><p>Fill your plate with color!</p></div>

            </div>
            <div className="schedule">
             <div className="breakfast">
               <form className='foodbox1'>
                <fieldset>
              <legend>Lunch</legend>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
              </fieldset>
              </form>
               <form className='foodbox2'>
                <fieldset>
              <legend>Breakfast</legend>
                <ul>
                  <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
              </fieldset>
              </form>
              </div>
              <div className="Dinner">
               <form className='foodbox1'>
                <fieldset>
              <legend>Snacks</legend>
                <ul>
                  <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
              </fieldset>
              </form>
               <form className='foodbox2'>
                <fieldset>
              <legend>Dinner</legend>
                <ul>
                  <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
              </fieldset>
              </form>
              </div>
            </div>
            <div className="notes"><h4>Notes or Refleecations</h4></div>
            <div className="gole">
              <div className="step"><p>Goal:8 glasses a day!</p><p>💧💧💧💧💧💧💧💧</p></div>
              <div className="step"><p>How I Feel After Meal</p><h3>😒😥🤨☺️</h3>
              {/* <i class="fa-regular fa-face-frown"></i> */}
              </div>
              <div className="step"><p>Small steps,strong results-every plate matters!</p></div>
            </div>
            <div className="imgs1"><img src={food2}/></div>
            <div className="imgs2"><img src={food1} /></div>
            <div className="imgs3"><img src={food3}/></div>
            <div className="imgs4"><img src={food4} alt="" /></div>
            <div className="imgs5"><img src={food5} /></div>
            <div className="imgs6"><img src={food6} /></div>
            <div className="imgs7"><img src={food8} /></div>
            
          </div>
      </div>
        </div>
    </div>
  )
}

export default Home