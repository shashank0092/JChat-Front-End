import VIDEO from "../../../assets/Videocall.png"
const Welcome = () => {
    return (
        <>
            <div className="flex bg-purple-950 items-center justify-between mt-10 ml-5 mr-5 rounded-3xl py-14 xsm:ml-2 xsm:mr-2 xsm:flex xsm:py-10  xsm:flex-col-reverse" >
                <div className="ml-5 xsm:ml-0 " >
                    <div>
                        <p className="text-white font-bold text-5xl tracking-wide xsm:text-xl xsm:text-center" >
                            Welcome,Shahsnak Shukla
                        </p>
                    </div>
                    <div>
                        <p className="text-white py-5 text-xl leading-relaxed xsm:text-lg xsm:text-center " >
                            So,what bring you back on our application.What you are finding wanna chat some friends,have some long voice call or want to schdule some office mettings all in one platform any time any where.
                        </p>
                    </div>
                </div>

                <div className="ml-28" >
                   
                    <div className="">
                        <img src={VIDEO} className="w-1/2 xsm:w-2/3" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome;