import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function BarChart() {
  // Sample data for the bar chart
  const data = {
    labels: [
      'Category A',
      'Category B',
      'Category C',
      'Category D',
      'Category E',
    ],
    datasets: [
      {
        label: 'Data Set 1',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Bar color
        borderColor: 'rgba(255, 99, 132, 1)', // Border color
        borderWidth: 1,
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'category', // Use 'category' scale for x-axis
        grid: {
          display: false, // Hide the x-axis grid lines
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true, // Show the y-axis grid lines
        },
      },
    },
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
        Simple Bar Chart
      </h1>

      {/* Bar chart */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChart;
