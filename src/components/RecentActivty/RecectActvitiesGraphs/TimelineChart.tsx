import { CategoryScale, Chart } from "chart.js/auto"
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale)

const TimeLineChart = () => {

  const data = {
    type:"line",
    labels: ["2AM", "4AM", "6AM", "8AM", "12AM"],
    datasets: [
      {
        // label: 'Sample Line Chart',

        
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#F36565',
        borderColor: '#F36565',
        // borderCapStyle: 'butt',
        // borderDash: [],
        // borderDashOffset: 0.5,
        // borderJoinStyle: 'miter',
        pointBorderColor: '#161515',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: '#sss5E7EBC',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <>
      <div className="flex items-center justify-center " >
        <div className="w-[30vw]" >
          <Line className="w-[30vw]"
            data={data}
            options={{
              scales: {
                x: {
                  beginAtZero: true,
                },
                y: {
                  beginAtZero: true,
                  // max: 24,
                }
              },
              plugins:{
                legend:{
                  display:false
                }
              },

              layout: {
                padding: {
                    bottom: 50,
                    left: 10,
                    right: 10
                }

            }


            }}

            
          />
        </div>
      </div>
    </>
  )
}

export default TimeLineChart