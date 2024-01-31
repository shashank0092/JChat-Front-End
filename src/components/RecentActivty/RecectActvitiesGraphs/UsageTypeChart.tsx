import { CategoryScale, Chart } from "chart.js/auto"
import { Pie } from 'react-chartjs-2';

Chart.register(CategoryScale)

const UsageTypeChart = () => {

  const data = {
    labels: ["Chats", "Voice Calls", "Video Calls"],
    datasets: [
      {
        data: [30, 25, 20],
        backgroundColor: ['#73B1BA', '#BCB58D', '#7986C8'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  return (
    <>
      <div className="w-[30vw] h-[30vh] flex justify-center" >
        <Pie className="  "
          data={data}
          options={{
            plugins: {
              legend: {
                display: false
              }
            }
          }}
        />
      </div>
    </>
  )
}

export default UsageTypeChart