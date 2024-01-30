import { MdOutlinePhoneMissed } from "react-icons/md";
const CallCard=()=>{
    return(
        <>
            <div className="flex bg-stone-400 gap-3 items-center rounded-xl py-2 hover:bg-stone-300 hover:cursor-pointer" >
                <div className="w-10  ml-2" >
                    <img src={`https://lh3.googleusercontent.com/a/ACg8ocIeLMQsUtbkaibpEqjroWbELP2mTaJ32VV-8mYzUjn7SRo=s96-c`}  className="rounded-full " alt="" />
                </div>
                <div>
                    <div> <p className="text-white text-base">SHASHANK SHUKLA</p> </div>
                    <div> <p className="text-white text-sm flex gap-2 items-center"> <MdOutlinePhoneMissed color="red" /> Missed </p> </div>
                </div>
                <div className="ml-8" >
                    <p className="text-white text-xs">Yesterday</p>
                </div>
                
            </div>
        </>
    )
}

export default CallCard