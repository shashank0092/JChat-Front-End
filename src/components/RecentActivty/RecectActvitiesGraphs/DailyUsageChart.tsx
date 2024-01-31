import { CategoryScale, Chart, Colors } from "chart.js/auto"
import { Bar } from "react-chartjs-2"
import autocolors from 'chartjs-plugin-autocolors';


Chart.register(CategoryScale)
Chart.register(autocolors)
Chart.register(Colors)
const DailyUsageChart = () => {


    const data = {
        labels: ["30", "29", "28", "27", "26"],

        datasets: [
            {
                label: "",
                backgroundColor: '#78DD48',
                borderColor: '#fffff',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',

                data: ["3", "4", "2", "6", "3"],



            },
        ]
    }

    return (
        <div className="flex items-center justify-center " >
            <div className="w-[30vw]">
                <>
                    <Bar className="w-[30vw] " data={data} options={{


                        scales: {
                            x: {
                                beginAtZero: true,
                            },
                            y: {
                                beginAtZero: true,
                                max: 24,
                            }
                        },


                        plugins: {

                            legend: {
                                display: false,
                            },
                            

                        }
                        ,
                        layout: {
                            padding: {
                                bottom: 50,
                                left: 10,
                                right: 10
                            }

                        }
                    }} />
                </>
            </div>
        </div>
    )
}

export default DailyUsageChart