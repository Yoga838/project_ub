import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" }, // "chartArea" is invalid
    title: {
      display: true,
      //   text: "Modular Bar Chart",
    },
  },
};

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ],
  datasets: [
    {
      label: "Dukungan",
      data: [20, 60, 70, 40, 90, 60, 50, 70, 50, 75, 50, 60],
      backgroundColor: "gray",
    },
  ],
};

export default function BarChart() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Bar options={options} data={data} />
    </div>
  );
}
