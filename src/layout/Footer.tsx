import LOGO2 from "../assets/Logo2.png"
import { FaBell } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <div className="xsm:pl-2 xsm:pr-2 xsm:rounded-xl" >
                <div className="bg-black flex items-center gap-10 py-5 xsm:gap-0 xsm:rounded-xl   " >
                    <div className="w-2/5  flex items-center justify-center  " >
                        <img src={LOGO2} className="w-1/3 xsm:hidden " />
                    </div>


                    <div className="flex gap-5  " >
                        <div className="flex flex-col gap-5" >
                            <div>
                                <p className="text-gray-400 xsm:text-xs" >ABOUT JCHAT</p>
                            </div>
                            <div className="flex flex-col gap-3" >
                                <div>
                                    <p className="text-white text-sm" >Home</p>
                                </div>
                                <div>
                                    <p className="text-white text-sm" >Get In Touch</p>
                                </div>
                                <div>
                                    <p className="text-white text-sm" >FAQs</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5" >
                            <div>
                                <p className="text-gray-400 xsm:text-xs" >PRODUCT</p>
                            </div>
                            <div className="flex flex-col gap-3" >
                                <div>
                                    <p className="text-white text-sm" >Testimonals</p>
                                </div>
                                <div>
                                    <p className="text-white text-sm" >How it works</p>
                                </div>
                                <div>
                                    <p className="text-white text-sm" >Members Discounts</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 " >
                            <div>
                                <p className="text-gray-400 xsm:text-xs" >NOT QUITE READY FOR JCHAT?</p>
                            </div>
                            <div className="flex flex-col gap-3" >
                                <div>
                                    <p className="text-white text-sm" >Join our online community for free.No spam,Ever</p>
                                </div>
                                <div className="flex gap-5 items-center xsm:flex-col " >
                                    <div className="py-3 rounded-full bg-white flex xsm:px-0 xsm:py-1 xsm:items-center" >
                                        <div>
                                            <input type="text" placeholder="Enter Email" className=" rounded-full outline-none p-2 xsm:px-0 xsm:py-1 xsm:w-40" />
                                        </div>
                                        <div className=" rounded-full p-2 hidden xsm:block xsm:px-0 xsm:py-0" >
                                            <FaBell className="text-xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <button className=" bg-blue-400 py-3 px-5 rounded-sm text-black font-bold hover:cursor-pointer xsm:hidden" >Subscribe</button>
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

export default Footer