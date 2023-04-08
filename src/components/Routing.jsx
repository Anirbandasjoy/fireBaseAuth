import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Register from './pages/Register'

const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        
         <Routes>

            <Route path='/' element = {<Home />}/>
            {/* <Route path='/about' element = {<About />}/>
            <Route path='/service' element = {<Service />}/> */}
            <Route path='/register' element = {<Register />}/>

         </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default Routing