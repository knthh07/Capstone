import React from "react";
// eslint-disable-next-line
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Number of Job Request by Month",
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(255, 159, 64)",
      ],
      borderColor: "rgb(255, 255, 255)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const PieChart = () => {
  // Customize chart options as needed
  const options = {
    maintainAspectRatio: false, // Prevent the chart from maintaining aspect ratio
    responsive: true, // Make the chart responsive
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
