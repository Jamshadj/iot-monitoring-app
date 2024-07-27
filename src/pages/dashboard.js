import React from "react";
import { Grid } from "@mui/material";
import data0 from "../sample-datasets/data_0.json";
import data1 from "../sample-datasets/data_1.json";
import LineChart from "../components/LineChart/LineChart";
import ProgressCard from "../components/ProgressCard/ProgressCard";
import DoughnutChart from "../components/DoughnutChart/DoughnutChart";
import OfflineDevicesCard from "../components/OfflineDevicesCard/OfflineDevicesCard";

const Dashboard = () => {
  const transformData = (data) => {
    const labels = data.map((item) => item.hour);
    const dataPoints = data.map((item) => item.data);
    return { labels, dataPoints };
  };

  const { labels, dataPoints: dataPoints0 } = transformData(data0);
  const { dataPoints: dataPoints1 } = transformData(data1);
  const dataPoints2 = dataPoints0.map((point, index) => point + dataPoints1[index]);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Data-0",
        data: dataPoints0,
        borderColor: "#6975FF",
        fill: false,
      },
      {
        label: "Data-1",
        data: dataPoints1,
        borderColor: "#64BDC6",
        fill: false,
      },
      {
        label: "Data-2",
        data: dataPoints2,
        borderColor: "#084FD7",
        fill: false,
      },
    ],
  };

  const targetData2 = 1000; // Set target value for data-2

  const totalData0 = dataPoints0.reduce((acc, val) => acc + val, 0);
  const totalData1 = dataPoints1.reduce((acc, val) => acc + val, 0);
  const totalData2 = dataPoints2.reduce((acc, val) => acc + val, 0);

  const progressData = [
    { label: "Data-0", value: (totalData0 / totalData2) * 100, color: "#6975FF" },
    { label: "Data-1", value: (totalData1 / totalData2) * 100, color: "#64BDC6" },
    { label: "Data-2", value: (totalData2 / targetData2) * 100, color: "#084FD7" },
  ];

  const offlineDevices = [
    { name: "Device 01", location: "Location", time: "00 minutes" },
    { name: "Device 02", location: "Location", time: "00 minutes" },
    { name: "Device 03", location: "Location", time: "00 minutes" },
    { name: "Device 04", location: "Location", time: "00 minutes" },
    { name: "Device 05", location: "Location", time: "00 minutes" },
  ];

  const doughnutData = {
    datasets: [
      {
        data: [25, 75],
        backgroundColor: ["#ef4444", "#3AE169"],
        hoverBackgroundColor: ["#ef4444", "#3AE169"],
      },
    ],
    labels: ["Offline", "Online"],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
          boxWidth: 10,
          font: {
            size: 12,
          },
          padding: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex" style={{ marginTop: "6rem" }}>
      <div className="flex flex-col flex-grow">
        <div className="p-4">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} lg={11.9}>
              <LineChart chartData={chartData} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              {progressData.map((data, index) => (
                <ProgressCard
                  key={index}
                  label={data.label}
                  value={data.value}
                  color={data.color}
                />
              ))}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <DoughnutChart doughnutData={doughnutData} doughnutOptions={doughnutOptions} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <OfflineDevicesCard offlineDevices={offlineDevices} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
