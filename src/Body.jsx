import { FaUserFriends } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdGroupWork } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { RiMemoriesLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { FaFlag } from "react-icons/fa6";
import { MdOutlineEventBusy } from "react-icons/md";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
//import { FaArrowDown } from "react-icons/fa6";
import React from "react";
import Stories from "./Histories";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiLiveFill } from "react-icons/ri";
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
import { GrGallery } from "react-icons/gr";
import { IoPersonCircleOutline } from "react-icons/io5";



function Body() {
  const settings = {
    dots:true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
    
  };
  return (
    <div>
    <div className = "bg-gray-200  lg:grid lg:grid-flow-col lg:grid-cols-3 md:grid-cols-3 md:grid md:grid-flow-col lg:mt-10 md:mt-10 mt-32"> 
    <div className="left-c lg:h-96 md:h-96   lg:grid lg:grid-flow-row lg:ml-5 lg:w-44  md:grid md:grid-flow-row md:ml-5 md:w-44  mt-2 ">
        <div className="name-div  hidden sm:block  lg:ml-5 md:-ml-1 lg:grid lg:grid-flow-col md:ml-5 md:grid md:grid-flow-col mt-3 mb-3  md:mt-5">
          <img src="./pic50.jpg" className=" lg:w-6 lg:h-6 md:w-5 md:h-5 md:mt-2  md:rounden-full rounded-full lg:-ml-5 md:-ml-5" />
          <a href="#" className="KA">
            <p className="kalkidan lg:-ml-3 md:mt-1 md:text-md -ml-4 ">Kalkidan solomon</p>
          </a>
        </div>
        <div className="friends-div hidden sm:block md:mt-1  lg:grid lg:grid-flow-col md:grid md:grid-flow-col  lg:-mb-1 mt-2 ">
          <FaUserFriends className="icon-image1 lg:-mr-3 text-blue-500 md:-mr-3 lg:text-xl md:text-xl" />
          <a href="#" className="FA">
            <p className="friends lg:-ml-16 md:text-md md:-ml-16">Friends</p>
          </a>
        </div>
        <div className="feeds-container md:mt-3 hidden md:grid md:grid-flow-col lg:grid lg:grid-flow-col  lg:mt-4  ">
          <MdOutlineOndemandVideo className="icon-image2 lg:-mr-3 md:-mr-3 text-blue-500 lg:text-xl md:text-xl" />
          <a href="#" className="FA">
            <p className="feeds lg:-ml-16 md:text-md md:-ml-16">Feeds</p>
          </a>
        </div>
        <div className="groups-container hidden md:mt-3 md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4 ">
          <MdGroupWork className="icon-image3 lg:-mr-3 text-blue-500 lg:text-xl md:text-xl md:-mr-3" />
          <a href="#" className="GA">
            <p className="groups lg:-ml-16 md:-ml-16 md:text-md">Groups</p>
          </a>
        </div>
        <div className="market-container md:mt-3 hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4">
          <CiShop className="icon-image4 lg:-mr-2  text-blue-500 lg:text-xl md:text-xl md:-mr-2" />
          <a href="#" className="MA">
            {" "}
            <p className="market lg:-ml-12 md:text-md md:-ml-12">MarketPlace</p>
          </a>
        </div>
        <div className="video-container md:mt-3 hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4">
          <MdOutlineOndemandVideo className="icon-image5 lg:-mr-2 md:text-xl md:-mr-2  text-blue-500 lg:text-xl" />
          <a href="#" className="VA">
            <p className="video lg:-ml-16 md:text-md md:-ml-16">Video</p>
          </a>
        </div>
        <div className="memory-container md:mt-3 hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col  lg:mt-4">
          <RiMemoriesLine className="icon-image6 md:text-xl md:-mr-2  lg:-mr-2  text-blue-500 lg:text-xl" />
          <a href="#" className="MA">
            <p className="memory lg:-ml-16 md:text-md md:-ml-16">Memories</p>
          </a>
        </div>
        <div className="saved-container hidden md:mt-3 md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4">
          <CiBookmark className="icon-image7 lg:-mr-2 md:text-xl md:-mr-3  text-blue-500 lg:text-xl" />
          <a href="#" className="SA">
            <p className="saved lg:-ml-16 md:text-md md:-ml-16">Saved</p>
          </a>
        </div>
        <div className="page-container md:mt-3 hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-3">
          <FaFlag className="icon-image8 lg:-mr-2 md:text-xl md:-mr-2 text-blue-500 lg:text-xl"  />
          <a href="#" className="PA">
            <p className="page lg:-ml-16 md:text-md md:-ml-16">Pages</p>
          </a>
        </div>
        <div className="event-container md:mt-3  hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4">
          <MdOutlineEventBusy className="icon-image9 lg:-mr-2 md:text-xl md:-mr-3 text-blue-500 lg:text-xl" />
          <a href="#" className="EA">
            <p className="event lg:-ml-16 md:text-md md:-ml-16">Events</p>
          </a>
        </div>
        <div className="ads-container md:mt-3 hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4">
          <BsFillFileEarmarkSpreadsheetFill className="icon-image10 md:text-xl  lg:-mr-2  text-blue-500 lg:text-xl" />
          <a href="#" className="AA">
            <p className="ads lg:-ml-10 md:text-md md:-ml-12">Ads Manager</p>
          </a>
        </div>
        <div className="see-container md:mt-5 hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4">
          <a href="#">
            < FaChevronDown className="icon-image11 lg:-mr-2 md:-mr-3 md:mt-1 md:text-xl  text-black lg:text-xl" />{" "}
          </a>
          <a href="#" className="pA">
            <p className="ads lg:-ml-16 md:text-md md:-ml-16">See more</p>
          </a>
        </div>
        <footer className="footer hidden sm:block text-xs mt-5 text-gray-500 ">
          Privacy - Terms -Advertizing -Ad Choices . Cookies.<br/>More . Meta &copy; 2024
        </footer>
      </div>
      <div className=" md:hidden lg:hidden grid grid-flow-col -mt-32 bg-white w-full pt-2 pl-3 border-b border-b-1 border-b-gray-400 pb-5 ">
  <div>
  < IoPersonCircleOutline className="text-3xl text-gray-400"/>
  </div>
  <div>
    <input type="text"placeholder="What's on your mind?" className="border-2 w-60 -ml-10 rounded-2xl pl-3 border-gray-400 focus:outline-none" />
  </div>
  <div>
    <GrGallery className="text-green-300 -ml-10 mt-1 text-lg"/>
  </div>
</div>
      <div className="mt-1  z-0 md:-mt-1 md:overflow-auto md:overflow-scroll md:h-1/5 md:pr-2 lg:overflow-auto lg:overflow-scroll lg:h-1/5  mr-5 md:border-none md:-ml-20 lg:-ml-20 md:w-86 lg:mt-8 md:mt-10 ">
        
      <div className="-mt-3 -mb-1  ">
        <Slider {...settings}>
          {Stories.map((story) => (
          <div className="mt-1  ">
       <div className="w-36 pr-8 rounded-lg pt-2"><img src={story.image} className="rounded-lg  w-24 h-32 lg:h-44 lg:w-52  pl-1  "/></div> 
        <div className="text-sm font-mono text-white -mt-10  ml-2 lg:ml-3 ">{story.text}</div>
        <div>{story.button}</div>
        <div> <img src = {story.image2} className="w-9 h-9 border-2 border-blue-800 rounded-full absolute top-4 ml-2"/> </div>

         </div>
             
            
          ))}
           </Slider>
           <div className=" hidden sm:block middle-middle-div md:text-sm mt-6 bg-white w-72  md:pr-1 md:h-24 h-16 rounded-md md:w-full ml-4 lg:-ml-1 md:-ml-1">
<div className="middle-image-container grid grid-flow-col md:border-b md:border-b-1 sm:mt-1  md:pb-2 pt-5   md:border-gray   md:mt-6 md:pt-3  md:ml-3 md:mr-3 md:grid md:grid-flow-col ">
  <img src="./pic50.jpg" height={30} width={30} className="middle-image rounded-full ml-4  md:ml-2 md:w-6 w-6 h-6 md:h-6 md:rounded-full"/>
  <input type="text" placeholder="What's on your mind kal?" className="input md:placeholder-sm pl-7 w-52 md:-ml-7 md:w-56 lg:w-80 -ml-5 md:bg-white  border-gray-400 border md:bg-gray-200 md:pl-2 lg:pl-20 rounded-xl focus:outline-none placeholder-black placeholder-shown:text-sm lg:-ml-16"/>
</div>
<div  className="middle-manage md:text-sm md:mt-3 hidden md:mt-1sm:block md:grid md:grid-flow-col">
  <div className="liveDiv md:grid md:grid-flow-col md:ml-5  ">
    <RiLiveFill className="video text-red-600 lg:-mr-5"/>
    <p className="video-p md:-mt-1 md:-ml-1 lg:-ml-6">Live Video</p>
  </div>
  <div className="photo-div md:grid md:grid-flow-col">
    <BiSolidPhotoAlbum className="photo-icon text-green-400 lg:-mr-6"/>
    <p className="photo-p md:-mt-1 md:-ml-1 lg:-ml-6">Photo/Video</p>
  </div>
  <div className="imoj-div md:grid md:grid-flow-col">
    <BiHappyAlt className="imoj-icon text-yellow-400"/>
    <p className="imoj-p md:-mt-1 md:-ml-1 lg:-ml-10">Felling/activity</p>
  </div>
</div> 

</div>
<div className=" mt-2 bg-white pt-3 md:pt-1 ml-1 lg:ml-0 md:ml-0 ">
  <div className="info-div  grid  grid-flow-col w-44  md:mt-5 md:pt-1 md:pl-1">
    <div className=" grid grid-flow-col pl-3 ">
      <div>
        <img src="./pic50.jpg  " className="info-img rounded-full w-6 h-6  md:w-6 md:h-6 md:rounded-full" />
      </div>
      <div className="">
      <p className="chirs text-xs font-semibold  ml-2 md:ml-2">Cristiano Ronaldo</p>
        <p className="yesterday text-xs text text-gray-400 ml-2">Yesterday at1:25 pm.<FaGlobeAmericas className="ml-28 text-small -mt-3"/> </p>
        <p className="black text-xs mt-2 ml-2 mb-2">Back fo more</p>

      </div>
    </div>
    <div className="right-close w-1 grid grid-flow-col  ">
   <a href="#" className="a">< BsThreeDots className="dots ml-28 md:ml-28 lg:-mr-20 lg:ml-56 text-gray-600 "/></a>   
   <a href="#" className="a"><IoMdClose className="close ml-2 lg:ml-24 lg:-ml-8 text-gray-600 "/></a>    
    </div>
  </div>
  <div>
    <img src="./pic41.jpg" className="w-68 h-72"/>
  </div>
  <div className="father-comment grid grid-flow-row">
    <div className="comments-field grid grid-flow-col border-b border-gray-500 md:ml-1 md:mr-1 ">
      <div className="interal-comments mt-2   grid grid-flow-col lg:mr-20">
      <BiLike className="lought ml-1  text-gray-600 "/>
      <FcLike  className="likes -ml-6 md:-ml-1 lg:-ml-6"/>
      <div className="span -ml-8 text-sm lg:-ml-8 text-blue-600 md:-ml-1">43</div>

      </div>
     <div className="comments lg:-mr-12 md:ml-48 text-xs ml-28 mt-2 text-gray-600 font-semibold">14 Comments</div>

    </div>
    <div className="comment-container md:ml-1 mt-3 mb-5 pb-2 grid grid-flow-col">
    <div className="likee grid grid-flow-col">
    <div>
          < BiLike className="like-icon ml-1 text-gray-600"/>
        </div>
        <div className="like-p text-xs -ml-7 text-gray-600 md:-ml-6 lg:-ml-10">Like</div>
      </div>
      <div className="comment grid grid-flow-col -ml-1 md:ml-2">
        <div>
          <FaRegComment className="comment-icon -ml-2 text-gray-600"/>
        </div>
        <div className="comment-p text-gray-600 -ml-7 text-xs md:-ml-6 lg:-ml-10">Comment</div>
      </div>
      <div className="send grid grid-flow-col -ml-2 md:ml-2">
        <div>
          <MdSend className="send-icon text-gray-600 -ml-2"/>
        </div>
        <div className="send-p text-gray-600 text-xs -ml-7 lg:-ml-10 ">Send</div>
      </div>
      <div className="share grid grid-flow-col">
        <div>
          < PiShareFat className="share-icon text-gray-600 -ml-1 "/>
        </div>
        <div className="share-p text-gray-600 text-xs mr-12 -ml-7 md:-mr-20 lg:-ml-10">Share</div>
      </div>
    </div>
  </div>
</div>   
<div className="border-t  mt-2 bg-white  ">
  <div className="info-div grid pt-3  grid-flow-col w-44 mt-1 md:mt-5 md:pt-1 md:pl-1">
    <div className="div grid grid-flow-col pl-3">
      <div>
        <img src="./pic50.jpg" width={30} height={30} className="info-img rounded-full w-6 h-6 md:w-7 md:h-6  md:rounded-full"/>
      </div>
      <div>
      <p className="chirs text-xs font-semibold ml-2">Cristiano Ronaldo</p>
        <p className="yesterday text-xs text text-gray-400 ml-2">Yesterday at 1:25 PM.<FaGlobeAmericas className="ml-28 text-small -mt-3"/> </p>
        <p className="black text-xs mt-2 ml-2 mb-2">Back fo more</p>

      </div>
    </div>
    <div className="right-close  w-1 grid grid-flow-col">
   <a href="#" className="a">< BsThreeDots className="dots md:ml-28 ml-28 text-gray-600 lg:-mr-20 lg:ml-56 "/></a>   
   <a href="#" className="a"><IoMdClose className="close  ml-2 text-gray-600 lg:ml-24 lg:-ml-5 "/></a>    
    </div>
  </div>
  <div>
    <img src="./pic8.jpg"  className="w-full h-72 md:w-96 lg:w-full"/>
  </div>
  <div className="father-comment  grid grid-flow-row">
    <div className="comments-field  grid grid-flow-col md:ml-1 md:mr-1 border-b border-gray-500 border-b-2 md:pb-1">
      <div className="interal-comments grid grid-flow-col md:pt-2 lg:mr-20">
      <BiLike className="lought ml-1 text-gray-600 "/>
      <FcLike  className="likes -ml-6 md:-ml-1 lg:-ml-4"/>
      <div className="span md:-ml-1 -ml-8 text-sm text-blue-600 lg:-ml-4">43</div>

      </div>
     <div className="comments md:ml-48 text-xs ml-28 mt-2 text-gray-600 font-semibold lg:-mr-12">14 Comments</div>

    </div>
    <div className="comment-container md:ml-1  md:mr-1  mt-3 mb-5 pb-2  grid grid-flow-col">
      <div className="likee grid grid-flow-col">
        <div>
          <BiLike className="like-icon ml-1 text-gray-600"/>
        </div>
        <div className="like-p text-xs -ml-7 text-gray-600 md:-ml-6 lg:-ml-10">Like</div>
      </div>
      <div className="comment grid grid-flow-col -ml-1 md:ml-2">
        <div>
          <FaRegComment className="comment-icon -ml-2 text-gray-600"/>
        </div>
        <div className="comment-p text-gray-600 -ml-7 text-xs md:-ml-6 lg:-ml-10">Comment</div>
      </div>
      <div className="send grid grid-flow-col -ml-2 md:ml-2">
        <div>
          <MdSend className="send-icon  text-gray-600 -ml-2"/>
        </div>
        <div className="send-p text-gray-600 text-xs -ml-6  lg:-ml-10 ">Send</div>
      </div>
      <div className="share grid grid-flow-col">
        <div>
          < PiShareFat className="share-icon text-gray-600 -ml-1 md:ml-3"/>
        </div>
        <div className="share-p text-gray-600 text-xs mr-12 -ml-7 md:-ml-6 md:-mr-2 lg:-ml-10">Share</div>
      </div>
    </div>
  </div>
</div>
<div className="border-t  mt-2  bg-white ">
  <div className="info-div grid  grid-flow-col w-44 mt-1 pt-3 md:mt-5 md:pt-4 md:pl-1 md:pl-1">
    <div className="div grid grid-flow-col pl-3">
      <div>
        <img src="./pic7.jpg" width={30} height={30} className="info-img rounded-full w-6 h-6 md:w-7 md:h-6 md:rounded-full"/>
      </div>
      <div>
      <p className="chirs text-xs font-semibold ml-2">Yared Solomon</p>
        <p className="yesterday text-xs text text-gray-400 ml-2">Yesterday at 1:25 PM.<FaGlobeAmericas className="ml-28 text-small -mt-3"/> </p>
        <p className="black text-xs mt-2 ml-2 mb-2">Back fo more</p>

      </div>
    </div>
    <div className="right-close w-1 grid grid-flow-col">
   <a href="#" className="a">< BsThreeDots className="dots ml-28 text-gray-600 md:ml-28 ml-16 lg:-mr-20 lg:ml-56"/></a>   
   <a href="#" className="a"><IoMdClose className="close ml-2 text-gray-600 lg:ml-24 lg:-ml-5"/></a>    
    </div>
  </div>
  <div>
    <img src="./pic31.jpg" className="w-full h-72 md:w-96 lg:w-full"/>
  </div>
  <div className="father-comment grid grid-flow-row">
    <div className="comments-field grid grid-flow-col md:ml-1 md:mr-1 md:pb-1 border-b border-gray-500 border-b-2  ">
      <div className="interal-comments grid grid-flow-col md:pt-2 lg:mr-20">
      <BiLike className="lought ml-1 text-gray-600 "/>
      <FcLike  className="likes -ml-6 md:-ml-1 lg:-ml-4"/>
      <div className="span -ml-8 text-sm text-blue-600 md:-ml-1 lg:-ml-4">43</div>

      </div>
     <div className="comments  md:ml-48 text-xs ml-28 mt-2 text-gray-600 font-semibold lg:-mr-12">14 Comments</div>

    </div>
    <div className="comment-container md:ml-1  md:mr-1  mt-3  mb-5 pb-2  grid grid-flow-col">
      <div className="likee grid grid-flow-col">
        <div>
          <BiLike className="like-icon ml-1 text-gray-600"/>
        </div>
        <div className="like-p text-xs -ml-7 text-gray-600 md:-ml-6 lg:-ml-10">Like</div>
      </div>
      <div className="comment grid grid-flow-col -ml-1 md:ml-2">
        <div>
          <FaRegComment className="comment-icon -ml-2 text-gray-600"/>
        </div>
        <div className="comment-p text-gray-600 -ml-7 text-xs md:-ml-6 lg:-ml-10">Comment</div>
      </div>
      <div className="send grid grid-flow-col -ml-1 md:ml-1">
        <div>
          <MdSend className="send-icon text-gray-600 -ml-2"/>
        </div>
        <div className="send-p text-gray-600 text-xs -ml-7  lg:-ml-10 ">Send</div>
      </div>
      <div className="share grid grid-flow-col">
        <div>
          < PiShareFat className="share-icon text-gray-600 -ml-1 md:ml-3"/>
        </div>
        <div className="share-p text-gray-600 text-xs mr-12 -ml-7 md:-ml-6 md:-mr-2 lg:-ml-10">Share</div>
      </div>
    </div>
  </div>
</div>
<div className="border-t  mt-2 bg-white ">
  <div className="info-div  grid  grid-flow-col w-44 mt-1 md:mt-5 md:pt-4 md:pl-1 pt-3 md:pl-1">
    <div className="div grid grid-flow-col pl-3">
      <div>
        <img src="./pic50.jpg"  className="info-img info-img rounded-full w-6 h-6 md:w-7 md:h-6 md:rounded-full"/>
      </div>
      <div>
      <p className="chirs text-xs font-semibold ml-2">Kalkidan Solomon</p>
        <p className="yesterday text-xs text text-gray-400 ml-2">Yesterday at 1:25 PM.<FaGlobeAmericas className="ml-28 text-small -mt-3"/> </p>
        <p className="black text-xs mt-2 ml-2 mb-2">Back fo more</p>

      </div>
    </div>
    <div className="right-close w-1 grid grid-flow-col">
   <a href="#" className="a">< BsThreeDots className="dots ml-28 text-gray-600 md:ml-28 lg:-mr-20 lg:ml-56"/></a>   
   <a href="#" className="a"><IoMdClose className="close ml-2 text-gray-600 lg:ml-24 lg:-ml-5"/></a>    
    </div>
  </div>
  <div>
    <img src="./pic48.jpg" width={534} height={400} className="w-full h-72 md:w-96 lg:w-full"/>
  </div>
  <div className="father-comment grid grid-flow-row">
    <div className="comments-field grid grid-flow-col md:ml-1 md:mr-1 md:pb-1 border-b border-gray-500">
      <div className="interal-comments grid grid-flow-col md:pt-2 lg:mr-20">
      <BiLike className="lought ml-1 text-gray-600 "/>
      <FcLike  className="likes -ml-6 md:-ml-1 lg:-ml-4"/>
      <div className="span -ml-8 text-sm text-blue-600 md:-ml-1 lg:-ml-4">43</div>

      </div>
     <div className="comments text-xs ml-28 mt-2 text-gray-600 font-semibold md:ml-48 lg:-mr-12">14 Comments</div>

    </div>
    <div className="comment-container mt-3  grid grid-flow-col md:ml-1  md:mr-1 md:pb-5">
      <div className="likee grid grid-flow-col">
        <div>
          <BiLike  className="like-icon ml-1 text-gray-600"/>
        </div>
        <div className="like-p text-xs -ml-7 text-gray-600 md:-ml-6 lg:-ml-10">Like</div>
      </div>
      <div className="comment grid grid-flow-col -ml-1 md:ml-2">
        <div>
          <FaRegComment className="comment-icon -ml-2 text-gray-600"/>
        </div>
        <div className="comment-p  text-gray-600 -ml-7 text-xs md:-ml-6 lg:-ml-10">Comment</div>
      </div>
      <div className="send grid grid-flow-col -ml-2 md:ml-1">
        <div>
          <MdSend className="send-icon text-gray-600 -ml-2"/>
        </div>
        <div className="send-p text-gray-600 text-xs -ml-7  lg:-ml-10 ">Send</div>
      </div>
      <div className="share  grid grid-flow-col">
        <div>
          < PiShareFat className="share-icon text-gray-600 -ml-3 md:ml-3"/>
        </div>
        <div className="share-p text-gray-600 text-xs mr-12 -ml-7 md:-ml-6 md:-mr-2 lg:-ml-10">Share</div>
      </div>
    </div>
  </div>
</div>

<div className="border-t  mt-2 bg-white">
  <div className="info-div grid  grid-flow-col w-44 mt-1 md:mt-5 md:pt-4 md:pl-2 pt-3 md:pl-1">
    <div className="div grid grid-flow-col ">
      <div>
        <img src="./pic7.jpg" width={30} height={30} className="info-img rounded-full w-6 h-6"/>
      </div>
      <div>
      <p className="chirs text-xs font-semibold ml-2">Yared Solomon</p>
        <p className="yesterday text-xs text text-gray-400 ml-2">Yesterday at 1:25 PM.<FaGlobeAmericas className="ml-28 text-small -mt-3"/> </p>
        <p className="black text-xs mt-2 ml-2 mb-2">Back fo more</p>

      </div>
    </div>
    <div className="right-close w-1 grid grid-flow-col">
   <a href="#" className="a">< BsThreeDots className="dots ml-28 text-gray-600 md:ml-28 lg:-mr-20 lg:ml-56"/></a>   
   <a href="#" className="a"><IoMdClose className="close ml-2 text-gray-600 lg:ml-24 lg:-ml-5"/></a>    
    </div>
  </div>
  <div>
    <img src="./pic43.jpg" className="w-full h-72 md:w-96 lg:w-full"/>
  </div>
  <div className="father-comment grid grid-flow-row">
    <div className="comments-field grid grid-flow-col md:ml-1 md:mr-1 md:pb-1 border-b border-gray-500">
      <div className="interal-comments grid grid-flow-col md:pt-2 lg:mr-20">
      <BiLike className="lought ml-1 text-gray-600 "/>
      <FcLike  className="likes -ml-6 md:-ml-1 lg:-ml-4"/>
      <div className="span -ml-8 text-sm md:-ml-1 text-blue-600 lg:-ml-4">43</div>

      </div>
     <div className="comments text-xs ml-28 mt-2 text-gray-600 font-semibold md:ml-48 lg:-mr-12">14 Comments</div>

    </div>
    <div className="comment-container mt-3  mb-5 pb-2  grid grid-flow-col md:ml-1  md:mr-1 md:pb-5">
      <div className="likee grid grid-flow-col">
        <div>
          <BiLike className="like-icon ml-1 text-gray-600"/>
        </div>
        <div className="like-p text-xs -ml-7 text-gray-600 md:-ml-6 lg:-ml-10">Like</div>
      </div>
      <div className="comment grid grid-flow-col -ml-1 md:ml-2">
        <div>
          <FaRegComment className="comment-icon -ml-2 text-gray-600"/>
        </div>
        <div className="comment-p text-gray-600 -ml-7 text-xs md:-ml-6 lg:-ml-10">Comment</div>
      </div>
      <div className="send grid grid-flow-col -ml-2">
        <div>
          <MdSend className="send-icon text-gray-600 -ml-2 md:ml-1"/>
        </div>
        <div className="send-p text-gray-600 text-xs -ml-7  lg:-ml-10 ">Send</div>
      </div>
      <div className="share grid grid-flow-col">
        <div>
          < PiShareFat className="share-icon text-gray-600 -ml-1 md:ml-3" />
        </div>
        <div className="share-p text-gray-600 text-xs mr-12 -ml-7 md:-ml-6 md:-mr-2 lg:-ml-10">Share</div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

<div className="right-scroll hidden sm:block  md:ml-5 md:mt-16 static lg:mt-24 md:mt-20 ">
        <div className="right-c lg:grid -mt-10 border-b border-gray-400 border-b-2 md:pb-1 md:mr-1  ">
          <p className="sponsored text-gray-600 md:-mt-3 md:mb-3 md:font-semibold lg:-mb-1 ">Sponsored</p>
          <div className="right-side-image1  md:grid md:grid-flow-col-dense md:mb-1 lg:mt-4">
            <div>
              <img src="./pic28.jpg" width={77} height={77} className="side-img md:w-20 md:h-20 md:rounded-md"/>
            </div>
            <div className = "md:-ml-5 md:mt-3 lg:-ml-32">
              <p className="side-p1 md:text-xs md:font-semibold">Perfect Your Photography<br/>On Autopilot</p>
              <p className="side-p2 md:text-xs md:text-gray-500">topazlabs.com</p>
            </div>
          </div>
          <div className="right-side-image1  md:mb-1 md:grid md:grid-flow-col-dense md:mt-2">
            <div>
              <img src="./pic28.jpg" width={77} height={77} className="side-img md:w-20 md:h-20 md:rounded-md "/>
            </div>
            <div className="md:-ml-5 md:mt-2  lg:-ml-32 ">
              <p className="side-p3 md:text-xs md:font-semibold">Smart Portable Pumb for<br/>Car Bike Motorcycle Ball<br/>Lifebuoy Air Inflator...</p>
              <p className="side-p2 md:text-xs md:text-gray-500">fruimundo.com</p>
            </div>
          </div>
        </div>
        <div className="birth-c md:mt-2 border-b border-gray-400 border-b-2 md:mr-1 md:pb-1 ">
          <p className="b-title md:text-sm text-gray-500 md:mb-3">Birthdays</p>
          <div className="birthday-container md:grid md:grid-flow-col">
            <div>< BsGift className="birth-icon md:text-2xl text-blue-600 md:mr-2"/></div>
            <div className="birth-p md:text-xs md:-ml-16 lg:-ml-44">Hermi Queen and 12 others have<br/> birthdays today.</div>
          </div>
        </div>
        <div>
        <div className="contact md:grid md:grid-flow-col md:mt-2">
          <div className="contact-c md:text-sm text-gray-500">Contacts</div>
          <div className="md:grid md:grid-flow-col md:-mr-28 lg:-mr-36 lg:ml-9">
            <a href="#" className="contact-s md:text-sm  md:mt-1 md:-mr-10 md:ml-16 lg:-mr-36  "><BsSearch/></a>
            <a href="#" className="closee   md:-ml-12 lg:-ml-12"><BsThreeDots/></a>
          </div>
        </div>
        <div className="contact-cc md:mt-4 md:grid md:grid-flow-col md:ml-2">
        <img src="./pic9.jpg" width={35} height={35} className="c-img rounded-full md:-mt-1  md:-mr-2  h-8 w-8 relative"/>
        <p className="c-p text-sm md:-ml-20 font-medium lg:-ml-40 lg:relative ">Kidu Arsenal Ethiopia</p>
        <button className="button bg-green-500 rounded-full h-3 w-3 absolute bottom-16 md:ml-5 md:mb-8  lg:ml-5 lg:mb-1 "></button>
        </div>
        
        <div className="contact-cc md:mt-4 md:grid md:grid-flow-col md:ml-2  ">
        <img src="./pic50.jpg" width={35} height={35} className="c-img rounded-full  h-8 w-8 relative"/>
        <p className="c-p text-sm md:-ml-16 font-medium lg:-ml-40 ">Ali Buna Manche Ethiopia</p>
        <button className="button bg-green-500 rounded-full h-3 w-3 absolute bottom-3 md:ml-5 md:mb-9   lg:ml-5 lg:mb-3 "></button>
        </div>
        <div className="contact-cc md:mt-5 md:grid md:grid-flow-col md:ml-2">
        <img src="./pic48.jpg" width={35} height={35} className="c-img rounded-full h-8 w-8 relative -mr-6 lg:-mr-1"/>
        <p className="c-p text-sm md:-ml-16 font-medium lg:-ml-40">Abuki Z Kop-MoVvd</p>
        <button className="button  bg-green-500 rounded-full h-3 w-3 absolute -bottom-10  md:ml-5 md:mb-9   lg:ml-5 lg:mb-2 "></button>
        </div>
        <div className="contact-cc md:mt-6 md:grid md:grid-flow-col md:ml-2">
        <img src="./pic25.jpg" width={35} height={35} className="c-img  rounded-full h-8 w-8 relative -mr-5 lg:-mr-1"/>
        <p className="c-p text-sm md:-ml-16 font-medium lg:-ml-40">Kidu Arsenal Ethiopia</p>
        <button className="button bg-green-500 rounded-full h-3 w-3 absolute -bottom-24  md:ml-5 md:mb-9  lg:ml-5 lg:mb-2 "></button>
        </div>
        </div>
      </div>




 </div>
    </div>
    
  );
}
export default Body;

