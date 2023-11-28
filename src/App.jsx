import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectRoutes from '../ProjectRoutes/ProjectRoutes'



function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <ProjectRoutes></ProjectRoutes>
      
    </>
  )
}

export default App
