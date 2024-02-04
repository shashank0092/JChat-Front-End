import PAYMENT from "../../../assets/Payment Information.gif"
import { FaArrowDown } from "react-icons/fa6";
const PricingLanding = () => {
    return (
        <>
            <div className="flex justify-evenly items-center  ml-5 mr-5 " >
                <div className="w-[800px] flex flex-col gap-5">
                    <div className="" >
                        <p className="text-5xl font-bold leading-tight xsm:text-base" >
                            Want to Improve Your Way of communication and intrect in a very powerfull way!!
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-stone-700 text-2xl xsm:text-sm" >We Have something for you</p>
                    </div>
                    <div className="bg-green-500 w-52 p-5 rounded-lg xsm:p-3 xsm:w-48" >
                        <p className="flex items-center gap-2 text-white " >Cheackout Here <FaArrowDown/> </p>
                    </div>
                </div>

                <div className="">
                    <img src={PAYMENT}  alt="" />
                </div>
            </div>
        </>
    )
}

export default PricingLanding