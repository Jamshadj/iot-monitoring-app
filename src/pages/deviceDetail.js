import React from "react";
import { useParams } from "react-router-dom";
import DeviceDetails from "../components/DeviceDetails/DeviceDetails";
import DeviceData from "../sample-datasets/deviceData.json";
import { Grid } from "@mui/material";
import LineChart from "../components/LineChart/LineChart";
import data1 from "../sample-datasets/data_0.json";
import data2 from "../sample-datasets/data_1.json";
import ProgressCard from "../components/ProgressCard/ProgressCard";
import UptimeBar from "../components/UptimeBar/UptimeBar";
import UptimeJson from "../sample-datasets/uptimeData.json";

const DeviceDetail = () => {
  const { deviceName } = useParams();
  const device = DeviceData.find((d) => d.deviceName === deviceName);

  const transformData = (data) => {
    const labels = data.map((item) => item.hour);
    const dataPoints = data.map((item) => item.data);
    return { labels, dataPoints };
  };

  const { labels, dataPoints: dataPoints1 } = transformData(data1);
  const { dataPoints: dataPoints2 } = transformData(data2);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Data-0",
        data: dataPoints1,
        borderColor: "#3b82f6",
        fill: false,
      },
      {
        label: "Data-1",
        data: dataPoints2,
        borderColor: "#06b6d4",
        fill: false,
      },
    ],
  };

  const progressData = [
    { label: "Data-0", value: 50, color: "#6975FF" },
    { label: "Data-1", value: 50, color: "#64BDC6" },
    { label: "Data-2", value: 50, color: "#084FD7" },
  ];

  return (
    <div
      className="device-list"
      style={{
        marginTop: "6rem",
        display: "flex",
        flexWrap: "wrap",
        padding: "16px",
        gap: "16px",
      }}
    >
      {device ? <DeviceDetails device={device} /> : <p>Device not found</p>}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={11.9}>
          <LineChart chartData={chartData} />
        </Grid>
        <Grid item xs={12} sm={12} display={"flex"} gap={1} md={12} lg={12}>
          {progressData.map((data, index) => (
            <ProgressCard
              key={index}
              label={data.label}
              value={data.value}
              color={data.color}
            />
          ))}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <UptimeBar data={UptimeJson} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DeviceDetail;
