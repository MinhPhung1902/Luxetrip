//Global
import React from 'react'
import './index.css'
import { Routes, Route, Link } from 'react-router-dom'
//pages
import Guide from './pages/Guide'
import Home from './pages/Home'
import Flights from './pages/Flights'
//component
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Footer from './component/Footer'
import WhereToStay from './sub-page/WhereToStay'


const App = () => {
    return (
        <div>  
           <Routes>
               <Route path='/' element={<Home />}></Route>
               <Route path='/Flights' element={<Flights />}></Route>
               <Route path='/Guide' element={<Guide />}></Route>
               <Route path='/Stays' element={<WhereToStay/>}></Route>
           </Routes>
        </div>
    )
}

export default App

