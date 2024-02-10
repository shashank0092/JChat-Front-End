
import Chart from "react-apexcharts"
const DailyUsageChart=()=>{
    const options={
        chart:{
            id:"Daily-Usage-Chart",
        },
        xaxis:{
            categories:['Jan','Fab','March','April','May','June','July','August','September','October','November','December']
        },
        grid:{
            show:false
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
            markers: {
              width: 12,
              height: 12,
              radius: 2
            }
          },
        markers: {
            size: 6,
            colors: ['#FF4949'],
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
              size: 8
            }
        },
        
    }

    const series=[{
        name:'Usage In Hrs',
        data:[2,4,5,3,2,3,5,4,6,3,7,6]
    }]
    return(
        <>
            <div>
                <Chart
                    options={options}
                    series={series}
                    type="line"
                    height="400"
                    width="600"

                />
            </div>
        </>
    )
}

export default DailyUsageChart