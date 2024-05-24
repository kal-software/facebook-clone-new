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
          
      <div className="bg-white fixed  top-0 w-full z-10  h-32 md:h-14 lg:h-14   shadow-sm shadow-slate-200 lg:mb-20 ">
        <div className="lg:grid lg:grid-flow-col h-24  md:grid md:grid-flow-col lg:w-16 flex flex-row md:grid grid-flow-col md:col-span-3">
          <div className="lg:grid lg:grid-flow-col   md:grid grid- ">
            <FaFacebook className="text-blue-600 lg:text-3xl text-2xl ml-4   lg:ml-3 mt-4 md:text-3xl md:mt-4"  />
            <input
              type="text"
              placeholder="Search Facebook"
              className="bg-slate-100 md:w-52 md:h-7 text-sm  lg:text-sm pl-7 md:-mt-12  md:pl-8 md:py-1 md:pr-1 md:mr-5 lg:ml-10 ml-12 md:ml-14 focus:outline-none lg:mt-4 lg:py-1 py-2 relative rounded-full mt-3 lg:ml-2 lg:relative hidden sm:block "
            />
            <a href="#">
              <BsSearch className="lg:absolute absolute  top-5 -left-1 md:absolute md:top-5 md:-left-44  ml-60 lg:top-6 lg:left-15 text-md text-slate-500" />
            </a>
          </div>
          <div className="lg:grid lg:grid-flow-col  md:-ml-12 md:grid md:grid-flow-col flex justify-between lg:w-80 -ml-48  w-32 lg:ml-40 mt-20 text-2xl lg:text-xl mt-4  text-slate-500 ">
            <a href="#">
              <BiHomeAlt className="hover:text-black lg:mr-3 lg:ml-3  md:-mr-2 md:ml-3 ml-48  mt-12 lg:mt-1 md:mt-1" />
            </a>
            <a href="#">
              <IoPersonCircleOutline className="hover:text-black  mr-8  mt-12 ml-6 lg:mt-1 md:mt-1 md:mr-5 lg:-ml-1"  />
            </a>
            <a href="#">
              <CiShop className="hover:text-black mr-8 mt-12 -ml-1 lg:mt-1 md:mt-1  " />
            </a>
            <a href="#">
              <PiVideo className="hover:text-black md:mr-44 lg:mr-44   mr-8 mt-12 -ml-1 lg:mt-1 md:mt-1 md:-ml-4" />
            </a>
          </div>
          <div  className="lg:grid lg:grid-flow-col md:grid md:grid-flow-col    md:-ml-80 lg:w-32 flex justify-between -ml-32 lg:ml-80 mt-24  lg:mt-40 text-slate-500  ">
            <a href="#">
              <CgMenuGridO className="lg:bg-slate-200 rounded-full md:text-2xl md:bg-slate-200 ml-96 -mt-9   lg:text-2xl text-3xl p-1   hover:bg-slate-400 lg:-mt-36  md:-mt-20 md:-mr-60 md:ml-96 lg:-ml-1" />
            </a>
            <a href="#">
              <FaFacebookMessenger className="lg:bg-slate-200  md:bg-slate-200  rounded-full text-2xl  lg:text-2xl lg:-mt-36      p-1 hover:bg-slate-400 lg:-ml-1  -ml-1 mr-1 md:text-2xl  -mt-20  md:ml-48 -mr-20"  />
            </a>
            <a href="#">
              <IoNotifications className="lg:bg-slate-200 ml-7  md:bg-slate-200 md:text-2xl lg:-mt-36    lg:-ml-1 rounded-full text-3xl lg:text-2xl p-1  hover:bg-slate-400 -mt-9 -ml-5 md:-mt-20 md:-mr-20 md:ml-7" />
            </a>
            <a href="#">
              <img
                src="./pic50.jpg"
                className="w-6 h-6    rounded-full  invisible md:visible lg:visible lg:-mt-36 md:-mt-20 md:mr-2 lg:mr-1 "
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
