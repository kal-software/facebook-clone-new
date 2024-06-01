import { CiShop } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { FaHouseChimneyCrack } from "react-icons/fa6";
import { FaTshirt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";





function MarketPlace(){
return(
    <>
    <div>
    <div className="md:hidden lg:hidden">
        <div className="mt-8 grid grid-flow-col ">
            <div className="text-md font-semibold ml-3 ">
                <h1>Marketplace</h1>
            </div>
            <div className="grid grid-flow-col text-lg font-semibold ml-24">
                <div>
                    <IoMdPerson className="ml-16"/>
                </div>
                <div>
                 < BsSearch className="-ml-5"/>
                </div>
            </div>
        </div>
        <div className="grid grid-flow-col  mt-1 border-b pb-2 border-b-gray-400  ml-3 mr-5">
            <div><button className="bg-gray-300 grid grid-flow-col pl-10 pr-10  rounded-2xl text-lg"><IoMdPerson className="mt-1 mr-1"/>Sell</button></div>
            <div><button className="bg-gray-300 grid grid-flow-col pl-6 pr-6  rounded-2xl text-lg ml-10"><IoMdPerson  className="mt-1 mr-1"/>Categories</button></div>

        </div>
        <div className="grid grid-flow-col mt-2 ml-3 -mr-6 text-lg mb-2">
            <div >
                <h1 className="font-semibold">Today's picks</h1>
            </div>
            <div className="">
                <p className="grid grid-flow-col w-16 text-blue-600 ml-24"><FaLocationDot className="mt-1"/> Dessie</p>
                
            </div>
        </div>

        <div className="grid grid-flow-col ml-3">
        <div className="middle-div11 ml-2 mt-1">
        <img src="./pngegg (3).png" width={150} height={150} className="middle-img h-40 w-44"/>
        <p className="midle-p1 font-semibold text-md">Br3,500</p>
        <p className="midle-p2 text-md">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-gray-500 font-semibold text-md ">Dessie</p>
    </div>
    <div className="middle-div11 -ml-3 mt-1">
        <img src="./pngegg (2).png" width={150} height={150} className="middle-img h-40 w-44 ml-5"/>
        <p className="midle-p1 font-semibold text-md ml-5">Br3,500</p>
        <p className="midle-p2 text-md ml-5">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-gray-500 font-semibold text-md ml-5">Dessie</p>
    </div>
        </div>
        <div className="grid grid-flow-col mt-3 ml-3">
        <div className="middle-div11 ml-2 mt-1">
        <img src="./pngegg (1).png" width={150} height={150} className="middle-img h-40 w-44"/>
        <p className="midle-p1 font-semibold text-md">Br3,500</p>
        <p className="midle-p2 text-md">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-gray-500 font-semibold text-md ">Dessie</p>
    </div>
    <div className="middle-div11 -ml-3 mt-1">
        <img src="./pngegg (4).png" width={150} height={150} className="middle-img h-40 w-44 ml-5"/>
        <p className="midle-p1 font-semibold text-md ml-5">Br3,500</p>
        <p className="midle-p2 text-md ml-5">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-gray-500 font-semibold text-md ml-5">Dessie</p>
    </div>
        </div>

        <div className="grid grid-flow-col mt-3">
        <div className="middle-div11 ml-2 mt-1">
        <img src="./pngegg (5).png" width={150} height={150} className="middle-img h-40 w-44"/>
        <p className="midle-p1 font-semibold text-md">Br3,500</p>
        <p className="midle-p2 text-md">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-gray-500 font-semibold text-md ">Dessie</p>
    </div>
    <div className="middle-div11 -ml-7 mt-1">
        <img src="./pngegg (6).png" width={150} height={150} className="middle-img h-40 w-44 ml-5"/>
        <p className="midle-p1 font-semibold text-md ml-5">Br3,500</p>
        <p className="midle-p2 text-md ml-5">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-gray-500 font-semibold text-md ml-5">Dessie</p>
    </div>
        </div>
     

    </div>
    <div className="invisible md:visible lg:visible mt-10">
    <div className="Market-c grid grid-flow-col col-span-2 mt-3 ">
    <div>
    <div className="market-left-all  bg-white w-80  pt-1 pl-2 pb-60  shadow-md mt-6">
        <div className="markrt-place-inner ">

        <div className="market-div grid grid-flow-col text-lg mt-4">
            <p className="market-p font-semibold">Marketplace</p>
            <CiShop className="market-icon mt-1 bg-gray-300  ml-32 w-6 h-6 p-1 rounded-full "/>
        </div>
        <input type="text" placeholder="Search Marketplace " className="Search-Marketplace bg-gray-200 rounded-2xl w-72 mt-2 py-1 pl-10 placeholder:text-sm relative focus:outline-none text-sm"/>
      <a href="#"><BsSearch  className="market-search absolute top-24 mt-8 ml-5  text-sm"/></a> 
      <a href="#" className="browse bg-gray-200 rounded-sm w-72 grid grid-flow-col mt-3">
        <CiShop className="brows-icon mt-1 ml-2 bg-blue-700 text-white text-xl rounded-full p-1 mb-1 mr-5"/>
        <p className="brows-all-p -ml-32  text-sm mt-1 font-semibold">Browse all</p>
        </a>
        <div className="noti-div grid grid-flow-col mt-4">
<a href="#" className="noti-a">
<IoNotifications className="market-notification -mt-1 bg-gray-300 w-6 h-6 p-1 rounded-full mr-5 "/>
</a>
<a href="#" className="noti-a">
<p className="market-p1 text-sm font-semibold -ml-36 -mt-1">Notifications</p>
</a>

        </div>
        <div className="noti-div grid grid-flow-col mt-4">
<a href="#" className="noti-a">
<IoNotifications className="inbox-notification  -mt-1 bg-gray-300 w-6 h-6 p-1 rounded-full mr-5"/>
</a>
<a href="#" className="noti-a">
<p className="inbox-p1 text-sm font-semibold -ml-36 -mt-1">Inbox</p>
</a>

        </div>
        <div className="buy-div grid grid-flow-col mt-4">
<a href="#" className="buy-a">
<IoNotifications className="buy-notification -mt-1 bg-gray-300 w-6 h-6 p-1 rounded-full mr-5"/>
</a>
<a href="#" className="buy-a">
<p className="buy-p1 text-sm font-semibold -ml-12  -mt-1">Buying</p>
</a>
<a href="#" className="buy-aa ml-32"><IoMdClose/></a>
</div>
        <div className="sell-div grid grid-flow-col mt-4">
<a href="#" className="sell-a">
<IoNotifications className="sell-notification -mt-1 bg-gray-300 w-6 h-6 p-1 rounded-full mr-5"/>
</a>
<a href="#" className="sell-a">
<p className="sell-p1  text-sm font-semibold -ml-12 -mt-1">Selling</p>
</a>
<a href="#" className="buy-aa ml-32"><IoMdClose/></a>
 </div>
 <div className="border-div bg-blue-200 mt-3 text-sm text-blue-700 font-semibold h-6 pl-16 w-72 mb-2 rounded-sm">
        <a className="a-list">+ Create new listing</a>
        </div>
    </div>
    <div className="filter-div border-t border-gray-400 border-t-2 mr-6 border-b border-b-gray-400 border-b-2">
    <p className="filters-p font-semibold pt-3">Filters</p>
    <p className="filters-p2 font-semibold text-blue-600 text-sm mt-2 pb-3">Kombolcha . Within 65 kilometers</p>
    </div>
    <div>
        <p className="categories font-semibold mt-2">Categories</p>
        <div className="car-c grid grid-flow-col mt-4">
            <FaCar className="car-icon -mt-1 bg-gray-300 w-6 h-6 p-1 rounded-full mr-5"/>
            <p className="car-p text-sm font-semibold -ml-36  -mt-1">Vehicles</p>
        </div>
        <div className="car-c grid grid-flow-col mt-4">
            <FaHouseChimneyCrack className="car-icon -mt-1 bg-gray-300 w-6 h-6 p-1 rounded-full mr-5"/>
            <p className="car-p text-sm font-semibold -ml-36  -mt-1">Property Rentals</p>
        </div>
        <div className="car-c grid grid-flow-col mt-4">
            <FaTshirt className="car-icon -mt-1 bg-gray-300 w-6 h-6 p-1 rounded-full mr-5"/>
            <p className="car-p text-sm font-semibold -ml-36  -mt-1">Apparel</p>
        </div>
    </div>
    </div>
    </div>
    <div className="new-xx overflow-auto overflow-scroll h-3/5 pr-2 mt-12 ">
<div className="new-c bg-white ml-3 mr-1 rounded-md shadow-sm pl-3 grid grid-flow-col pb-2 lg:h-32">
    <div >
    <p className="new-p mb-4 mt-1 font-semibold text-sm">New for you</p>
    <div className="new-div grid grid-flow-col text-sm lg:mr-10">
    <div>
        <img src="./shoes15.png" width={50} height={40} className="new-image1 h-12 w-16 rounded-sm mr-2"/>
    </div>
    <p className="new-p1 text-sm lg:text-md">40+ items Were just added to your buy and sell groups.<br/><span className="span text-blue-600 font-semibold">6w</span></p>
    </div>
    </div>

    <div className="new-div2 grid grid-flow-col mt-11">
    <div>
        <img src="./shoes16.png" width={45} height={40} className="new-image2 h-12 w-16 rounded-sm mr-2"/>
    </div>
    <p className="new-p1 text-sm">40+ items Were just added to your buy and sell groups.<br/><span className="span2 text-blue-600 font-semibold">6w</span></p>
    </div>
</div>
<div>
<div className="locat-div grid grid-flow-col ml-4 mt-2">
<p className="today text-sm font-semibold">Today's picks</p>
<p className="p-i grid grid-flow-col ml-80 text-sm text-blue-700 font-semibold lg:ml-96 lg:-mr-20"><FaLocationDot className="-mr-32 -ml-1 mt-1 lg:ml-20"/>Kalu .65 km</p>
</div>
<div className="middle-promotion-div grid grid-flow-col mt-5 ml-3">
    <div className="middle-div11">
        <img src="./pngegg.png" width={150} height={150} className="middle-img w-32 mr-20 h-40 rounded-md lg:w-48 lg:mr-10"/>
        <p className="midle-p1 text-sm">Br3,500</p>
        <p className="midle-p2 text-sm">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-sm">Dessie</p>
    </div>
    <div className="middle-div11">
        <img src="./pngegg (6).png" width={150} height={150} className="middle-img w-32 h-40 mr-20 rounded-md lg:w-48 lg:mr-10"/>
        <p className="midle-p1 text-sm">Br3,500</p>
        <p className="midle-p2 text-sm">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-sm">Dessie</p>
    </div>
    <div className="middle-div11">
        <img src="./pngegg (3).png" width={150} height={150} className="middle-img w-32 h-40 mr-20 rounded-md lg:w-48 lg:mr-10"/>
        <p className="midle-p1 text-sm">Br3,500</p>
        <p className="midle-p2 text-sm">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-sm">Dessie</p>
    </div>
    <div className="middle-div11  ">
        <img src="./pngegg (2).png" width={150} height={150} className="middle-img rounded-md w-32 h-40 rounded-md lg:w-48 lg:mr-10"/>
        <p className="midle-p1 text-sm">Br3,500</p>
        <p className="midle-p2 text-sm">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-sm">Dessie</p>
    </div>
    <div className="middle-div11 md:hidden">
        <img src="./shoes17.jpg" width={150} height={150} className="middle-img rounded-md"/>
        <p className="midle-p1">Br3,500</p>
        <p className="midle-p2">Disaar hair growth[hidden<br/>information]</p>
        <p className="midle-p3">Dessie</p>
    </div>
    
</div>
<div className="middle-promotion-div grid grid-flow-col mt-3 ml-3">
    <div className="middle-div11">
        <img src="./shoes14.png" width={150} height={150} className="middle-img w-32 mr-20 h-40 rounded-md lg:w-48 lg:mr-10"/>
        <p className="midle-p1 text-sm">Br3,500</p>
        <p className="midle-p2 text-sm">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-sm">Dessie</p>
    </div>
    <div className="middle-div11">
        <img src="./shoes16.png" width={150} height={150} className="middle-img w-32 mr-20 h-40 rounded-md lg:w-48 lg:mr-10 bg-transparent"/>
        <p className="midle-p1 text-sm">Br3,500</p>
        <p className="midle-p2 text-sm">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-sm">Dessie</p>
    </div>
    <div className="middle-div11">
        <img src="./shoes15.png" width={150} height={150} className="middle-img w-32 mr-20 h-40 rounded-md lg:w-48 lg:mr-10"/>
        <p className="midle-p1 text-sm">Br3,500</p>
        <p className="midle-p2 text-sm">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-sm">Dessie</p>
    </div>
    <div className="middle-div11 ">
        <img src="./shoes13.png" width={150} height={150} className="middle-img w-32 mr-20 h-40 rounded-md lg:w-48 lg:mr-10"/>
        <p className="midle-p1 text-sm">Br3,500</p>
        <p className="midle-p2 text-sm">Disaar hair growth<br/>[hiddeninformation]</p>
        <p className="midle-p3 text-sm">Dessie</p>
    </div>
    <div className="middle-div11 md:hidden">
        <img src="./shoes14.png" width={150} height={150} className="middle-img"/>
        <p className="midle-p1">Br3,500</p>
        <p className="midle-p2">Disaar hair growth[hidden<br/>information]</p>
        <p className="midle-p3">Dessie</p>
    </div>
    
</div>

</div>
    </div>
</div>
    </div>
    </div>
    
    </>
)
}
export default MarketPlace