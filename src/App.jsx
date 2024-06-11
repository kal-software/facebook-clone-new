import React from 'react';
import { BrowserRouter as Router,Route,Routes, Link, RouterProvider } from "react-router-dom"
import Navbar from "./Navbar"
import Body from './Body';
import MarketPlace from './MarketPlace';
import Groups from './Groups';
import Vedio from './Vedio';
import Group2 from './Group2';
import Navbar2 from './Navbar2';
import HomePage from './HomePage';
/*
import Groups from './Groups';
import Navbar from "./Navbar"
*/



function App() {
  return (
/*   
     <>
   <Router>
  <Navbar/>
      <Routes>
      <Route path='/' element={<Body/>} className = "routes-body"/>
      <Route path='/Body' element={<Body/>}/>
      <Route path='/Groups' element={<Groups/>} className="routes-group"/>
      <Route path='/MarketPlace' element={<MarketPlace/>}/>
      <Route path='/Vedio' element={<Vedio/>}/>
      <Route path='/Group2' element={<Group2/>}/>

 </Routes>
    </Router>
     </>
    
      
    
/*<>
<div> 
  <Navbar/>
  <Group2/>
</div>
</> 
*/
<>
<div>
  <Navbar2/>
  <HomePage/>

</div>
</>
  )
}

export default App

