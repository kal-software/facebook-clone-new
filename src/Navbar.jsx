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
  <div className="bg-white pt-1 h-full -mb-32 lg:hidden md:hidden ">
<div className="grid grid-flow-col mt-3 ">
  <div>
    <p className="ml-4 text-2xl text-blue-600 font-medium">facebook</p>
  </div>
  <div className="grid grid-flow-col ">
    <BsSearch className="-mr-12 ml-12 text-lg" />
    <FaFacebookMessenger className="text-lg -mr-12" />

  </div>
</div>
<div className="grid grid-flow-col mr-5 text-2xl text-gray-500 mt-2 border-b border-b-1 border-b-gray-300 pb-2 -ml-1">
<div className="ml-5"> 
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
<IoNotifications />

</div>
<div>
<CgMenuGridO />

</div>
</div>

  </div>
  <div className="invisible  bg-white   md:visible lg:visible grid grid-flow-col fixed  lg:w-full md:w-full    pt-5 pb-5  shadow-sm -mt-10">
<div className="grid grid-flow-col ml-5 ">
  <div >
    < FaFacebook className="text-3xl text-blue-600 mr-1 "/>
  </div>
  <div className="grid grid-flow-col">
    <input type="text" placeholder="Search Facebook" className="w-56 rounded-3xl lg:-ml-28 relative md:-ml-4 focus:outline-none placeholder:text-sm   pl-7 bg-gray-200 placeholder:text-black"/>
    < BsSearch className="absolute left-16 mt-2  lg:ml-2 md:ml-2"/>
  </div>
</div>
<div className="grid grid-flow-col text-2xl w-60 ml-24 text-gray-500 md:ml-12">
  <div>
    <Link to="/Body">  <BiHomeAlt className="hover:text-black hover:cursor-pointer" /></Link>

  </div>
  <div>
    <Link to="/Groups">  < IoPersonCircleOutline className="hover:text-black hover:cursor-pointer" /></Link>
  </div>
  <div>
    <Link to="/MarketPlace">  < CiShop className="hover:text-black hover:cursor-pointer" />
</Link>

  </div>
  <div>
    <Link  to="/Vedio">  <PiVideo className="hover:text-black hover:cursor-pointer" /></Link>

  </div>
</div>
<div className="grid grid-flow-col w-60 lg:-mr-56 text-2xl md:-mr-10 ">
  <div>
  <CgMenuGridO className=" bg-gray-300 rounded-full p-1 hover:bg-gray-400 hover:cursor-pointer -mr-10 ml-20"/>

  </div>
  <div>
  <FaFacebookMessenger className="bg-gray-300 rounded-full p-1 hover:bg-gray-400 hover:cursor-pointer -mr-28 ml-2" />

  </div>
  <div>
  <IoNotifications className=" bg-gray-300 rounded-full p-1 hover:bg-gray-400 hover:cursor-pointer -mr-10" />

  </div>
  <div>
    <img src="./pic9.jpg" className="w-6 h-6 rounded-full -mr-10"/>
  </div>
</div>
  </div>

  </>
)
}
export default Navbar          
      