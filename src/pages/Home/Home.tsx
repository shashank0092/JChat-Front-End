import Footer from "../../layout/Footer"
import ContactUs from "./components/ContactUs"
import HomeCard from "./components/HomeCard"
import HomeHeader from "./components/HomeHeader"
import Questions from "./components/Questions"
import Started from "./components/StartedCard"
// import TestimonailCard from "./components/TestimonailCard"


const Home=()=>{
    return(
        <>
            <div className="border border-black xsm:w-[100vw]" >
            <HomeHeader/>
            <HomeCard/>
            <Started/>
            <ContactUs/>
            <Questions/>
            {/* <TestimonailCard/> */}
            <Footer/>
            </div>
        </>
    )
}

export default Home