import HomeGIF from "../../../assets/HomeBanner.gif"
const HomeHeader = () => {
    return (
        <>
            <div className="h-[100vh] w-[98vw] flex justify-center items-center xsm:flex-col   " >
                <div  >
                    <div>
                        <p className="text-7xl font-bold xsm:text-4xl xsm:text-center" >Welcome To JChat</p>
                    </div>
                    <div>
                        <p className="text-3xl leading-relaxed  xsm:text-lg" >Fast,Easy & Secure Way For your chat</p>
                    </div>
                </div>
                <div>
                    <div className="h-1/2  " >
                        <img src={HomeGIF} alt="" className="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeader