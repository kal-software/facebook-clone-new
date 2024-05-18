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



function Body() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
    
  };
  return (
    <div>
    <div className = "bg-gray-200 lg:grid lg:grid-flow-col"> 
    <div className="left-c lg:h-96 invisible  lg:visible lg:grid lg:grid-flow-row lg:ml-5 lg:w-44  ">
        <div className="name-div lg:ml-5 lg:grid lg:grid-flow-col mt-3 mb-3 ">
          <img src="./pic50.jpg" className=" lg:w-6 lg:h-6 rounded-full lg:-ml-5" />
          <a href="#" className="KA">
            <p className="kalkidan lg:-ml-3 ">Kalkidan solomon</p>
          </a>
        </div>
        <div className="friends-div lg:grid lg:grid-flow-col  lg:-mb-1 mt-2 ">
          <FaUserFriends className="icon-image1 lg:-mr-3 text-blue-500 lg:text-xl" />
          <a href="#" className="FA">
            <p className="friends lg:-ml-16">Friends</p>
          </a>
        </div>
        <div className="feeds-container lg:grid lg:grid-flow-col  lg:mt-4  ">
          <MdOutlineOndemandVideo className="icon-image2 lg:-mr-3 text-blue-500 lg:text-xl" />
          <a href="#" className="FA">
            <p className="feeds lg:-ml-16">Feeds</p>
          </a>
        </div>
        <div className="groups-container lg:grid lg:grid-flow-col lg:mt-4 ">
          <MdGroupWork className="icon-image3 lg:-mr-3 text-blue-500 lg:text-xl" />
          <a href="#" className="GA">
            <p className="groups lg:-ml-16">Groups</p>
          </a>
        </div>
        <div className="market-container lg:grid lg:grid-flow-col lg:mt-4">
          <CiShop className="icon-image4 lg:-mr-2  text-blue-500 lg:text-xl" />
          <a href="#" className="MA">
            {" "}
            <p className="market lg:-ml-12">MarketPlace</p>
          </a>
        </div>
        <div className="video-container lg:grid lg:grid-flow-col lg:mt-4">
          <MdOutlineOndemandVideo className="icon-image5 lg:-mr-2  text-blue-500 lg:text-xl" />
          <a href="#" className="VA">
            <p className="video lg:-ml-16">Video</p>
          </a>
        </div>
        <div className="memory-container lg:grid lg:grid-flow-col  lg:mt-4">
          <RiMemoriesLine className="icon-image6  lg:-mr-2  text-blue-500 lg:text-xl" />
          <a href="#" className="MA">
            <p className="memory lg:-ml-16">Memories</p>
          </a>
        </div>
        <div className="saved-container lg:grid lg:grid-flow-col lg:mt-4">
          <CiBookmark className="icon-image7 lg:-mr-2  text-blue-500 lg:text-xl" />
          <a href="#" className="SA">
            <p className="saved lg:-ml-16">Saved</p>
          </a>
        </div>
        <div className="page-container lg:grid lg:grid-flow-col lg:mt-3">
          <FaFlag className="icon-image8 lg:-mr-2  text-blue-500 lg:text-xl"  />
          <a href="#" className="PA">
            <p className="page lg:-ml-16">Pages</p>
          </a>
        </div>
        <div className="event-container lg:grid lg:grid-flow-col lg:mt-4">
          <MdOutlineEventBusy className="icon-image9 lg:-mr-2  text-blue-500 lg:text-xl" />
          <a href="#" className="EA">
            <p className="event lg:-ml-16">Events</p>
          </a>
        </div>
        <div className="ads-container lg:grid lg:grid-flow-col lg:mt-4">
          <BsFillFileEarmarkSpreadsheetFill className="icon-image10 lg:-mr-2  text-blue-500 lg:text-xl" />
          <a href="#" className="AA">
            <p className="ads lg:-ml-10">Ads Manager</p>
          </a>
        </div>
        <div className="see-container lg:grid lg:grid-flow-col lg:mt-4">
          <a href="#">
            < FaChevronDown className="icon-image11 lg:-mr-2  text-black lg:text-xl" />{" "}
          </a>
          <a href="#" className="pA">
            <p className="ads lg:-ml-16">See more</p>
          </a>
        </div>
        <footer className="footer">
          Privacy - Terms -Advertizing -Ad Choices . Cookies.<br/>More . Meta &copy; 2024
        </footer>
      </div>
      <div className="mt-2 ml-2 border-b-2  border-gray-300 ">
        
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
           <div className="middle-middle-div invisible">
<div className="middle-image-container">
  <img src="./pic50.jpg" height={30} width={30} className="middle-image"/>
  <input type="text" placeholder="What's on your mind kal?" className="input"/>
</div>
<div  className="middle-manager">
  <div className="liveDiv">
    <RiLiveFill className="video"/>
    <p className="video-p">Live Video</p>
  </div>
  <div className="photo-div">
    <BiSolidPhotoAlbum className="photo-icon"/>
    <p className="photo-p">Photo/Video</p>
  </div>
  <div className="imoj-div">
    <BiHappyAlt className="imoj-icon"/>
    <p className="imoj-p">Felling/activity</p>
  </div>
</div> 

</div>
<div>
  <div className="info-div invisible">
    <div className="div">
      <div>
        <img src="./pic50.jpg" width={30} height={30} className="info-img"/>
      </div>
      <div>
      <p className="chirs">Cristiano Ronaldo</p>
        <p className="yesterday">Yesterday at 1:25 PM.<FaGlobeAmericas/> </p>
        <p className="black">Back fo more</p>

      </div>
    </div>
    <div className="right-close">
   <a href="#" className="a">< BsThreeDots className="dots"/></a>   
   <a href="#" className="a"><IoMdClose className="close"/></a>    
    </div>
  </div>
  <div>
    <img src="./pic41.jpg" width={534} height={400}/>
  </div>
  <div className="father-comment">
    <div className="comments-field">
      <div className="interal-comments">
      <BiLike className="lought"/>
      <FcLike  className="likes"/>
      <div className="span">43</div>

      </div>
     <div className="comments">14 Comments</div>

    </div>
    <div className="comment-container">
    <div className="likee">
    <div>
          < BiLike className="like-icon"/>
        </div>
        <div className="like-p">Like</div>
      </div>
      <div className="comment">
        <div>
          <FaRegComment className="comment-icon"/>
        </div>
        <div className="comment-p">Comment</div>
      </div>
      <div className="send">
        <div>
          <MdSend className="send-icon"/>
        </div>
        <div className="send-p">Send</div>
      </div>
      <div className="share">
        <div>
          < PiShareFat className="share-icon"/>
        </div>
        <div className="share-p">Share</div>
      </div>
    </div>
  </div>
</div>   
<div>
  <div className="info-div">
    <div className="div">
      <div>
        <img src="./pic50.jpg" width={30} height={30} className="info-img"/>
      </div>
      <div>
      <p className="chirs">Cristiano Ronaldo</p>
        <p className="yesterday">Yesterday at 1:25 PM.<FaGlobeAmericas/> </p>
        <p className="black">Back fo more</p>

      </div>
    </div>
    <div className="right-close">
   <a href="#" className="a">< BsThreeDots className="dots"/></a>   
   <a href="#" className="a"><IoMdClose className="close"/></a>    
    </div>
  </div>
  <div>
    <img src="./pic8.jpg" width={534} height={400}/>
  </div>
  <div className="father-comment">
    <div className="comments-field">
      <div className="interal-comments">
      <BiLike className="lought"/>
      <FcLike  className="likes"/>
      <div className="span">43</div>

      </div>
     <div className="comments">14 Comments</div>

    </div>
    <div className="comment-container">
      <div className="likee">
        <div>
          <like-icon className="like-icon"/>
        </div>
        <div className="like-p">Like</div>
      </div>
      <div className="comment">
        <div>
          <FaRegComment className="comment-icon"/>
        </div>
        <div className="comment-p">Comment</div>
      </div>
      <div className="send">
        <div>
          <MdSend className="send-icon"/>
        </div>
        <div className="send-p">Send</div>
      </div>
      <div className="share">
        <div>
          < PiShareFat className="share-icon"/>
        </div>
        <div className="share-p">Share</div>
      </div>
    </div>
  </div>
</div>
<div>
  <div className="info-div">
    <div className="div">
      <div>
        <img src="./pic7.jpg" width={30} height={30} className="info-img"/>
      </div>
      <div>
      <p className="chirs">Yared Solomon</p>
        <p className="yesterday">Yesterday at 1:25 PM.<FaGlobeAmericas/> </p>
        <p className="black">Back fo more</p>

      </div>
    </div>
    <div className="right-close">
   <a href="#" className="a">< BsThreeDots className="dots"/></a>   
   <a href="#" className="a"><IoMdClose className="close"/></a>    
    </div>
  </div>
  <div>
    <img src="./pic31.jpg" width={534} height={400}/>
  </div>
  <div className="father-comment">
    <div className="comments-field">
      <div className="interal-comments">
      <BiLike className="lought"/>
      <FcLike  className="likes"/>
      <div className="span">43</div>

      </div>
     <div className="comments">14 Comments</div>

    </div>
    <div className="comment-container">
      <div className="likee">
        <div>
          <like-icon className="like-icon"/>
        </div>
        <div className="like-p">Like</div>
      </div>
      <div className="comment">
        <div>
          <FaRegComment className="comment-icon"/>
        </div>
        <div className="comment-p">Comment</div>
      </div>
      <div className="send">
        <div>
          <MdSend className="send-icon"/>
        </div>
        <div className="send-p">Send</div>
      </div>
      <div className="share">
        <div>
          < PiShareFat className="share-icon"/>
        </div>
        <div className="share-p">Share</div>
      </div>
    </div>
  </div>
</div>
<div>
  <div className="info-div">
    <div className="div">
      <div>
        <img src="./pic50.jpg" width={30} height={30} className="info-img"/>
      </div>
      <div>
      <p className="chirs">Kalkidan Solomon</p>
        <p className="yesterday">Yesterday at 1:25 PM.<FaGlobeAmericas/> </p>
        <p className="black">Back fo more</p>

      </div>
    </div>
    <div className="right-close">
   <a href="#" className="a">< BsThreeDots className="dots"/></a>   
   <a href="#" className="a"><IoMdClose className="close"/></a>    
    </div>
  </div>
  <div>
    <img src="./pic48.jpg" width={534} height={400}/>
  </div>
  <div className="father-comment">
    <div className="comments-field">
      <div className="interal-comments">
      <BiLike className="lought"/>
      <FcLike  className="likes"/>
      <div className="span">43</div>

      </div>
     <div className="comments">14 Comments</div>

    </div>
    <div className="comment-container">
      <div className="likee">
        <div>
          <like-icon className="like-icon"/>
        </div>
        <div className="like-p">Like</div>
      </div>
      <div className="comment">
        <div>
          <FaRegComment className="comment-icon"/>
        </div>
        <div className="comment-p">Comment</div>
      </div>
      <div className="send">
        <div>
          <MdSend className="send-icon"/>
        </div>
        <div className="send-p">Send</div>
      </div>
      <div className="share">
        <div>
          < PiShareFat className="share-icon"/>
        </div>
        <div className="share-p">Share</div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div className="right-scroll invisible">
        <div className="right-c">
          <p className="sponsored">Sponsored</p>
          <div className="right-side-image1">
            <div>
              <img src="./pic28.jpg" width={77} height={77} className="side-img"/>
            </div>
            <div>
              <p className="side-p1">Perfect Your Photography<br/>On Autopilot</p>
              <p className="side-p2">topazlabs.com</p>
            </div>
          </div>
          <div className="right-side-image1">
            <div>
              <img src="./pic28.jpg" width={77} height={77} className="side-img"/>
            </div>
            <div>
              <p className="side-p3">Smart Portable Pumb for<br/>Car Bike Motorcycle Ball<br/>Lifebuoy Air Inflator...</p>
              <p className="side-p2">fruimundo.com</p>
            </div>
          </div>
        </div>
        <div className="birth-c">
          <p className="b-title">Birthdays</p>
          <div className="birthday-container">
            <div>< BsGift className="birth-icon"/></div>
            <div className="birth-p">Hermi Queen and 12 others have<br/> birthdays today.</div>
          </div>
        </div>
        <div>
        <div className="contact">
          <div className="contact-c">Contacts</div>
          <div>
            <a href="#" className="contact-s"><BsSearch/></a>
            <a href="#" className="closee"><BsThreeDots/></a>
          </div>
        </div>
        <div className="contact-cc">
        <img src="./pic9.jpg" width={35} height={35} className="c-img"/>
        <p className="c-p">Kidu Arsenal Ethiopia</p>
        <button className="button"></button>
        </div>
        
        <div className="contact-cc">
        <img src="./pic50.jpg" width={35} height={35} className="c-img"/>
        <p className="c-p">Ali Buna Manche Ethiopia</p>
        <button className="button"></button>
        </div>
        <div className="contact-cc">
        <img src="./pic48.jpg" width={35} height={35} className="c-img"/>
        <p className="c-p">Abuki Z Kop-MoVvd</p>
        <button className="button"></button>
        </div>
        <div className="contact-cc">
        <img src="./pic25.jpg" width={35} height={35} className="c-img"/>
        <p className="c-p">Kidu Arsenal Ethiopia</p>
        <button className="button"></button>
        </div>
        </div>
      </div>


 </div>
    </div>
    
  );
}
export default Body;
