import { useParams } from "react-router-dom";
import Email from "./components/Email"
import { RiLockPasswordFill } from "react-icons/ri";
import Password from "./components/Password";

const ForgetPassword = () => {
    const {resetToken}=useParams()

    console.log(resetToken,"this is resetToken")
    console.log(typeof(resetToken))
    return (
        <>

            <div className="bg-custome-paper h-[100vh] flex flex-col gap-20 py-10 bg-cover bg-center "  >
                <div className="flex flex-col gap-10" >
                    <div className="ml-10" >
                        <p className="font-some-type-mono text-6xl  flex items-center gap-5" >Reset Password <RiLockPasswordFill color="black" size={40} /> </p>
                    </div>
                    <div className="bg-black  h-1 ml-10 mr-10" ></div>
                </div>

                <div className=" flex flex-col justify-center items-center" >
                    <div  >
                       {
                        resetToken?(
                            <Password resetToken={resetToken} />
                        ):
                        (
                            <Email/>
                        )
                       }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword