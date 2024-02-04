import React from "react"
import { FaCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";

interface Props {
    plan: {
        plan_type: string,
        plan_price: string,
        plan_slogan: string,
        plan_features: Array<string>,
        start_plan: string
    }
}
const PricingBox: React.FC<Props> = ({ plan }) => {
    return (
        <>
            <div className="flex flex-col gap-10 w-72 xsm:w-[100vw] " >
                <div className="flex flex-col gap-3" >
                    <div>
                        <p className="text-white font-bold text-5xl" >{plan.plan_type}</p>
                    </div>
                    <div>
                        <p className="text-white font-bold text-3xl"> {plan.plan_price} </p>
                    </div>
                    <div className="w-[200px]" >
                        <p className="text-stone-300 text-sm ">{plan.plan_slogan}</p>
                    </div>
                </div>

                <div>
                    {
                        plan.plan_features.map((feature) => {
                            return (


                                <div className="flex items-center gap-1   " >
                                    <div>
                                        <IoMdCheckmarkCircle color="white" size={10} />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold leading-loose xsm:text-sm xsm:w-64 ">{feature}</p>
                                    </div>
                                </div>


                            )
                        })
                    }
                </div>

                <div className=" ">
                    <button className="bg-white py-5 pl-5 w-40 text-black flex items-center gap-2 font-bold rounded-xl" > {plan.start_plan} <FaArrowRight/>   </button>
                </div>
            </div>
        </>
    )
}

export default PricingBox