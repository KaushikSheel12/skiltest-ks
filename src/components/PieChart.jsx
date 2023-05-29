import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


const PieChart = () => {
  // Define your chart data
  const data = {
    labels: ['Green', 'Red', 'Yellow'],
    datasets: [
      {
        data: [800, 100, 100],
        backgroundColor: ['#008000', '#ff0000', '#FFFF00'],
        hoverBackgroundColor: ['#008000', '#ff0000', '#FFFF00'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
