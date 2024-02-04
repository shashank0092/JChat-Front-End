const RemainingFeatures = () => {
    return (
        <>
            <div className="bg-slate-300 mt-10 ml-5 mr-5 rounded-3xl mb-10 py-14 flex flex-row justify-around xsm:flex-col xsm:gap-5" >
                <div className="flex flex-col gap-5" >
                    <div className="" >
                        <p className="font-bold text-4xl xsm:text-2xl xsm:text-center" >You Are Ready To Go For</p>
                    </div>
                    <div className="ml-2 flex flex-col gap-5  xsm:items-center " >
                        <div>
                            <p className="font-semibold text-2xl xsm:text-xl xsm:font-medium" > 100 Voice Calls </p>
                        </div>
                        <div>
                            <p className="font-semibold text-2xl xsm:text-xl xsm:font-medium"> 100 Video Calls</p>
                        </div>
                        <div>
                            <p className="font-semibold text-2xl xsm:text-xl xsm:font-medium">30 Days of Messging</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 " >
                    <div>
                        <p className="font-bold text-4xl xsm:text-xl xsm:text-center">Your Current Plan Type:</p>
                    </div>
                    <div className=" flex flex-col gap-5 xsm:items-center" >
                        <div>
                            <p className="text-3xl xsm:text-xl xsm:text-center" >Free</p>
                        </div>
                        <div>
                            <button className="bg-red-500 p-5 px-28 rounded-full text-white font-bold "  >See Pricing</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RemainingFeatures