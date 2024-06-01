import { FaSearch } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import {FaGlobeAsia} from "react-icons/fa";
import {BsThreeDots} from "react-icons/bs";
import {IoMdClose } from "react-icons/io";
import {BiLike} from"react-icons/bi"
import {FcLike} from"react-icons/fc"
import {FaRegComment} from "react-icons/fa"
import {PiShareFat} from 'react-icons/pi'
import { FaWhatsapp } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { TfiVideoClapper } from "react-icons/tfi";
import { BiSolidSlideshow } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { BsFillSave2Fill } from "react-icons/bs";
import {IoSettingsSharp} from "react-icons/io5"



function Vedio(){
return(
    <>
    <div className="bg-gray-200 md:grid md:grid-flow-col mt-10">
        <div className="lg:bg-white md:bg-white  lg:w-72 md:w-72 w-full -mt-2  pt-1 pl-2 pb-60  shadow-md mt-7 lg:mt-6 " >
            <div className="invisible md:visible ">
            <div className="market-div md:grid md:grid-flow-col md:mt-3 md:ml-2 md:text-lg md:font-semibold ">
    <p className="market-p ">Video</p>
    <IoSettingsSharp className="group-icon mt-1 bg-gray-400 rounded-full  md:-mr-20 md:ml-10 md:w-5 md:h-5 "/>
</div>
<input type="text" placeholder="Search groups" className="Search-Marketplacee fixed focus:outline-none bg-gray-100 rounded-xl w-56 pl-9 placeholder:text-sm md:ml-1 md:mt-2 lg:mt-3 relative"/>
<a href="#"><FaSearch  className="market-search absolute top-24 lg md:top-12  mt-20 left-6 md:text-sm "/></a> 
<a href="#" className="browse grid grid-flow-col h-7 md:mt-3 pl-1 md:ml-2 md:w-56 bg-gray-100 ">
< MdOndemandVideo className="brows-icon text-white mr-2 bg-blue-500  rounded-full text-sm w-5  ml-1 h-5 p-1 mt-1 "/>
<p className="brows-all-pp text-sm font-semibold -ml-24 mt-1 ">Home</p>
</a>
<div className="noti-div grid grid-flow-col md:ml-2 md:mt-4 ">
<a href="#" className="noti-a">
< FaVideo className="market-notification mr-2 bg-gray-200 rounded-full w-5 h-5 text-lg "/>
</a>
<a href="#" className="noti-a ">
<p className="market-p1 -ml-28 text-sm font-semibold ">Live</p>
</a>

</div>
<div className="noti-div grid grid-flow-col md:ml-2 md:mt-5 ">
<a href="#" className="noti-a ">
<TfiVideoClapper className="inbox-notification mr-2 bg-gray-200 rounded-full w-5 h-5 text-lg "/>
</a>
<a href="#" className="noti-a ">
<p className="inbox-p -ml-28 text-sm font-semibold ">Reels</p>
</a>

</div>
<div className="noti-div grid grid-flow-col ml-2 mt-4 ">
<a href="#" className="noti-a ">
< BiSolidSlideshow className="inbox-notification mr-2 bg-gray-200 rounded-full w-5 h-5 text-lg "/>
</a>
<a href="#" className="noti-a ">
<p className="inbox-p1 -ml-28 text-sm font-semibold ">Shows</p>
</a>

</div>
<div className="noti-div grid grid-flow-col ml-2 mt-4 ">
<a href="#" className="noti-a ">
<MdExplore className="inbox-notification mr-2 bg-gray-200 rounded-full w-5 h-5 text-lg "/>
</a>
<a href="#" className="noti-a ">
<p className="inbox-p1 -ml-28 text-sm font-semibold ">Explore</p>
</a>

</div>
<div className=" noti-div grid grid-flow-col ml-2 mt-4 ">
<a href="#" className="noti-a">
<BsFillSave2Fill className="inbox-notification  mr-2 bg-gray-200 rounded-full w-5 h-5 text-lg "/>
</a>
<a href="#" className="noti-a ">
<p className= "inbox-p1 -ml-28 text-sm font-semibold ">Saved Videos</p>
</a>

</div>

 </div>
        <div className=" grid grid-flow-col   col-span-2 md:invisible visible -mt-72 ml-1">
               <div>
                <h1 className="text-black text-xl ml-2 font-semibold mt-3">Video</h1>
               </div>
               <div className="grid grid-flow-col w-16 ml-60 mb-3 -mr-1 text-lg mt-4 ">
                  <IoMdPerson/>
                  <FaSearch/>

               </div>
            </div>
            <div className="grid grid-flow-col w-32 mt-1 ml-1 -mb-28 visible md:invisible">
                <div className="bg-blue-100 text-blue-600 text-sm rounded-xl pl-3 font-semibold ">For you</div>
                <div className="ml-1 font-semibold">Live</div>
            </div>
        </div>
        <div className="lg:-ml-60 md:-ml-60  overflow-auto overflow-scroll h-1/3 lg:h-2/5 -mt-96 lg:-mt-6 md:mt-3 md:h-2/5">
        <div className="border-b pb-2 border-2  border-b-gray-400 md:border-none mt-52 md:ml-72 lg:ml-80 md:mt-16 md:-mt-1 md:w-3/5 lg:w-3/5 lg:mr-96  bg-white" >
        <div className="grid grid-flow-col mt-2">
            <div className="grid grid-flow-col mt-2">
                 <div>
        <img src="./pic28.jpg" width={50} height={50} className="rounded-full w-7 h-7 ml-1 md:ml-2 md:mr-3"/>
        </div>
        <div className="video-pp -ml-10 md:-ml-20 lg:-ml-40 ">
        <p className="video-pp1 text-xs">Yilma Mezmur. <span className="text-xs text-blue-700 font-semibold">Follow</span> </p>
        <p className="video-pp2  text-xs">Today at 2:42 AM.<FaGlobeAsia className ="-mt-3 ml-24"/></p>
        </div>
            </div>
       
        <div className="grid grid-flow-col  mt-2 md:-mr-12 lg:-mr-32">
        <a href="#">< BsThreeDots className="BsThreeDots ml-24 -mr-12 md:-mr-20 md:ml-52 lg:-mr-40 lg:ml-72"/></a> 
        <a href="#">< IoMdClose className="BsThreeDots  text-lg ml-1 lg:ml-1 -mr-12 md:ml-1  lg:-ml-20 "/></a> 
        </div>
        </div>
        <video src="./yilma.mp4" className="yilma mt-2 lg:w-full" controls = "autoplay"/>
<div className="grid grid-flow-col text-xs md:text-lg mt-2 text-gray-500">
    <div className="grid grid-flow-col w-12 ml-2 md:-mr-80">
    <div className="text-blue-500"><BiLike className="like"/> </div>
    <div><FcLike className="f-like"/></div>
    <div className="-mt-1"><span className="text-sm text-gray-500 ">53K</span></div>
   
   
</div>
 

<div className="text-xs md:text-md -ml-1 md:ml-32">5.1K comments</div>
    <div className="text-xs md:text-md  -ml-1 -mr-1 md:ml-12">7.4K shares</div>
    <div className="text-xs md:text-md md:ml-6 ml-16 md:-mr-9 ">1.7M views</div>

   
</div>
       <div className="text-xs mt-2 ml-2 grid  grid-flow-col text-gray-500">
       <div className="download grid grid-flow-col md:ml-1">
        <BiLike className="downloadiconn mt-1 -mr-1 md:text-lg md:-mr-3" />
        <p className="downloadp mt-1 -ml-9 md:-ml-6 md:mt-1 lg:-ml-12">Like</p>
    </div>
    <div className="download grid grid-flow-col -ml-5 md:ml-48 lg:-mr-2">
        <FaRegComment className="downloadiconn lg:mt-1 md:mt-1 mt-2  -mr-3 md:text-lg md:-ml-28 lg:-ml-32 lg:-mr-16  md:-mr-3" />
        <p className="downloadp mt-1 -ml-7 md:-ml-32 md:mt-1 lg:-ml-40">Comment</p>
    </div>
    <div className="download grid grid-flow-col ml-1 md:ml-5 md:-mr-60 lg:ml-1 ">
        <FaWhatsapp className="downloadiconn lg:mt-1 md:mt-1 mt-2  -mr-2  md:text-lg md:-ml-8 md:-mr-44" />
        <p className="downloadp -ml-8 mt-1 md:-ml-40  md:mt-1 lg:-ml-48">Send</p>
    </div>
    <div className="download grid grid-flow-col -ml-1 md:ml-5 md:-mr-96">
        <PiShareFat className="downloadiconn lg:mt-1 md:mt-1 mt-2  md:text-lg md:-ml-2 -mr-12" />
        <p className="downloadp -ml-1 md:-ml-52 mt-1 -ml-6 lg:-ml-56 ">Share</p>
    </div>
       </div>

        </div>
        <div className="border-b pb-2 border-2  border-b-gray-400 md:border-none lg:ml-80 mt-2 md:ml-72 lg:mt-1 md:mt-1 md:-mt-1 md:w-3/5 lg:w-3/5 lg:mr-96  bg-white" >
        <div className="grid grid-flow-col mt-2">
            <div className="grid grid-flow-col mt-2">
                 <div>
        <img src="./pic28.jpg" width={50} height={50} className="rounded-full w-7 h-7 ml-1 md:ml-2 md:mr-3"/>
        </div>
        <div className="video-pp -ml-10 md:-ml-16 lg:-ml-40 ">
        <p className="video-pp1 text-xs">Tewodros Mezmur. <span className="text-xs text-blue-700 font-semibold">Follow</span> </p>
        <p className="video-pp2  text-xs">Today at 2:42 AM.<FaGlobeAsia className ="-mt-3 ml-24"/></p>
        </div>
            </div>
       
        <div className="grid grid-flow-col mt-2 md:-mr-7 lg:-mr-32">
        <a href="#">< BsThreeDots className="BsThreeDots ml-24 -mr-12 md:-mr-20 md:ml-52 lg:-mr-40 lg:ml-72"/></a> 
        <a href="#">< IoMdClose className="BsThreeDots  text-lg ml-1 lg:ml-1 -mr-12 md:ml-4  lg:-ml-20 "/></a> 
        </div>
        </div>
        <video src="./አጎንብሼ ሄጄ ቀና ብዬ መጣሁ _ ሊቀ መዘምራን ቴዎድሮስ ዮሴፍ.mp4" className="yilma mt-2 lg:w-full" controls = "autoplay"/>
<div className="grid grid-flow-col text-xs md:text-lg mt-2 text-gray-500">
    <div className="grid grid-flow-col w-12 ml-2 md:-mr-80">
    <div className="text-blue-500"><BiLike className="like"/> </div>
    <div><FcLike className="f-like"/></div>
    <div className="-mt-1"><span className="text-sm text-gray-500 ">53K</span></div>
   
   
</div>
 

<div className="text-xs md:text-md -ml-1 md:ml-32">5.1K comments</div>
    <div className="text-xs md:text-md  -ml-1 -mr-1 md:ml-12">7.4K shares</div>
    <div className="text-xs md:text-md md:ml-6 ml-16 md:-mr-9 ">1.7M views</div>

   
</div>
       <div className="text-xs mt-2 ml-2 grid  grid-flow-col text-gray-500">
       <div className="download grid grid-flow-col md:ml-1">
        <BiLike className="downloadiconn mt-1 -mr-1 md:text-lg md:-mr-3" />
        <p className="downloadp mt-1 -ml-9 md:-ml-6 md:mt-1 lg:-ml-12">Like</p>
    </div>
    <div className="download grid grid-flow-col -ml-5 md:ml-48 lg:-mr-2">
        <FaRegComment className="downloadiconn mt-1 -mr-3 md:text-lg md:-ml-28 lg:-ml-32 lg:-mr-16  md:-mr-3" />
        <p className="downloadp mt-1 -ml-7 md:-ml-32 md:mt-1 lg:-ml-40">Comment</p>
    </div>
    <div className="download grid grid-flow-col ml-1 md:ml-5 md:-mr-60 lg:ml-1 ">
        <FaWhatsapp className="downloadiconn mt-1 -mr-2  md:text-lg md:-ml-8 md:-mr-44" />
        <p className="downloadp -ml-8 mt-1 md:-ml-40  md:mt-1 lg:-ml-48">Send</p>
    </div>
    <div className="download grid grid-flow-col -ml-1 md:ml-5 md:-mr-96">
        <PiShareFat className="downloadiconn mt-1 md:text-lg md:-ml-2 -mr-12" />
        <p className="downloadp -ml-1 md:-ml-52 mt-1 -ml-6 lg:-ml-56 ">Share</p>
    </div>
       </div>

        </div>
        <div className="border-b pb-2 border-2  border-b-gray-400 md:border-none lg:ml-80 mt-2 md:ml-72 md:mt-1 md:-mt-1 md:w-3/5 lg:w-3/5 lg:mr-96  bg-white lg:mt-1" >
        <div className="grid grid-flow-col mt-2">
            <div className="grid grid-flow-col mt-2">
                 <div>
        <img src="./pic28.jpg" width={50} height={50} className="rounded-full w-7 h-7 ml-1 md:ml-2 md:mr-3"/>
        </div>
        <div className="video-pp -ml-10 md:-ml-16 lg:-ml-40 ">
        <p className="video-pp1 text-xs"> Tewodros Mezmur. <span className="text-xs text-blue-700 font-semibold">Follow</span> </p>
        <p className="video-pp2  text-xs">Today at 2:42 AM.<FaGlobeAsia className ="-mt-3 ml-24"/></p>
        </div>
            </div>
       
        <div className="grid grid-flow-col mt-2 md:-mr-4 lg:-mr-32">
        <a href="#">< BsThreeDots className="BsThreeDots ml-24 -mr-12 md:-mr-20 md:ml-52 lg:-mr-40 lg:ml-72"/></a> 
        <a href="#">< IoMdClose className="BsThreeDots  text-lg ml-1 lg:ml-1 -mr-12 md:ml-6  lg:-ml-20 "/></a> 
        </div>
        </div>
        <video src="./ምን አለ ያጎደልክብኝ Ethiopian Orthodox Mezmur by Liqe Mezemiran tewodros yosef.mp4" className="yilma mt-2 lg:w-full md:w-full w-full" controls = "autoplay"/>
<div className="grid grid-flow-col text-xs md:text-lg mt-2 text-gray-500">
    <div className="grid grid-flow-col w-12 ml-2 md:-mr-80">
    <div className="text-blue-500"><BiLike className="like"/> </div>
    <div><FcLike className="f-like"/></div>
    <div className="-mt-1"><span className="text-sm text-gray-500 ">53K</span></div>
   
   
</div>
 

<div className="text-xs md:text-md -ml-1 md:ml-32">5.1K comments</div>
    <div className="text-xs md:text-md  -ml-1 -mr-1 md:ml-12">7.4K shares</div>
    <div className="text-xs md:text-md md:ml-6 ml-16 md:-mr-9 ">1.7M views</div>

   
</div>
       <div className="text-xs mt-2 ml-2 grid  grid-flow-col text-gray-500">
       <div className="download grid grid-flow-col md:ml-1">
        <BiLike className="downloadiconn mt-1 -mr-1 md:text-lg md:-mr-3" />
        <p className="downloadp mt-1 -ml-9 md:-ml-6 md:mt-1 lg:-ml-12">Like</p>
    </div>
    <div className="download grid grid-flow-col -ml-5 md:ml-48 lg:-mr-2">
        <FaRegComment className="downloadiconn mt-1 -mr-3 md:text-lg md:-ml-28 lg:-ml-32 lg:-mr-16  md:-mr-3" />
        <p className="downloadp mt-1 -ml-7 md:-ml-32 md:mt-1 lg:-ml-40">Comment</p>
    </div>
    <div className="download grid grid-flow-col ml-1 md:ml-5 md:-mr-60 lg:ml-1 ">
        <FaWhatsapp className="downloadiconn mt-1 -mr-2  md:text-lg md:-ml-8 md:-mr-44" />
        <p className="downloadp -ml-8 mt-1 md:-ml-40  md:mt-1 lg:-ml-48">Send</p>
    </div>
    <div className="download grid grid-flow-col -ml-1 md:ml-5 md:-mr-96">
        <PiShareFat className="downloadiconn mt-1 md:text-lg md:-ml-2 -mr-12" />
        <p className="downloadp -ml-1 md:-ml-52 mt-1 -ml-6 lg:-ml-56 ">Share</p>
    </div>
       </div>

        </div>
        </div>
        
    </div>
    </>
)
}
export default Vedio