import DailyUsageChart from "../../../components/RecentActivty/RecectActvitiesGraphs/DailyUsageChart"
import TimeLineChart from "../../../components/RecentActivty/RecectActvitiesGraphs/TimelineChart"
import UsageTypeChart from "../../../components/RecentActivty/RecectActvitiesGraphs/UsageTypeChart"

const ChartsOfActivities = () => {
    return (
        <>

            <div className="bg-blue-950 mt-10 ml-5 mr-5 rounded-3xl py-14 flex flex-col gap-5 mb-10" >
                <div className="ml-5" >
                    <p className="text-white font-bold text-5xl xsm:text-4xl" >Your Activities</p>
                </div>
                <div className="flex justify-around xsm:flex-col" >
                    <div className="bg-white rounded-xl m-5 " >
                        <div className="flex flex-col gap-10" >
                            <div className="ml-2 mt-2" >
                                <p className="text-black text-3xl xsm:text-xl">Daily Usage</p>
                            </div>
                            <div  >
                                <DailyUsageChart />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white rounded-xl m-5 flex flex-col gap-10 " >
                            <div className="ml-2 mt-2">
                                <p className="text-black text-3xl xsm:text-xl">Today's Timeline</p>
                            </div>
                            <div>
                                <TimeLineChart />
                            </div>
                        </div>
                    </div>
                   
                </div>

                <div>
                <div className="flex justify-around xsm:flex-col">
                        <div className="bg-white rounded-xl m-5 flex flex-col gap-10 ">
                            <div className="ml-2 mt-2">
                                <p className="text-black text-3xl xsm:text-xl">Type of Usage</p>
                            </div>
                            <div className="flex " >
                                <UsageTypeChart />
                            </div>
                        </div>
                        <div className="bg-white rounded-xl m-5 flex flex-col gap-10 " >
                            <div className="ml-2 mt-2">
                                <p className="text-black text-3xl xsm:text-xl">Today's Data Usage</p>
                            </div>
                            <div>
                                <TimeLineChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ChartsOfActivities