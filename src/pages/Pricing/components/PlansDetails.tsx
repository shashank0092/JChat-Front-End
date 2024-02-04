import PricingBox from "../../../components/Pricing/PricingBox"
import PRICINGDATA from "../../../utills/PricingData.json"

const PlansDetails = () => {
    return (
        <>
            <div className="flex ml-5 mr-5    border-black border-2 rounded-3xl py-10 px-10 p-5 gap-5 xsm:px-5 xsm:ml-5  xsm:mr-0 xsm:flex-col  xsm:w-[100vw] xsm: " >
                {
                    PRICINGDATA.map((plan) => {
                        return (
                            <>

                                <div className="bg-black p-20 rounded-xl border border-white xsm:p-5 " >
                                    <div className="flex flex-col  " >
                                        <div>
                                            {
                                                plan.popular ?
                                                    (
                                                        <div className="bg-purple-400 text-center w-40 p-5 rounded-full absolute top-[103vh] left-[97vh] xsm:hidden" >
                                                            <p className="font-bold" > Most Popular </p>
                                                        </div>

                                                    ) :

                                                    ( <div></div> )
                                            }
                                        </div>
                                        <div>
                                            <PricingBox plan={plan} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PlansDetails