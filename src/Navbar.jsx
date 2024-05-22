import React from "react";
//import { BrowserRouter as Router,Route,Routes, Link, RouterProvider } from "react-router-dom"
import { BsSearch } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import { PiVideo } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa6";

function Navbar() {
  return (
    <>
          
      <div className="bg-white fixed top-0 w-full  h-32 md:h-14 lg:h-14   shadow-sm shadow-slate-200 lg:mb-20 ">
        <div className="lg:grid lg:grid-flow-col  md:grid md:grid-flow-col lg:w-16 flex flex-row md:grid grid-flow-col">
          <div className="lg:grid lg:grid-flow-col   md:grid grid- ">
            <FaFacebook className="text-blue-600 lg:text-3xl text-2xl ml-4  lg:ml-3 mt-4 md:text-3xl" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="bg-slate-100 md:w-52 md:h-7 text-sm  lg:text-sm pl-7 md:-mt-7 md:pl-8 md:py-1 md:pr-1 md:mr-5 lg:ml-10 ml-12 md:ml-14 focus:outline-none lg:mt-4 lg:py-1 py-2 relative rounded-full mt-3 lg:ml-2 lg:relative hidden sm:block "
            />
            <a href="#">
              <BsSearch className="lg:absolute absolute  top-5 left-10 md:absolute md:top-6 md:-left-44  ml-60 lg:top-6 lg:left-15 text-md text-slate-500" />
            </a>
          </div>
          <div className="lg:grid lg:grid-flow-col  md:grid md:grid-flow-col flex justify-between lg:w-80 -ml-48  w-32 lg:ml-40 mt-20 text-2xl lg:text-xl mt-4  text-slate-500">
            <a href="#">
              <BiHomeAlt className="hover:text-black mr-6 ml-3 " />
            </a>
            <a href="#">
              <IoPersonCircleOutline className="hover:text-black  mr-8 " />
            </a>
            <a href="#">
              <CiShop className="hover:text-black mr-8  " />
            </a>
            <a href="#">
              <PiVideo className="hover:text-black mr-44  " />
            </a>
          </div>
          <div className="lg:grid lg:grid-flow-col md:grid md:grid-flow-col md:mt-3 md:w-5 md:ml-10  lg:w-32 flex justify-between -ml-32 lg:ml-80 mt-24  lg:mt-4 text-slate-500  ">
            <a href="#">
              <CgMenuGridO className="lg:bg-slate-200 rounded-full md:bg-slate-200   lg:text-2xl text-3xl p-1   hover:bg-slate-400" />
            </a>
            <a href="#">
              <FaFacebookMessenger className="lg:bg-slate-200 md:ml-2 md:bg-slate-200  rounded-full text-2xl  lg:text-2xl  p-1 hover:bg-slate-400 lg:-ml-1 ml-72 -mt-20 " />
            </a>
            <a href="#">
              <IoNotifications className="lg:bg-slate-200 ml-6 md:ml-2 md:bg-slate-200 md:text-3xl  lg:-mr-3 rounded-full text-3xl lg:text-2xl p-1  hover:bg-slate-400" />
            </a>
            <a href="#">
              <img
                src="./pic50.jpg"
                className="w-6 h-6 ml-6 rounded-full md:mt-1 lg:mt-0   "
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
