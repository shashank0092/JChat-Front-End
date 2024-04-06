import RegisterForm from "../../components/Forms/RegisterForm"
import { CgProfile } from "react-icons/cg";

const Register = () => {
    return (
        <>
            <div className="bg-custome-paper h-[100vh] flex flex-col gap-20 py-10 bg-cover bg-center "  >
                <div className="flex flex-col gap-10" >
                    <div className="ml-10" >
                        <p className="font-some-type-mono text-6xl  flex items-center gap-5" >Set Profile <CgProfile color="black" size={40} /> </p>
                    </div>
                    <div className="bg-black  h-1 ml-10 mr-10" ></div>
                </div>

                <div className=" flex flex-col justify-center items-center" >
                    <div  >
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register