import BEHANCE from "../../../assets/behance.png"
import PFIZER from "../../../assets/pfizer.png"
import RIPPLE from "../../../assets/ripple.png"
import SHAPE from "../../../assets/shape.png"
const CustomerCompnies = () => {
    return (
        <>
            <div className="flex flex-col gap-20 xsm:gap-5" >
                <div>
                    <p className="text-center text-5xl xsm:text-lg" >Trusted by some big brands</p>
                </div>
                <div className="flex  items-center  ml-64 mr-20 xsm:ml-10 xsm:mr-5 xsm:gap-5 " >
                    <div className="xsm:flex xsm:flex-col xsm:justify-center xsm:items-center" >
                        <div className="w-1/3 xsm:w-2/3" >
                            <img src={BEHANCE} alt="" className="w-5/6" />
                        </div>
                        <div>
                            <p className="font-medium text-xl " >BEHANVE</p>
                        </div>
                    </div>
                    <div className="xsm:flex xsm:flex-col xsm:justify-center xsm:items-center" >
                        <div className="w-1/3 xsm:w-3/4">
                            <img src={PFIZER} alt="" className="w-5/6" />
                        </div>
                        <div>
                            <p className="font-medium text-xl"> PFIZER</p>
                        </div>
                    </div>
                    <div className="xsm:flex xsm:flex-col xsm:justify-center xsm:items-center" >
                        <div className="w-1/3 xsm:w-3/4" >
                            <img src={RIPPLE} alt="" className="w-5/6" />
                        </div>
                        <div>
                            <p className="font-medium text-xl"> RIPPLE</p>
                        </div>
                    </div>
                    <div className="xsm:flex xsm:flex-col xsm:justify-center xsm:items-center" >
                        <div className="w-1/3 xsm:w-3/4" >
                            <img src={SHAPE} alt="" className="w-5/6" />
                        </div>
                        <div>
                            <p className="font-medium text-xl"> SHAPE</p>
                        </div>
                    </div>
                </div>
                <div className="flex ml-5 mr-5 bg-black p-5 rounded-xl xsm:flex-col xsm:gap-5  " >

                    <div>
                        <p className="font-bold text-xl text-white"  >Need Enterprise scale and solutions</p>
                    </div>
                    <div>
                        <p className="text-xl text-white" >Talk to our sales team about your requierments,learn about custome pricing,or request a demo.</p>
                    </div>
                    <div>
                        <button className="text-xl bg-white rounded-xl xsm:p-3 " > Contact Sales </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerCompnies