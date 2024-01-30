import Easy from "../../../assets/Easy&Free.jpeg"
import Secure from "../../../assets/Secure.jpeg"
import CrossPlatform from "../../../assets/CrossPlatform.jpeg"

const HomeCard = () => {
    return (
        <>
            <div className="bg-black ml-10 mr-10 flex flex-col gap-5 rounded-xl mb-10 py-14 xsm:ml-2 xsm:mr-2 xsm:py-5" >
                <div className="py-10" >
                    <p className="text-white text-center font-bold text-5xl xsm:text-2xl" >Featrues We Are Provding</p>
                </div>
                <div className="flex xsm:flex-col xsm:gap-5" >
                    <div className=" " >
                        <div className="flex flex-col items-center gap-5" >
                            <div className="w-1/2 xsm:w-5/6">
                                <img src={Easy} alt="" className="rounded-xl" />
                            </div>
                            <div>
                                <div>
                                    <p className="text-white text-center text-3xl font-medium xsm:text-base xsm:text-center">Easy And Free</p>
                                </div>
                                <div>
                                    {/* <p className="text-white text-center">
                                        We will provide you easy and fast way for chat with your friend in a very easy manner
                                    </p> */}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                    <div className="flex flex-col items-center gap-5 ">
                            <div className="w-1/2 items-center xsm:w-5/6" >
                                <img src={Secure} alt="" className="rounded-xl "  />
                            </div>
                            <div>
                                <div>
                                    <p className="text-white text-center text-3xl font-medium xsm:text-base">Secure</p>
                                </div>
                                <div>
                                    {/* <p className="text-white text-center ">
                                        We will provide you very secure way to chat with your loved one belive on our policy.
                                    </p> */}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                    <div className="flex flex-col items-center gap-5">
                            <div className="w-1/2 xsm:w-5/6" >
                                <img src={CrossPlatform} alt="" className="rounded-xl " />
                            </div>
                            <div>
                                <div>
                                    <p className="text-white text-center text-3xl font-medium xsm:text-base xsm:text-center" >Cross Platform</p>
                                </div>
                                <div>
                                    {/* <p className="text-white text-center">
                                        We will provide you to chat and connect with your family and frineds on any device anywhere
                                    </p> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCard