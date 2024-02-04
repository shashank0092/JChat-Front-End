import Footer from "../../layout/Footer"
import Navbar from "../../layout/Navbar"
import CustomerCompnies from "./components/CustomerCompnies"
import PlansDetails from "./components/PlansDetails"
import PricingLanding from "./components/PricingLanding"

const Pricing = () => {
    return (
        <>
            <div>
                <div className="mb-5" >
                <Navbar />
                </div>
                <div className="mb-16" >
                    <PricingLanding />
                </div>
                <div className="mb-16  ">
                    <PlansDetails />
                </div>
                <div className="mb-16">
                    <CustomerCompnies />
                </div>
                <div className="">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Pricing