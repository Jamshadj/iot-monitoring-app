import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, CardContent, Typography } from "@mui/material";

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ doughnutData, doughnutOptions }) => {
  return (
    <Card
      sx={{
        height: 400,
        borderRadius: "8px 8px 0px 0px",
        border: "0.5px solid #e0e0e0",
        opacity: 1,
        overflow: "hidden",
        backgroundColor:"#FBF7FA"
      }}
    >
      <CardContent sx={{ padding: 2, height: "90%" }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Device Availability
        </Typography>
        <Doughnut data={doughnutData} options={doughnutOptions} />
      </CardContent>
    </Card>
  );
};

export default DoughnutChart;
