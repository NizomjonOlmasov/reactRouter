import React from 'react'

import { Route,Routes } from 'react-router-dom'
import {Main,Login,Registr}from './component'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route path='/registr' element={<Registr/>}/>
      </Routes>
    </div>
  )
}

export default App