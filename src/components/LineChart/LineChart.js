import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardContent, Typography } from "@mui/material";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ chartData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 20,
          usePointStyle: false,
          padding: 20,
          color: 'black', // Custom legend text color
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: 400,
        borderRadius: "8px",
        border: "0.5px solid #e0e0e0",
        opacity: 1,
        overflow: "hidden",
        backgroundColor: "#FBF7FA",
      }}
    >
      <CardContent
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          "& .chart-container": {
            height: "100%",
            width: "100%",
          },
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Daily Trend
        </Typography>
        <div className="chart-container">
          <Line data={chartData} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChart;
