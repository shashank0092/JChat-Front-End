
const ChatCard=()=>{
    return(
        <>
            <div className="flex bg-gray-400 gap-3 items-center rounded-xl py-2 hover:bg-gray-300 hover:cursor-pointer " >
                <div className="w-10  ml-2" >
                    <img src={`https://lh3.googleusercontent.com/a/ACg8ocIeLMQsUtbkaibpEqjroWbELP2mTaJ32VV-8mYzUjn7SRo=s96-c`}  className="rounded-full " alt="" />
                </div>
                <div>
                    <div> <p className="text-white text-base">SHASHANK SHUKLA</p> </div>
                    <div> <p className="text-white text-sm">Hello Sir</p> </div>
                </div>
                <div className="mr-2" >
                    <p className="text-white text-xs">Yesterday</p>
                </div>
                
            </div>
        </>
    )
}

export default ChatCard