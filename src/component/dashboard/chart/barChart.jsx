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

// Registrasi elemen ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Opsi konfigurasi chart
const options = {
  responsive: true,
  maintainAspectRatio: false, // Kunci agar tinggi bisa menyesuaikan
  plugins: {
    legend: { position: "top" },
    title: {
      display: true,
      text: "Grafik Dukungan Bulanan",
    },
  },
};

// Data chart
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

// Komponen BarChart
export default function BarChart() {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[450px]">
      <Bar options={options} data={data} />
    </div>
  );
}
