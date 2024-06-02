import { FaFacebook } from "react-icons/fa";
//import { BsSearch } from "react-icons/bs";
//import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { RiGroup2Line } from "react-icons/ri";
import { RiGamepadLine } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa6";

function Navbar2() {
  return (
    <>
    <div className="flex flex-row justify-between bg-white shadow-md h-14 pl-4 pr-4 md:pr-5 invisible md:visible lg:visible">
      <div className="flex flex-row mt-2">
        <FaFacebook className="text-4xl text-blue-600 w-10 h-10 " />
        <IoIosSearch className="text-gray-500 bg-slate-100 w-10 h-10  rounded-full p-2 ml-2" />
      </div>
   
      <div className="flex flex-row text-gray-500 mt-4 justify-between lg:ml-28">
      <div class="relative inline-block group">
  <i class="fa fa-home active:text-blue-500 active:bg-transparent "><FiHome  className=" md:mr-10 text-2xl lg:-ml-12 lg:mr-20 md:h-6 md:hover:bg-gray-200  lg:h-6 md:hover:w-20   lg:hover:bg-gray-200 lg:hover:w-20 md:hover:h-10 md:w-20   lg:hover:h-10 lg:w-20 h-10 lg:hover:p-2 lg:hover:-mt-2 lg:hover:rounded-md md:hover:p-2 md:hover:-mt-2 md:hover:rounded-md "/>
</i>
  <span class="invisible absolute z-10 w-auto px-3 py-2 mt-2 md:ml-3 lg:-ml-10  min-w-max rounded-md shadow-md bg-gray-700 text-white text-xs group-hover:visible">
    Home
  </span>
</div>
<div class="relative inline-block group">
  <i class="fa fa-home"><MdOutlineOndemandVideo className="md:mr-5 text-2xl  lg:mr-12  lg:h-6 lg:hover:bg-gray-200 md:h-6 md:hover:bg-gray-200 lg:hover:w-20 md:hover:w-20 lg:hover:h-10 lg:hover:p-2 lg:hover:-mt-2 lg:hover:rounded-md lg:w-20 h-10 md:hover:h-10 md:w-20 md:hover:p-2 md:hover:-mt-2 md:hover:rounded-md " />

</i>
  <span class="invisible absolute z-10 w-auto px-3 py-2 mt-2 ml-3  min-w-max rounded-md shadow-md bg-gray-700 text-white text-xs group-hover:visible">
    Vedio
  </span>
</div>
<div class="relative inline-block group">
  <i class="fa fa-home"> 
  <CiShop className="md:mr-5 text-2xl lg:mr-12 font-bold  lg:h-6 lg:hover:bg-gray-200 md:h-6 md:hover:bg-gray-200 lg:hover:w-20 lg:hover:h-10 md:hover:w-20 lg:hover:p-2 lg:hover:-mt-2 lg:hover:rounded-md lg:w-20 h-10 md:hover:h-10 md:w-20 md:hover:p-2 md:hover:-mt-2 md:hover:rounded-md" />
</i>
  <span class="invisible  absolute z-10 w-auto px-3 py-2 mt-2 -ml-1  min-w-max rounded-md shadow-md bg-gray-700 text-white text-xs group-hover:visible">
    MarketPlace
  </span>
</div>
<div class="relative inline-block group">
  <i class="fa fa-home">
    <RiGroup2Line className=" md:hover:h-10 md:w-20 md:hover:w-20 md:hover:bg-gray-200 md:hover:p-2 md:hover:-mt-2 md:hover:rounded-md md:mr-5 text-2xl  lg:mr-12  lg:h-6 lg:hover:bg-gray-200 lg:hover:w-20 lg:hover:h-10 lg:hover:p-2 lg:hover:-mt-2 lg:hover:rounded-md lg:w-20 "/>
</i>
  <span class="invisible absolute z-10 w-auto px-3 py-2 mt-2 ml-3  min-w-max rounded-md shadow-md bg-gray-700 text-white text-xs group-hover:visible">
   Groups
  </span>
</div>
<div class="relative inline-block group">
  <i class="fa fa-home"><RiGamepadLine className="md:hover:h-10 md:w-20 md:hover:p-2 md:hover:-mt-2 md:hover:rounded-md  md:h-6 md:hover:bg-gray-200 md:hover:w-20  md:mr-6 text-2xl  lg:mr-4  lg:h-6 lg:hover:bg-gray-200 lg:hover:w-20 lg:hover:h-10 lg:hover:p-2 lg:hover:-mt-2 lg:hover:rounded-md lg:w-20 h-10"/>

</i>
  <span class="invisible absolute z-10 w-auto px-3 py-2 mt-2 ml-2  min-w-max rounded-md shadow-md bg-gray-700 text-white text-xs group-hover:visible">
   Gaming
  </span>
</div>
             
      </div>
      <div className="flex flex-row mt-2">
      <div class="relative inline-block group">
  <i class="fa fa-home">
  <CgMenuGridO className="text-3xl bg-slate-100 rounded-full  w-9 h-9 p-1 mr-1 hover:bg-slate-200" />
</i>
  <span class="invisible absolute z-10 w-auto px-3 py-2 mt-2 -ml-3  min-w-max rounded-md shadow-md bg-gray-700 text-white text-xs group-hover:visible">
   Menu
  </span>
</div>
<div class="relative inline-block group">
  <i class="fa fa-home">
  <FaFacebookMessenger className="text-2xl bg-slate-100 rounded-full  w-9 h-9 p-2 mr-1 hover:bg-slate-200" />
</i>
  <span class="invisible absolute z-10 w-auto px-3 py-2 mt-2 -ml-4  min-w-max rounded-md shadow-md bg-gray-700 text-white text-xs group-hover:visible">
   Messanger
  </span>
</div>

<div class="relative inline-block group">
  <i class="fa fa-home">
  <IoNotifications className="text-2xl bg-slate-100 rounded-full w-9 h-9 p-2 mr-1 hover:bg-slate-200"/>
</i>
  <span class="invisible absolute z-10 w-auto px-3 py-2 mt-2 -ml-6  min-w-max rounded-md shadow-md bg-gray-700 text-white text-xs group-hover:visible">
   Notifications
  </span>
</div>
<div class="relative inline-block group">
  <i class="fa fa-home">
  <img src="./pic7.jpg" alt="" className="rounded-full  w-9 h-9 hover:bg-slate-200" />
</i>
  <span class="invisible absolute z-10 w-auto px-3 py-2 mt-2 -ml-5  min-w-max rounded-md shadow-md bg-gray-700 text-white text-xs group-hover:visible">
   Account
  </span>
</div>

      </div>
    </div>
    <div className="bg-white md:invisible lg:invisible visible -mt-14 -mr-4">
        <div className="flex flex-row ">
            <div><h1 className="ml-2 text-blue-600 font-semibold text-2xl">facebook</h1>
</div>
            <div className="flex flex-row ml-52 mt-2">
<IoIosSearch className="text-2xl font-semibold mr-3"/>
<FaFacebookMessenger className="text-xl font-semibold mr-3" />

            </div>
        </div>
        <div className="flex flex-row pl-7 mt-2 border-b-2 pb-2">
        < FiHome  className="mr-10 text-2xl" />
        <RiGroup2Line className="mr-10 text-2xl" />
        <MdOutlineOndemandVideo className="mr-10 text-2xl"/>
        <CiShop className="mr-10 text-2xl"/>
        <IoNotifications className="mr-10 text-2xl"/>
        <CgMenuGridO  className="mr-8 text-2xl"/>
        </div>
    </div>
    </>
  )
}
export default Navbar2;
