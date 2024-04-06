import { IoMdDoneAll } from "react-icons/io";
const Contacts = () => {
    return (
        <>
            <div>
                <div className="flex justify-between  py-4 ml-5 mr-5 bg-chat-child-container items-center" >
                    <div className="flex " >
                        <div className="">
                            <div className="flex justify-center" >
                                <img src="https://lh3.googleusercontent.com/a/ACg8ocIeLMQsUtbkaibpEqjroWbELP2mTaJ32VV-8mYzUjn7SRo=s96-c" alt="" className="rounded-full w-1/2 " />
                            </div>
                        </div>
                        <div className="" >
                            <div>
                                <p className="text-white text-lg font-some-type-mono" >User Name</p>
                            </div>
                            <div className="flex items-center" >
                                <div>
                                    <IoMdDoneAll color="blue" />
                                </div>
                                <div>
                                    <p className="text-chat-text font-thin text-sm font-some-type-mono " >You:Some Last Text</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="pr-5" >
                        <div>
                            <p className="text-chat-text text-sm font-some-type-mono" >04/12/2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts