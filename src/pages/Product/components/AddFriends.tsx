import FindFriend from "../../../components/AddUser/FindFirend"

const AddFriends = () => {
    return (
        <>
            <div className="bg-red-500 mt-10 ml-5 mr-5 rounded-3xl mb-10 py-14 flex flex-col gap-5" >
                <div className="pl-5 flex flex-col gap-5">
                    <div  >
                        <p className="text-white font-bold text-5xl" >Want to Add any New friend on JChat!!</p>
                    </div>
                    <div>
                        <FindFriend />
                    </div>
                </div>
                <div className="pl-5 flex flex-col gap-3">
                    <div>
                        <p className="text-4xl">Ohh you not find your friend on JChat</p>
                    </div>
                    <div className="flex" >
                        <div  >
                            <p className="text-xl" > No issue  </p>
                        </div>
                        <div>
                            <p className="text-xl text-blue-300 underline"> &nbsp; <a href="/"> Click Here </a> &nbsp; </p>
                        </div>
                        <div>
                            <p className="text-xl"> and invite them on JChat </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddFriends
