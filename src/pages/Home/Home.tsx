import LoginForm from "../../components/Forms/Login"
import HOMEIMAGE from "../../assets/HomePageImage.png"
import LoginGoogle from "../../components/GoogleLogin/LoginGoogle"

const Home = () => {
    return (
        <>

            <div className="bg-custome-paper w-[100vw] h-[100vh] flex justify-center items-center gap-20" >
                <div className="flex flex-col gap-10 justify-center items-center " >
                    <div className="flex flex-col gap-5" >
                        <div>
                            <p className="font-some-type-mono text-7xl" >Welcome to JChat</p>
                        </div>
                        <div>
                            <p className="font-some-type-mono text-4xl" >Chat,Comunicate and Share</p>
                        </div>
                    </div>
                    <div>
                        <LoginForm />
                    </div>
                    <div className="bg-black h-1 w-[550px]" ></div>
                    <div>
                        <LoginGoogle/>     
                    </div>
                </div>
                <div className="bg-black h-[550px] w-1" ></div>
                <div >
                    <div className=" w-96" >
                        <img src={HOMEIMAGE} alt="" className="w-full" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home