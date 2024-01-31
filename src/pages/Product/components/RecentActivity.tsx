import CallCard from "../../../components/RecentActivty/RecentComunication/CallCard";
import ChatCard from "../../../components/RecentActivty/RecentComunication/ChatCard";
import MeetingCard from "../../../components/RecentActivty/RecentComunication/MeetingCard";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";

const RecentActivity = () => {
    return (
        <>
            <div className="bg-black flex ml-5 mr-5 mt-20 justify-around rounded-3xl py-10 mb-10" >
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5" >
                        <div >
                            <p className="text-white text-4xl font-semibold underline underline-offset-8 flex items-center gap-2" >Recnt Chat  </p>
                        </div>
                        <div>
                            <button className="border border-white px-5 py-2 bg-pink-300 rounded-xl" >
                                <p><IoChatboxEllipses className="text-white text-4xl" /></p>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5" >
                        <ChatCard />
                        <ChatCard />
                        <ChatCard />
                        <ChatCard />
                    </div>
                </div>
                <div className="border  border-white mt-20 mb-10" ></div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5" >
                        <div>
                            <p className="text-white text-4xl font-semibold underline underline-offset-8 flex items-center gap-2" >Recent Calls  </p>
                        </div>

                        <div>
                            <button className="border border-white px-5 py-2 bg-green-300 rounded-xl"><IoCallSharp className="text-white text-4xl" /></button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <CallCard />
                        <CallCard />
                        <CallCard />
                        <CallCard />
                    </div>
                </div>
                <div className="border  border-white mt-20 mb-10" ></div>
                <div className="flex flex-col gap-5" >
                    <div className="flex items-center gap-5">
                        <div>
                            <p className="text-white text-4xl font-semibold underline underline-offset-8 flex items-center gap-2" >Recent Meetings  </p>
                        </div>
                        <div>
                            <button className="border border-white px-5 py-2 bg-blue-300 rounded-xl"><FaVideo className="text-white text-4xl" /></button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <MeetingCard />
                        <MeetingCard />
                        <MeetingCard />
                        <MeetingCard />
                    </div>
                </div>

            </div>
        </>
    )
}

export default RecentActivity;  