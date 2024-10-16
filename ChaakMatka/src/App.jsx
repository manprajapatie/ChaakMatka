import { useState } from 'react'
import './App.css'
import { Header } from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
// import { UserContextProvider } from './Context/UserContext'

function App() {
  const [count, setCount] = useState(0)
    

  console.log("I am App.jsx")
  return (
    <>
    
    {/* <UserContextProvider>
     </UserContextProvider> */}

     <Header />
     {/* <Outlet /> */}

    </>
  )
}

export default App
