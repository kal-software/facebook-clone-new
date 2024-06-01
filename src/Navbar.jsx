/*import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import { PiVideo } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa6";

*/
import { BrowserRouter as Router,Route,Routes, Link, RouterProvider } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { PiVideo } from "react-icons/pi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";







function Navbar() {
return(
  <>
  <div className="bg-white  lg:hidden md:hidden pt-1 ">
<div className="grid grid-flow-col mt-3 ">
  <div>
    <p className="ml-4 text-2xl text-blue-600 font-medium">facebook</p>
  </div>
  <div className="grid grid-flow-col ">
    <BsSearch className="-mr-12 ml-12 text-lg" />
    <FaFacebookMessenger className="text-lg -mr-12" />

  </div>
</div>
<div className="grid grid-flow-col mr-5 text-2xl text-gray-500 mt-2 border-b border-b-1 border-b-gray-200 pb-2 -ml-1">
<div className="ml-10"> 
<Link Link to="/Body"><BiHomeAlt /></Link> 
</div>
<div>
  <Link  to="/Vedio"><PiVideo/></Link>
</div>
<div>
  <Link to="/Groups">< IoPersonCircleOutline/></Link>

</div>
<div>
  <Link  to="/MarketPlace">< CiShop/></Link>
</div>
<div>
  <Link to="/Group2"><IoNotifications /></Link>


</div>
<div>
<CgMenuGridO />

</div>
</div>

  </div>
  <div className="invisible  bg-white z-10  md:visible lg:visible flex flex-row flex fixed  lg:w-full md:w-full      shadow-md -mt-10 h-14 justify-between pl-2 pr-12">
<div className="flex flex-row  mt-4">
  <div >
    < FaFacebook className="text-3xl text-blue-600 mr-6 "/>
  </div>
  <div className="grid grid-flow-col">
    <input type="text" placeholder="Search Facebook" className="w-56 h-7 rounded-3xl relative md:-ml-4 focus:outline-none placeholder:text-sm   pl-7 bg-slate-100 placeholder:text-black ml-20"/>
    < BsSearch className="absolute left-16 mt-2  lg:-ml-2 md:ml-3 text-sm"/>
  </div>
</div>
<div className="flex flex-row justify-between text-xl   text-gray-500 md:ml-12 mt-4 mr-20">
  <div>
    <Link to="/Body">  <BiHomeAlt className="hover:text-black hover:cursor-pointer" /></Link>

  </div>
  <div>
    <Link to="/Groups">  < IoPersonCircleOutline className="hover:text-black hover:cursor-pointer ml-10" /></Link>
  </div>
  <div>
    <Link to="/MarketPlace">  < CiShop className="hover:text-black hover:cursor-pointer ml-10" />
</Link>

  </div>
  <div>
    <Link  to="/Vedio">  <PiVideo className="hover:text-black hover:cursor-pointer ml-10" /></Link>

  </div>
</div>
<div className="grid grid-flow-col   text-2xl text md:-mr-10 mt-4 ">
  <div>
  <CgMenuGridO className=" bg-gray-200 rounded-full p-1 hover:bg-gray-400 hover:cursor-pointer "/>

  </div>
  <div>
  <FaFacebookMessenger className="bg-gray-200 rounded-full ml-1 p-1 hover:bg-gray-400 hover:cursor-pointer  " />

  </div>
  <div>
  <IoNotifications className=" bg-gray-200 rounded-full p-1 ml-1 hover:bg-gray-400 hover:cursor-pointer  " />

  </div>
  <div>
    <img src="./pic9.jpg" className="w-6 h-6 rounded-full ml-1"/>
  </div>
</div>
  </div>

  </>
)
}
export default Navbar          
      