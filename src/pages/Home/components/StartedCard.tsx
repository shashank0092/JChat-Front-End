import LOGO from "../../../assets/Logo.png"
import LoginGoogle from "../../../components/GoogleLogin/LoginGoogle";

const Started=()=>{
    return(
        <>  
            <div className="bg-blue-950 flex items-center justify-evenly ml-10 mr-10 rounded-xl py-5 mb-10 xsm:flex-col xsm:gap-5 xsm:py-10 xsm:ml-2 xsm:mr-2" >
                <div className=" w-1/2 xsm:w-2/3  xsm:flex xsm:justify-center"  >
                    <img src={LOGO} alt="" className=" w-2/5 xsm:w-2/3" />
                </div>
                <div>
                    <LoginGoogle/>
                </div>
            </div>
        </>
    )
}

export default Started;