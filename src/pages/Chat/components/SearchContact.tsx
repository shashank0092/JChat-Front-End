import { FaSearch } from "react-icons/fa";
const SearchContact = () => {
    return (
        <>
            <div className="flex flex-col gap-5" >
                <div className="w-[35vw] flex items-center gap-5 " >
                    <div className=" ">
                        <input type="text" className="bg-chat-child-container ml-5 w-[30vw] py-3 rounded-xl font-some-type-mono text-center" placeholder="Search Or Start new chat" />
                    </div>
                    <div>
                        <FaSearch color="white" />
                    </div>

                </div>
                <div className="bg-custome-paper  h-1 ml-5 mr-10" ></div>
            </div>
        </>
    )
}

export default SearchContact