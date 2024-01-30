import { BiSolidConfused } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
const ContactUs = () => {
    return (
        <> 
            <div className="bg-red-300 ml-10 mr-10 py-10 mb-10 rounded-xl flex p-5 xsm:flex-col xsm:ml-2 xsm:mr-2 xsm:gap-2" >
                <div>
                    <div>
                        <p className="text-white font-bold text-5xl flex leading-loose items-center xsm:leading-tight xsm:text-3xl " >Still Confused! <BiSolidConfused/> </p>
                    </div>
                    <div className="w-1/2 xsm:w-full" >
                        <p className="text-white text-xl font-thin leading-loose xsm:leading-normal" >Want to get some enterprise level solutions,out of the box service,want service for your team</p>

                    </div>
                </div>

                <div>
                    <div>
                        <p className="text-white font-bold text-5xl flex leading-loose items-center xsm:leading-tight xsm:text-3xl" >Contact Us <IoMdContact/> </p>
                    </div>
                    <div>
                        <div>
                            <p className="text-white text-xl flex items-center gap-1 leading-loose font-thin xsm:leading-normal xsm:text-lg" ><IoMail/>  shashank0865@gmail.com</p>
                        </div>
                        <div>
                            <p className="text-white text-xl flex items-center gap-1 leading-loose font-thin xsm:leading-normal xsm:text-lg" ><IoCall/> +91 7016204503</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactUs;