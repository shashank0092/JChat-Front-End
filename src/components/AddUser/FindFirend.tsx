import { FaSearch } from "react-icons/fa";
const FindFriend = () => {
    return (
        <>
            <div className="flex items-center" >
               <div className="bg-white  rounded-full  flex" >
                    <input type="text" placeholder="Enter Gmail Here" className="py-4 rounded-full outline-none w-96 px-2  xsm:w-60" />
                    <button className="px-5" ><FaSearch/></button>
               </div>
              
                
            </div>
        </>
    )
}

export default FindFriend