/*import { FaLessThanEqual, FaUserFriends } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdGroupWork } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { RiMemoriesLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { FaFlag } from "react-icons/fa6";
import { MdOutlineEventBusy } from "react-icons/md";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa6";
*/
import React from "react";
import Stories from "./Histories";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/*import { RiLiveFill } from "react-icons/ri";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { BiHappyAlt } from "react-icons/bi";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { BsGift } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { MdSend } from "react-icons/md";
//import Navbar from "./Navbar";
*/


function Body() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
    
  };
  return (

    
      <div className="mt-2 ml-2 border-b-2 border-gray-300 ">
        
      <div className="mt-0 -mb-1 ">
        <Slider {...settings}>
          {Stories.map((story) => (
          <div className="">
       <div><img src={story.image} className="w-24 h-28 rounded-md pl-1 "/></div> 
        <div className="text-sm font-mono text-white -mt-6 ml-2 ">{story.text}</div>
        <div> <button className="w-6 h-6 rounded-full bg-green-400 absolute top-1 ml-2"></button> </div>
         </div>
             
            
          ))}
           </Slider>
     
           </div>
    </div>
  );
}
export default Body;
