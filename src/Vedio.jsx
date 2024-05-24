import { FaSearch } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

function Vedio(){
return(
    <>
    <div className="bg-green-300">
        <div className="bg-green-300 mt-40">
            <div></div>
            <div className="bg-green-300 grid grid-flow-col col-span-2">
               <div>
                <h1 className="text-black">Video</h1>
               </div>
               <div className="grid grid-flow-col w-16 ml-64 -mr-4 text-xl">
                  <IoMdPerson/>
                  <FaSearch/>

               </div>
            </div>
        </div>
    </div>
    </>
)
}
export default Vedio