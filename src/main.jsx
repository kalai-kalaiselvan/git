import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rout from './Rout'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import People from './People'
import Followers from './Followers'
import Home from './Home'
import Errorhandling from './Errorhandling'
import Login from './Login'
import Register from './Register'
import Dataprovider from './Props'

const router=createBrowserRouter([
  {
    path:'/Rout',
    element:<Rout/>,
    errorElement:<Errorhandling/>
  },
  {
    path:'/People',
    element:<People/>
  },
  {
    path:'/Followers',
    element:<Followers/>
  },
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Login',
    element:<Login/>
  },
  {
    path:'/Register',
    element:<Register/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dataprovider><RouterProvider router={router}/></Dataprovider>
    
  </StrictMode>
)
