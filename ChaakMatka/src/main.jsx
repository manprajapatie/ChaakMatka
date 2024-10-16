import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Component/Home/Home.jsx'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App/> }>
      <Route path='' element={ <Home/> }/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router} />

  </StrictMode>
)
console.log("I am main")