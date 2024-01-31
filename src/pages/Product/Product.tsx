import Footer from "../../layout/Footer"
import Navbar from "../../layout/Navbar"
import AddFriends from "./components/AddFriends"
import ChartsOfActivities from "./components/ChartsOfActivities"
import RecentActivity from "./components/RecentActivity"
import RemainingFeatures from "./components/RemainingFeatures"
import Welcome from "./components/Welcome"


const Product=()=>{
    return(
        <>
            <Navbar/>
            <Welcome/>
            <RecentActivity/>
            <ChartsOfActivities/>
            <AddFriends/>  
            <RemainingFeatures/>          
            <Footer/>
        </>
    )
}

export default Product