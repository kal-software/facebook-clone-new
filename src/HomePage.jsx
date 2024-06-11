import { FaUserFriends } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdGroupWork } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { RiMemoriesLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { FaFlag } from "react-icons/fa6";
import { MdOutlineEventBusy } from "react-icons/md";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
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

function HomePage() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="flex  mt-14">
        <div className="left-c hover:w-64  scrollbar-w-1   hover:overflow-scroll scrollbar-invisible hover:scrollbar-thin hover:h-full hover:pb-10 z-0 hover:scrollbar-thumb-gray-500 hover:scrollbar-thumb-1 hover:scrollbar-track-gray-200   lg:h-full md:h-96 fixed -mt-5 lg:grid lg:grid-flow-row lg:ml-5 lg:w-60  md:grid md:grid-flow-row md:ml-5 md:w-44">
          <div className=" name-div  hidden sm:block   lg:ml-5 lg:grid lg:grid-flow-col md:ml-5 md:grid md:grid-flow-col  mb-3  md:mt-5">
            <img
              src="./pic50.jpg"
              className=" lg:w-6 lg:h-6 md:w-5 md:h-5 md:mt-2  md:rounden-full rounded-full lg:-mr-2 md:-ml-5"
            />
            <a href="#" className="KA">
              <p className="kalkidan lg:-ml-16 md:mt-1 md:text-md -ml-4 ">
                Kalkidan solomon
              </p>
            </a>
          </div>
          <div className="friends-div hidden sm:block md:mt-1  lg:grid lg:grid-flow-col md:grid md:grid-flow-col  lg:-mb-1 mt-2 ">
            <FaUserFriends className="icon-image1 lg:-mr-1 text-blue-500 md:-mr-3 lg:text-xl md:text-xl" />
            <a href="#" className="FA">
              <p className="friends lg:-ml-24 md:text-md md:-ml-16">Friends</p>
            </a>
          </div>
          <div className="feeds-container md:mt-3 hidden md:grid md:grid-flow-col lg:grid lg:grid-flow-col  lg:mt-4  ">
            <MdOutlineOndemandVideo className="icon-image2 lg:-mr-1 md:-mr-3 text-blue-500 lg:text-xl md:text-xl" />
            <a href="#" className="FA">
              <p className="feeds lg:-ml-24 md:text-md md:-ml-16">Feeds</p>
            </a>
          </div>
          <div className="groups-container hidden md:mt-3 md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4 ">
            <MdGroupWork className="icon-image3 lg:-mr-1 text-blue-500 lg:text-xl md:text-xl md:-mr-3" />
            <a href="#" className="GA">
              <p className="groups lg:-ml-24 md:-ml-16 md:text-md -mt-1">
                Groups
              </p>
            </a>
          </div>
          <div className="market-container md:mt-3 hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4">
            <CiShop className="icon-image4 lg:-mr-1  text-blue-500 lg:text-xl md:text-xl md:-mr-2" />
            <a href="#" className="MA">
              {" "}
              <p className="market lg:-ml-24 md:text-md md:-ml-12">
                MarketPlace
              </p>
            </a>
          </div>
          <div className="video-container md:mt-3 hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4">
            <MdOutlineOndemandVideo className="icon-image5 lg:-mr-1 md:text-xl md:-mr-2  text-blue-500 lg:text-xl" />
            <a href="#" className="VA">
              <p className="video lg:-ml-24 md:text-md md:-ml-16">Video</p>
            </a>
          </div>
          <div className="memory-container md:mt-3 hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col  lg:mt-4">
            <RiMemoriesLine className="icon-image6 md:text-xl md:-mr-2  lg:-mr-1  text-blue-500 lg:text-xl" />
            <a href="#" className="MA">
              <p className="memory lg:-ml-24 md:text-md md:-ml-16">Memories</p>
            </a>
          </div>
          <div className="saved-container hidden md:mt-3 md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4">
            <CiBookmark className="icon-image7 lg:-mr-1 md:text-xl md:-mr-3  text-blue-500 lg:text-xl" />
            <a href="#" className="SA">
              <p className="saved lg:-ml-24 md:text-md md:-ml-16">Saved</p>
            </a>
          </div>
          <div className="page-container md:mt-3 hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-3">
            <FaFlag className="icon-image8 lg:-mr-1 md:text-xl md:-mr-2 text-blue-500 lg:text-xl" />
            <a href="#" className="PA">
              <p className="page lg:-ml-24 md:text-md md:-ml-16">Pages</p>
            </a>
          </div>
          <div className="event-container md:mt-3  hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4">
            <MdOutlineEventBusy className="icon-image9 lg:-mr-1 md:text-xl md:-mr-3 text-blue-500 lg:text-xl" />
            <a href="#" className="EA">
              <p className="event lg:-ml-24 md:text-md md:-ml-16">Events</p>
            </a>
          </div>
          <div className="ads-container md:mt-3 hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4">
            <BsFillFileEarmarkSpreadsheetFill className="icon-image10 md:text-xl  lg:-mr-1  text-blue-500 lg:text-xl" />
            <a href="#" className="AA">
              <p className="ads lg:-ml-24 md:text-md md:-ml-12">Ads Manager</p>
            </a>
          </div>
          <div className="see-container md:mt-5 hidden md:grid md:grid-flow-col  lg:grid lg:grid-flow-col lg:mt-4">
            <a href="#">
              <FaChevronDown className="icon-image11 lg:-mr-1 md:-mr-3 md:mt-1 md:text-xl large:text-xs  text-black lg:text-xl  bg-gray-300 w-5 h-5 p-1 rounded-full" />
            </a>
            <a href="#" className="pA">
              <p className="ads lg:-ml-24 md:text-md md:-ml-16 h-10 -12">
                See more
              </p>
            </a>
          </div>
          <footer className="footer hidden sm:block text-xs mt-1 text-gray-500 ">
            Privacy - Terms -Advertizing -Ad Choices . Cookies.
            <br />
            More . Meta &copy; 2024
          </footer>
        </div>

        <div className="-mt-3 -mb-1  w-1/2 ml-80">
          <Slider {...settings}>
            {Stories.map((story) => (
              <div className="mt-1  z-0 ">
                <div className=" div rounded-lg pt-2 relative w-40 pl-2 pr-2">
                  <img
                    src={story.image}
                    className="rounded-lg w-24 h-32 lg:h-60 lg:w-40  "
                  />
                </div>
                <div className="text-sm font-mono text-white -mt-9 font-bold  ml-4 ">
                  {story.text}
                </div>
                <div>{story.icon}</div>
                <div>
                  {" "}
                  <img
                    src={story.image2}
                    className="w-10 h-10 border-4 border-blue-700 rounded-full absolute top-5 ml-5"
                  />{" "}
                </div>
              </div>
            ))}
          </Slider>
          <div className="lg:w-4/5 lg:h-28 shadow-md  hidden sm:block middle-middle-div  md:text-sm mt-5 bg-white   md:pr-1 md:h-24 h-16 rounded-md md:w-full ml-4 lg:ml-14 md:-ml-1 lg:-mt-2">
            <div className="middle-image-container  grid grid-flow-col md:border-b md:border-b-1 sm:mt-1  md:pb-2 pt-5   md:border-gray   md:mt-6 md:pt-3  md:ml-3 md:mr-3 md:grid md:grid-flow-col lg:pb-2  ">
              <img
                src="./pic50.jpg"
                height={30}
                width={30}
                className="middle-image rounded-full ml-4  md:ml-2 md:w-6 lg:w-9 lg:h-9 md:h-6 md:rounded-full"
              />
              <input
                type="text"
                placeholder="What's on your mind kal?"
                className="input md:placeholder-sm pl-7  bg-slate-100  md:-ml-7 md:w-56 lg:h-10 lg:w-96 -ml-5 md:pl-2 lg:pl-3  placeholder:text-gray-400 rounded-3xl focus:outline-none placeholder-shown:text-sm lg:-ml-6 "
              />
            </div>
            <div className="middle-manage md:text-sm md:mt-3 hidden md:mt-1sm:block md:grid md:grid-flow-col">
              <div className="liveDiv md:grid md:grid-flow-col md:ml-5 lg:ml-10 ">
                <RiLiveFill className="video text-red-600 lg:-mr-5 text-2xl mt-1" />
                <p className="video-p md:-mt-1 md:-ml-1 lg:-ml-6 lg:mt-1 text-gray-500">
                  Live Video
                </p>
              </div>
              <div className="photo-div md:grid md:grid-flow-col">
                <BiSolidPhotoAlbum className="photo-icon text-green-400 lg:-mr-6 text-2xl mt-1" />
                <p className="photo-p md:-mt-1 md:-ml-1 lg:-ml-6 lg:mt-1 text-gray-500">
                  Photo/Video
                </p>
              </div>
              <div className="imoj-div md:grid md:grid-flow-col">
                <BiHappyAlt className="imoj-icon text-yellow-400 text-2xl mt-1 -mr-1" />
                <p className="imoj-p md:-mt-1 md:-ml-1 lg:-ml-10 lg:mt-1 text-gray-500">
                  Felling/activity
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-2 bg-white pt-3 md:pt-1 ml-1 lg:ml-14 md:ml-0 w-4/5 rounded-md">
            <div className="info-div  grid  grid-flow-col w-44  md:mt-5 md:pt-1 md:pl-1">
              <div className=" grid grid-flow-col pl-3 ">
                <div>
                  <img
                    src="./pic50.jpg  "
                    className="info-img rounded-full w-6 h-6 -mt-2 md:w-6 md:h-6 md:rounded-full "
                  />
                </div>
                <div className="-mt-2">
                  <p className="chirs text-sm font-semibold   md:ml-2">
                    Cristiano Ronaldo
                  </p>
                  <p className="yesterday text-xs text text-gray-400 pl-2 grid grid-flow-col">
                    Yesterday at1:25 pm.
                    <FaGlobeAmericas className="text-small mt-1 -mr-40" />{" "}
                  </p>
                  <p className="black text-xs mt-2 ml-2 mb-2">Back fo more</p>
                </div>
              </div>
              <div className="right-close w-1 grid grid-flow-col  text-2xl">
                <a href="#" className="a">
                  <BsThreeDots className="dots ml-20 md:ml-28   lg:ml-60 text-gray-600 " />
                </a>
                <a href="#" className="a">
                  <IoMdClose className="close ml-2 lg:ml-3 text-gray-600 " />
                </a>
              </div>
            </div>
            <div>
              <img src="./im17.jpeg" className="w-full h-72" />
            </div>
            <div className="father-comment grid grid-flow-row">
              <div className="text-xl comments-field grid grid-flow-col border-b border-gray-500 md:ml-1 md:mr-1 ">
                <div className="interal-comments mt-2   grid grid-flow-col lg:mr-20 lg:ml-1">
                  <BiLike className="lought ml-1  text-gray-600 " />
                  <FcLike className="likes -ml-6 md:-ml-1 lg:-ml-7" />
                  <div className="span -ml-8 text-lg lg:-ml-9 -mt-1 text-blue-600 md:-ml-1">
                    43
                  </div>
                </div>
                <div className="comments lg:-mr-16 md:ml-48 text-sm ml-32 mt-2 text-gray-600 font-semibold">
                  14 Comments
                </div>
              </div>
              <div className="comment-container md:ml-1 mt-3 mb-5 pb-2 grid grid-flow-col">
                <div className="likee grid grid-flow-col text-lg ml-1">
                  <div>
                    <BiLike className="like-icon ml-1 text-gray-600 text-xl" />
                  </div>
                  <div className="like-p text-sm -ml-7 text-gray-600 md:-ml-6 lg:-ml-9">
                    Like
                  </div>
                </div>
                <div className="comment grid grid-flow-col -ml-1 md:ml-2">
                  <div>
                    <FaRegComment className="comment-icon mr-1 ml-2 text-gray-600 text-xl" />
                  </div>
                  <div className="comment-p text-gray-600 -ml-7 text-sm md:-ml-6 lg:-ml-9">
                    Comment
                  </div>
                </div>
                <div className="send grid grid-flow-col ml-2 md:ml-2 ">
                  <div>
                    <MdSend className="send-icon text-gray-600 ml-2 text-xl" />
                  </div>
                  <div className="send-p text-gray-600 text-sm -ml-7 lg:-ml-9 ">
                    Send
                  </div>
                </div>
                <div className="share grid grid-flow-col ml-12">
                  <div>
                    <PiShareFat className="share-icon text-gray-600 -ml-1 text-xl" />
                  </div>
                  <div className="share-p text-gray-600 text-sm mr-12 -ml-7 md:-mr-20 lg:-ml-9">
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-2 bg-white pt-3 md:pt-1 ml-1 lg:ml-14 md:ml-0 w-4/5 rounded-md">
            <div className="info-div  grid  grid-flow-col w-44  md:mt-5 md:pt-1 md:pl-1">
              <div className=" grid grid-flow-col pl-3 ">
                <div>
                  <img
                    src="./pic49.jpg  "
                    className="info-img rounded-full w-6 h-6 -mt-2 md:w-6 md:h-6 md:rounded-full "
                  />
                </div>
                <div className="-mt-2">
                  <p className="chirs text-sm font-semibold   md:ml-2">
                    Cristiano Ronaldo
                  </p>
                  <p className="yesterday text-xs text text-gray-400 pl-2 grid grid-flow-col">
                    Yesterday at1:25 pm.
                    <FaGlobeAmericas className="text-small mt-1 -mr-40" />{" "}
                  </p>
                  <p className="black text-xs mt-2 ml-2 mb-2">Back fo more</p>
                </div>
              </div>
              <div className="right-close w-1 grid grid-flow-col  text-2xl">
                <a href="#" className="a">
                  <BsThreeDots className="dots ml-20 md:ml-28   lg:ml-60 text-gray-600 " />
                </a>
                <a href="#" className="a">
                  <IoMdClose className="close ml-2 lg:ml-3 text-gray-600 " />
                </a>
              </div>
            </div>
            <div>
              <img src="./im3.jpg" className="w-full h-72 " />
            </div>
            <div className="father-comment grid grid-flow-row">
              <div className="text-xl comments-field grid grid-flow-col border-b border-gray-500 md:ml-1 md:mr-1 ">
                <div className="interal-comments mt-2   grid grid-flow-col lg:mr-20 lg:ml-1">
                  <BiLike className="lought ml-1  text-gray-600 " />
                  <FcLike className="likes -ml-6 md:-ml-1 lg:-ml-7" />
                  <div className="span -ml-8 text-lg lg:-ml-9 -mt-1 text-blue-600 md:-ml-1">
                    43
                  </div>
                </div>
                <div className="comments lg:-mr-16 md:ml-48 text-sm ml-32 mt-2 text-gray-600 font-semibold">
                  14 Comments
                </div>
              </div>
              <div className="comment-container md:ml-1 mt-3 mb-5 pb-2 grid grid-flow-col">
                <div className="likee grid grid-flow-col text-lg ml-1">
                  <div>
                    <BiLike className="like-icon ml-1 text-gray-600 text-xl" />
                  </div>
                  <div className="like-p text-sm -ml-7 text-gray-600 md:-ml-6 lg:-ml-9">
                    Like
                  </div>
                </div>
                <div className="comment grid grid-flow-col -ml-1 md:ml-2">
                  <div>
                    <FaRegComment className="comment-icon mr-1 ml-2 text-gray-600 text-xl" />
                  </div>
                  <div className="comment-p text-gray-600 -ml-7 text-sm md:-ml-6 lg:-ml-9">
                    Comment
                  </div>
                </div>
                <div className="send grid grid-flow-col ml-2 md:ml-2 ">
                  <div>
                    <MdSend className="send-icon text-gray-600 ml-2 text-xl" />
                  </div>
                  <div className="send-p text-gray-600 text-sm -ml-7 lg:-ml-9 ">
                    Send
                  </div>
                </div>
                <div className="share grid grid-flow-col ml-12">
                  <div>
                    <PiShareFat className="share-icon text-gray-600 -ml-1 text-xl" />
                  </div>
                  <div className="share-p text-gray-600 text-sm mr-12 -ml-7 md:-mr-20 lg:-ml-9">
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-2 bg-white pt-3 md:pt-1 ml-1 lg:ml-14 md:ml-0 w-4/5 rounded-md">
            <div className="info-div  grid  grid-flow-col w-44  md:mt-5 md:pt-1 md:pl-1">
              <div className=" grid grid-flow-col pl-3 ">
                <div>
                  <img
                    src="./pic50.jpg  "
                    className="info-img rounded-full w-6 h-6 -mt-2 md:w-6 md:h-6 md:rounded-full "
                  />
                </div>
                <div className="-mt-2">
                  <p className="chirs text-sm font-semibold   md:ml-2">
                    Cristiano Ronaldo
                  </p>
                  <p className="yesterday text-xs text text-gray-400 pl-2 grid grid-flow-col">
                    Yesterday at1:25 pm.
                    <FaGlobeAmericas className="text-small mt-1 -mr-40" />{" "}
                  </p>
                  <p className="black text-xs mt-2 ml-2 mb-2">Back fo more</p>
                </div>
              </div>
              <div className="right-close w-1 grid grid-flow-col  text-2xl">
                <a href="#" className="a">
                  <BsThreeDots className="dots ml-20 md:ml-28   lg:ml-60 text-gray-600 " />
                </a>
                <a href="#" className="a">
                  <IoMdClose className="close ml-2 lg:ml-3 text-gray-600 " />
                </a>
              </div>
            </div>
            <div>
              <img src="./im18.webp" className="w-full h-72" />
            </div>
            <div className="father-comment grid grid-flow-row">
              <div className="text-xl comments-field grid grid-flow-col border-b border-gray-500 md:ml-1 md:mr-1 ">
                <div className="interal-comments mt-2   grid grid-flow-col lg:mr-20 lg:ml-1">
                  <BiLike className="lought ml-1  text-gray-600 " />
                  <FcLike className="likes -ml-6 md:-ml-1 lg:-ml-7" />
                  <div className="span -ml-8 text-lg lg:-ml-9 -mt-1 text-blue-600 md:-ml-1">
                    43
                  </div>
                </div>
                <div className="comments lg:-mr-16 md:ml-48 text-sm ml-32 mt-2 text-gray-600 font-semibold">
                  14 Comments
                </div>
              </div>
              <div className="comment-container md:ml-1 mt-3 mb-5 pb-2 grid grid-flow-col">
                <div className="likee grid grid-flow-col text-lg ml-1">
                  <div>
                    <BiLike className="like-icon ml-1 text-gray-600 text-xl" />
                  </div>
                  <div className="like-p text-sm -ml-7 text-gray-600 md:-ml-6 lg:-ml-9">
                    Like
                  </div>
                </div>
                <div className="comment grid grid-flow-col -ml-1 md:ml-2">
                  <div>
                    <FaRegComment className="comment-icon mr-1 ml-2 text-gray-600 text-xl" />
                  </div>
                  <div className="comment-p text-gray-600 -ml-7 text-sm md:-ml-6 lg:-ml-9">
                    Comment
                  </div>
                </div>
                <div className="send grid grid-flow-col ml-2 md:ml-2 ">
                  <div>
                    <MdSend className="send-icon text-gray-600 ml-2 text-xl" />
                  </div>
                  <div className="send-p text-gray-600 text-sm -ml-7 lg:-ml-9 ">
                    Send
                  </div>
                </div>
                <div className="share grid grid-flow-col ml-12">
                  <div>
                    <PiShareFat className="share-icon text-gray-600 -ml-1 text-xl" />
                  </div>
                  <div className="share-p text-gray-600 text-sm mr-12 -ml-7 md:-mr-20 lg:-ml-9">
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-2 bg-white pt-3 md:pt-1 ml-1 lg:ml-14 md:ml-0 w-4/5 rounded-md">
            <div className="info-div  grid  grid-flow-col w-44  md:mt-5 md:pt-1 md:pl-1">
              <div className=" grid grid-flow-col pl-3 ">
                <div>
                  <img
                    src="./pic50.jpg  "
                    className="info-img rounded-full w-6 h-6 -mt-2 md:w-6 md:h-6 md:rounded-full "
                  />
                </div>
                <div className="-mt-2">
                  <p className="chirs text-sm font-semibold   md:ml-2">
                    Cristiano Ronaldo
                  </p>
                  <p className="yesterday text-xs text text-gray-400 pl-2 grid grid-flow-col">
                    Yesterday at1:25 pm.
                    <FaGlobeAmericas className="text-small mt-1 -mr-40" />{" "}
                  </p>
                  <p className="black text-xs mt-2 ml-2 mb-2">Back fo more</p>
                </div>
              </div>
              <div className="right-close w-1 grid grid-flow-col  text-2xl">
                <a href="#" className="a">
                  <BsThreeDots className="dots ml-20 md:ml-28   lg:ml-60 text-gray-600 " />
                </a>
                <a href="#" className="a">
                  <IoMdClose className="close ml-2 lg:ml-3 text-gray-600 " />
                </a>
              </div>
            </div>
            <div>
              <img src="./im24.webp" className="w-full h-72" />
            </div>
            <div className="father-comment grid grid-flow-row">
              <div className="text-xl comments-field grid grid-flow-col border-b border-gray-500 md:ml-1 md:mr-1 ">
                <div className="interal-comments mt-2   grid grid-flow-col lg:mr-20 lg:ml-1">
                  <BiLike className="lought ml-1  text-gray-600 " />
                  <FcLike className="likes -ml-6 md:-ml-1 lg:-ml-7" />
                  <div className="span -ml-8 text-lg lg:-ml-9 -mt-1 text-blue-600 md:-ml-1">
                    43
                  </div>
                </div>
                <div className="comments lg:-mr-16 md:ml-48 text-sm ml-32 mt-2 text-gray-600 font-semibold">
                  14 Comments
                </div>
              </div>
              <div className="comment-container md:ml-1 mt-3 mb-5 pb-2 grid grid-flow-col">
                <div className="likee grid grid-flow-col text-lg ml-1">
                  <div>
                    <BiLike className="like-icon ml-1 text-gray-600 text-xl" />
                  </div>
                  <div className="like-p text-sm -ml-7 text-gray-600 md:-ml-6 lg:-ml-9">
                    Like
                  </div>
                </div>
                <div className="comment grid grid-flow-col -ml-1 md:ml-2">
                  <div>
                    <FaRegComment className="comment-icon mr-1 ml-2 text-gray-600 text-xl" />
                  </div>
                  <div className="comment-p text-gray-600 -ml-7 text-sm md:-ml-6 lg:-ml-9">
                    Comment
                  </div>
                </div>
                <div className="send grid grid-flow-col ml-2 md:ml-2 ">
                  <div>
                    <MdSend className="send-icon text-gray-600 ml-2 text-xl" />
                  </div>
                  <div className="send-p text-gray-600 text-sm -ml-7 lg:-ml-9 ">
                    Send
                  </div>
                </div>
                <div className="share grid grid-flow-col ml-12">
                  <div>
                    <PiShareFat className="share-icon text-gray-600 -ml-1 text-xl" />
                  </div>
                  <div className="share-p text-gray-600 text-sm mr-12 -ml-7 md:-mr-20 lg:-ml-9">
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-2 bg-white pt-3 md:pt-1 ml-1 lg:ml-14 md:ml-0 w-4/5 rounded-md">
            <div className="info-div  grid  grid-flow-col w-44  md:mt-5 md:pt-1 md:pl-1">
              <div className=" grid grid-flow-col pl-3 ">
                <div>
                  <img
                    src="./pic50.jpg  "
                    className="info-img rounded-full w-6 h-6 -mt-2 md:w-6 md:h-6 md:rounded-full "
                  />
                </div>
                <div className="-mt-2">
                  <p className="chirs text-sm font-semibold   md:ml-2">
                    Cristiano Ronaldo
                  </p>
                  <p className="yesterday text-xs text text-gray-400 pl-2 grid grid-flow-col">
                    Yesterday at1:25 pm.
                    <FaGlobeAmericas className="text-small mt-1 -mr-40" />{" "}
                  </p>
                  <p className="black text-xs mt-2 ml-2 mb-2">Back fo more</p>
                </div>
              </div>
              <div className="right-close w-1 grid grid-flow-col  text-2xl">
                <a href="#" className="a">
                  <BsThreeDots className="dots ml-20 md:ml-28   lg:ml-60 text-gray-600 " />
                </a>
                <a href="#" className="a">
                  <IoMdClose className="close ml-2 lg:ml-3 text-gray-600 " />
                </a>
              </div>
            </div>
            <div>
              <img src="./im6.jpeg" className="w-full h-72" />
            </div>
            <div className="father-comment grid grid-flow-row">
              <div className="text-xl comments-field grid grid-flow-col border-b border-gray-500 md:ml-1 md:mr-1 ">
                <div className="interal-comments mt-2   grid grid-flow-col lg:mr-20 lg:ml-1">
                  <BiLike className="lought ml-1  text-gray-600 " />
                  <FcLike className="likes -ml-6 md:-ml-1 lg:-ml-7" />
                  <div className="span -ml-8 text-lg lg:-ml-9 -mt-1 text-blue-600 md:-ml-1">
                    43
                  </div>
                </div>
                <div className="comments lg:-mr-16 md:ml-48 text-sm ml-32 mt-2 text-gray-600 font-semibold">
                  14 Comments
                </div>
              </div>
              <div className="comment-container md:ml-1 mt-3 mb-5 pb-2 grid grid-flow-col">
                <div className="likee grid grid-flow-col text-lg ml-1">
                  <div>
                    <BiLike className="like-icon ml-1 text-gray-600 text-xl" />
                  </div>
                  <div className="like-p text-sm -ml-7 text-gray-600 md:-ml-6 lg:-ml-9">
                    Like
                  </div>
                </div>
                <div className="comment grid grid-flow-col -ml-1 md:ml-2">
                  <div>
                    <FaRegComment className="comment-icon mr-1 ml-2 text-gray-600 text-xl" />
                  </div>
                  <div className="comment-p text-gray-600 -ml-7 text-sm md:-ml-6 lg:-ml-9">
                    Comment
                  </div>
                </div>
                <div className="send grid grid-flow-col ml-2 md:ml-2 ">
                  <div>
                    <MdSend className="send-icon text-gray-600 ml-2 text-xl" />
                  </div>
                  <div className="send-p text-gray-600 text-sm -ml-7 lg:-ml-9 ">
                    Send
                  </div>
                </div>
                <div className="share grid grid-flow-col ml-12">
                  <div>
                    <PiShareFat className="share-icon text-gray-600 -ml-1 text-xl" />
                  </div>
                  <div className="share-p text-gray-600 text-sm mr-12 -ml-7 md:-mr-20 lg:-ml-9">
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-2 bg-white pt-3 md:pt-1 ml-1 lg:ml-14 md:ml-0 w-4/5 rounded-md">
            <div className="info-div  grid  grid-flow-col w-44  md:mt-5 md:pt-1 md:pl-1">
              <div className=" grid grid-flow-col pl-3 ">
                <div>
                  <img
                    src="./pic50.jpg  "
                    className="info-img rounded-full w-6 h-6 -mt-2 md:w-6 md:h-6 md:rounded-full "
                  />
                </div>
                <div className="-mt-2">
                  <p className="chirs text-sm font-semibold   md:ml-2">
                    Cristiano Ronaldo
                  </p>
                  <p className="yesterday text-xs text text-gray-400 pl-2 grid grid-flow-col">
                    Yesterday at1:25 pm.
                    <FaGlobeAmericas className="text-small mt-1 -mr-40" />{" "}
                  </p>
                  <p className="black text-xs mt-2 ml-2 mb-2">Back fo more</p>
                </div>
              </div>
              <div className="right-close w-1 grid grid-flow-col  text-2xl">
                <a href="#" className="a">
                  <BsThreeDots className="dots ml-20 md:ml-28   lg:ml-60 text-gray-600 " />
                </a>
                <a href="#" className="a">
                  <IoMdClose className="close ml-2 lg:ml-3 text-gray-600 " />
                </a>
              </div>
            </div>
            <div>
              <img src="./im14.jpeg" className="w-full h-72" />
            </div>
            <div className="father-comment grid grid-flow-row">
              <div className="text-xl comments-field grid grid-flow-col border-b border-gray-500 md:ml-1 md:mr-1 ">
                <div className="interal-comments mt-2   grid grid-flow-col lg:mr-20 lg:ml-1">
                  <BiLike className="lought ml-1  text-gray-600 " />
                  <FcLike className="likes -ml-6 md:-ml-1 lg:-ml-7" />
                  <div className="span -ml-8 text-lg lg:-ml-9 -mt-1 text-blue-600 md:-ml-1">
                    43
                  </div>
                </div>
                <div className="comments lg:-mr-16 md:ml-48 text-sm ml-32 mt-2 text-gray-600 font-semibold">
                  14 Comments
                </div>
              </div>
              <div className="comment-container md:ml-1 mt-3 mb-5 pb-2 grid grid-flow-col">
                <div className="likee grid grid-flow-col text-lg ml-1">
                  <div>
                    <BiLike className="like-icon ml-1 text-gray-600 text-xl" />
                  </div>
                  <div className="like-p text-sm -ml-7 text-gray-600 md:-ml-6 lg:-ml-9">
                    Like
                  </div>
                </div>
                <div className="comment grid grid-flow-col -ml-1 md:ml-2">
                  <div>
                    <FaRegComment className="comment-icon mr-1 ml-2 text-gray-600 text-xl" />
                  </div>
                  <div className="comment-p text-gray-600 -ml-7 text-sm md:-ml-6 lg:-ml-9">
                    Comment
                  </div>
                </div>
                <div className="send grid grid-flow-col ml-2 md:ml-2 ">
                  <div>
                    <MdSend className="send-icon text-gray-600 ml-2 text-xl" />
                  </div>
                  <div className="send-p text-gray-600 text-sm -ml-7 lg:-ml-9 ">
                    Send
                  </div>
                </div>
                <div className="share grid grid-flow-col ml-12">
                  <div>
                    <PiShareFat className="share-icon text-gray-600 -ml-1 text-xl" />
                  </div>
                  <div className="share-p text-gray-600 text-sm mr-12 -ml-7 md:-mr-20 lg:-ml-9">
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-2 bg-white pt-3 md:pt-1 ml-1 lg:ml-14 md:ml-0 w-4/5 rounded-md">
            <div className="info-div  grid  grid-flow-col w-44  md:mt-5 md:pt-1 md:pl-1">
              <div className=" grid grid-flow-col pl-3 ">
                <div>
                  <img
                    src="./pic50.jpg  "
                    className="info-img rounded-full w-6 h-6 -mt-2 md:w-6 md:h-6 md:rounded-full "
                  />
                </div>
                <div className="-mt-2">
                  <p className="chirs text-sm font-semibold   md:ml-2">
                    Cristiano Ronaldo
                  </p>
                  <p className="yesterday text-xs text text-gray-400 pl-2 grid grid-flow-col">
                    Yesterday at1:25 pm.
                    <FaGlobeAmericas className="text-small mt-1 -mr-40" />{" "}
                  </p>
                  <p className="black text-xs mt-2 ml-2 mb-2">Back fo more</p>
                </div>
              </div>
              <div className="right-close w-1 grid grid-flow-col  text-2xl">
                <a href="#" className="a">
                  <BsThreeDots className="dots ml-20 md:ml-28   lg:ml-60 text-gray-600 " />
                </a>
                <a href="#" className="a">
                  <IoMdClose className="close ml-2 lg:ml-3 text-gray-600 " />
                </a>
              </div>
            </div>
            <div>
              <img src="./im16.jpeg" className="w-full h-72" />
            </div>
            <div className="father-comment grid grid-flow-row">
              <div className="text-xl comments-field grid grid-flow-col border-b border-gray-500 md:ml-1 md:mr-1 ">
                <div className="interal-comments mt-2   grid grid-flow-col lg:mr-20 lg:ml-1">
                  <BiLike className="lought ml-1  text-gray-600 " />
                  <FcLike className="likes -ml-6 md:-ml-1 lg:-ml-7" />
                  <div className="span -ml-8 text-lg lg:-ml-9 -mt-1 text-blue-600 md:-ml-1">
                    43
                  </div>
                </div>
                <div className="comments lg:-mr-16 md:ml-48 text-sm ml-32 mt-2 text-gray-600 font-semibold">
                  14 Comments
                </div>
              </div>
              <div className="comment-container md:ml-1 mt-3 mb-5 pb-2 grid grid-flow-col">
                <div className="likee grid grid-flow-col text-lg ml-1">
                  <div>
                    <BiLike className="like-icon ml-1 text-gray-600 text-xl" />
                  </div>
                  <div className="like-p text-sm -ml-7 text-gray-600 md:-ml-6 lg:-ml-9">
                    Like
                  </div>
                </div>
                <div className="comment grid grid-flow-col -ml-1 md:ml-2">
                  <div>
                    <FaRegComment className="comment-icon mr-1 ml-2 text-gray-600 text-xl" />
                  </div>
                  <div className="comment-p text-gray-600 -ml-7 text-sm md:-ml-6 lg:-ml-9">
                    Comment
                  </div>
                </div>
                <div className="send grid grid-flow-col ml-2 md:ml-2 ">
                  <div>
                    <MdSend className="send-icon text-gray-600 ml-2 text-xl" />
                  </div>
                  <div className="send-p text-gray-600 text-sm -ml-7 lg:-ml-9 ">
                    Send
                  </div>
                </div>
                <div className="share grid grid-flow-col ml-12">
                  <div>
                    <PiShareFat className="share-icon text-gray-600 -ml-1 text-xl" />
                  </div>
                  <div className="share-p text-gray-600 text-sm mr-12 -ml-7 md:-mr-20 lg:-ml-9">
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-scroll  hover:pt-12 hover:-mt-1   w-full scrollbar-w-2   hover:overflow-scroll scrollbar-invisible hover:scrollbar-thin hover:h-full hover:pb-10 z-0 hover:scrollbar-thumb-gray-500 hover:scrollbar-thumb-1 hover:scrollbar-track-gray-200   lg:h-full md:h-96 fixed right-1  mt-12 lg:grid lg:grid-flow-row lg:-ml-16 hover:pr-2 pr-6 hover:ml-4 lg:w-auto  md:grid md:grid-flow-row md:ml-5 md:w-44   ">
        <div className="right-c lg:grid -mt-10 border-b border-gray-400 border-b-2 md:pb-1 md:mr-1  ">
          <p className="sponsored text-gray-600 md:-mt-3 md:mb-3 md:font-semibold lg:-mb-1 ">Sponsored</p>
          <div className="right-side-image1  md:grid md:grid-flow-col-dense md:mb-1 lg:mt-4">
            <div>
              <img src="./im17.jpeg" width={77} height={77} className="side-img md:w-20 md:h-20 md:rounded-md"/>
            </div>
            <div className = "md:-ml-5 md:mt-3 ">
              <p className="side-p1 md:text-xs md:font-semibold ml-6">Perfect Your Photography<br/>On Autopilot</p>
              <p className="side-p2 md:text-xs md:text-gray-500 ml-6">topazlabs.com</p>
            </div>
          </div>
          <div className="right-side-image1  md:mb-1 md:grid md:grid-flow-col-dense md:mt-2">
            <div>
              <img src="/im24.webp" width={77} height={77} className="side-img md:w-20 md:h-20 md:rounded-md "/>
            </div>
            <div className="md:-ml-5 md:mt-2   ">
              <p className="side-p3 md:text-xs md:font-semibold ml-6">Smart Portable Pumb for<br/>Car Bike Motorcycle Ball<br/>Lifebuoy Air Inflator...</p>
              <p className="side-p2 md:text-xs md:text-gray-500 ml-6">fruimundo.com</p>
            </div>
          </div>
          
        </div>
        <div className="birth-c md:mt-2 border-b border-gray-400 border-b-2 md:mr-1 md:pb-1 lg:pb-3 ">
          <p className="b-title md:text-sm text-gray-500 md:mb-3 lg:mb-4">Birthdays</p>
          <div className="birthday-container md:grid md:grid-flow-col">
            <div>< BsGift className="birth-icon md:text-2xl text-blue-600 md:mr-2"/></div>
            <div className="birth-p md:text-xs md:-ml-16 lg:-ml-4">Hermi Queen and 12 others have<br/> birthdays today.</div>
          </div>
        </div>
        <div className="contact md:grid md:grid-flow-col md:mt-2 lg:mt-3">
          <div className="contact-c md:text-sm text-gray-500">Contacts</div>
          <div className="md:grid md:grid-flow-col md:-mr-28 lg:-mr-36 lg:ml-9">
            <a href="#" className="contact-s md:text-sm  md:mt-1 md:-mr-10 md:ml-16 lg:mr-24  "><BsSearch/></a>
            <a href="#" className="closee   md:-ml-12 lg:-ml-44"><BsThreeDots/></a>
          </div>
        </div>
        <div className="contact-cc md:mt-4 md:grid md:grid-flow-col md:ml-2 lg:mt-5">
        <img src="./pic9.jpg" width={35} height={35} className="c-img rounded-full md:-mt-1  md:-mr-2  h-8 w-8 relative"/>
        <p className="c-p text-sm md:-ml-20 font-medium lg:-ml-8 lg:relative ">Kidu Arsenal Ethiopia</p>
        <button className="button bg-green-500 rounded-full border-white border-2 h-4 w-4 absolute  md:ml-5 md:mb-8  lg:ml-5 lg:mt-3 lg:mr-1  "></button>
        </div>
        <div className="contact-cc md:mt-4 md:grid md:grid-flow-col md:ml-2 lg:mt-5">
        <img src="./im7.jpeg" width={35} height={35} className="c-img rounded-full md:-mt-1  md:-mr-2  h-8 w-8 relative"/>
        <p className="c-p text-sm md:-ml-20 font-medium lg:-ml-8 lg:relative ">Bruktawit Solomon</p>
        <button className="button bg-green-500 rounded-full border-white border-2 h-4 w-4 absolute  md:ml-5 md:mb-8  lg:ml-5 lg:mt-3 "></button>
        </div>
        <div className="contact-cc md:mt-4 md:grid md:grid-flow-col md:ml-2 lg:mt-5">
        <img src="./im6.jpeg" width={35} height={35} className="c-img rounded-full md:-mt-1  md:-mr-2  h-8 w-8 relative"/>
        <p className="c-p text-sm md:-ml-20 font-medium lg:-ml-16 lg:relative ">Yared Solomon</p>
        <button className="button bg-green-500 rounded-full border-white border-2 h-4 w-4 absolute   md:ml-5 md:mb-8  lg:ml-5 lg:mt-3  "></button>
        </div>
        <div className="contact-cc md:mt-4 md:grid md:grid-flow-col md:ml-2 lg:mt-5">
        <img src="./im4.jpg" width={35} height={35} className="c-img rounded-full md:-mt-1  md:-mr-2  h-8 w-8 relative"/>
        <p className="c-p text-sm md:-ml-20 font-medium lg:-ml-12 lg:relative ">Natnael Solomon</p>
        <button className="button bg-green-500 rounded-full border-white border-2 h-4 w-4 absolute   md:ml-5 md:mb-8  lg:ml-5 lg:mt-3  "></button>
        </div>
        <div className="contact-cc md:mt-4 md:grid md:grid-flow-col md:ml-2 lg:mt-5">
        <img src="./im3.jpg" width={35} height={35} className="c-img rounded-full md:-mt-1  md:-mr-2  h-8 w-8 relative"/>
        <p className="c-p text-sm md:-ml-20 font-medium lg:-ml-8 lg:relative ">Kalkidan Solomon</p>
        <button className="button bg-green-500 rounded-full border-white border-2 h-4 w-4 absolute   md:ml-5 md:mb-8  lg:ml-5 lg:mt-4 "></button>
        </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
