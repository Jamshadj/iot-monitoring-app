import React from "react";
import { useParams } from "react-router-dom";
import DeviceDetails from "../components/DeviceDetails/DeviceDetails";
import DeviceData from "../sample-datasets/deviceData.json";
import { Grid } from "@mui/material";
import LineChart from "../components/LineChart/LineChart";
import data0 from "../sample-datasets/data_0.json";
import data1 from "../sample-datasets/data_1.json";
import ProgressCard from "../components/ProgressCard/ProgressCard";
import UptimeBar from "../components/UptimeBar/UptimeBar";
import UptimeJson from "../sample-datasets/uptimeData.json";
import Layout from "../Layout";

const DeviceDetail = () => {
  const { deviceName } = useParams();
  const device = DeviceData.find((d) => d.deviceName === deviceName);

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

  const progressData = [
    { label: "Data-0", value: 50, color: "#6975FF" },
    { label: "Data-1", value: 50, color: "#64BDC6" },
    { label: "Data-2", value: 50, color: "#084FD7" },
  ];

  

  return (
    <Layout>
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
    </Layout>
  );
};

export default DeviceDetail;
