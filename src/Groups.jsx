import Navbar from "./Navbar";
import { CiShop } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { FaHouseChimneyCrack } from "react-icons/fa6";
import { FaTshirt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

function Groups(){
return (
    <>
    <div className="bg-gray-200">
        <div className="grid grid-flow-col col-span-2 ">
            <div className="bg-white lg:w-44">
            <div className="markrt-place-innere">
<div className="market-div">
    <p className="market-p">Groups</p>
    <IoSettingsSharp className="group-icon"/>
</div>
<input type="text" placeholder="Search groups" className="Search-Marketplacee"/>
<a href="#"><BsSearch  className="market-search"/></a> 
<a href="#" className="browse">
<CiShop className="brows-icon"/>
<p className="brows-all-pp">Your feed</p>
</a>
<div className="noti-div">
<a href="#" className="noti-a">
< RiCompassDiscoverLine  className="market-notification"/>
</a>
<a href="#" className="noti-a">
<p className="market-p1">Discover</p>
</a>

</div>
<div className="noti-div">
<a href="#" className="noti-a">
<MdGroups2 className="inbox-notification"/>
</a>
<a href="#" className="noti-a">
<p className="inbox-p1">Your groups</p>
</a>

</div>

<div className="border-div">
<a className="a-listt">+ Create new listing</a>
</div>
<div className="seeall">
<p className="seeall-p">Groups you've joined</p>
<a href="#" className="see-alla">See all</a>
</div>
<div className="groups-left-bottom">
    <div>
    <img src="./pic28.jpg" width={50} height={50} className="bottom-img"/>
    </div>
    <div className="bottom-div">
    <p className="bottom-div-p1">3D WALLPAPERS</p>
    <p className="bottom-div-p2">Last active 12 minutes ago</p>
    </div>
</div>

<div className="groups-left-bottom">
    <div>
    <img src="./pic27.jpg" width={50} height={50} className="bottom-img"/>
    </div>
    <div className="bottom-div">
    <p className="bottom-div-p1">3D WALLPAPERS</p>
    <p className="bottom-div-p2">Last active 12 minutes ago</p>
    </div>
</div>
<div className="groups-left-bottom">
    <div>
    <img src="./pic47.jpg" width={50} height={50} className="bottom-img"/>
    </div>
    <div className="bottom-div">
    <p className="bottom-div-p1">3D WALLPAPERS</p>
    <p className="bottom-div-p2">Last active 12 minutes ago</p>
    </div>
</div>
</div>
            </div>
            <div></div>
        </div>
    </div>
    </>
)
}
export default Groups