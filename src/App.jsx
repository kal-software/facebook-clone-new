import React from 'react';
import { BrowserRouter as Router,Route,Routes, Link, RouterProvider } from "react-router-dom"
import Navbar from "./Navbar"
import Body from './Body';
import MarketPlace from './MarketPlace';
import Groups from './Groups';
import Vedio from './Vedio';



function App() {
  
    return (
     <>
   <Router>
  <Navbar/>
      <Routes>
      <Route path='/' element={<Body/>} className = "routes-body"/>
      <Route path='/Body' element={<Body/>}/>
      <Route path='/Groups' element={<Groups/>} className="routes-group"/>
      <Route path='/MarketPlace' element={<MarketPlace/>}/>
      <Route path='/Vedio' element={<Vedio/>}/>
 </Routes>
    </Router>
     </>
      
    
 
  )
}

export default App

