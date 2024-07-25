import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import data1 from "../sample-datasets/data_0.json";
import data2 from "../sample-datasets/data_1.json";

// Register necessary components for Chart.js
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Transform JSON data into chart.js format
  const transformData = (data) => {
    const labels = data.map(item => item.hour);
    const dataPoints = data.map(item => item.data);
    return { labels, dataPoints };
  };

  const { labels, dataPoints: dataPoints1 } = transformData(data1);
  const {  dataPoints: dataPoints2 } = transformData(data2);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Data-0',
        data: dataPoints1,
        borderColor: '#3b82f6',
        fill: false,
      },
      {
        label: 'Data-1',
        data: dataPoints2,
        borderColor: '#06b6d4',
        fill: false,
      }
    ],
  };

  return (
    <div className="flex" style={{ marginTop: "6rem" }}>
      <div className="flex flex-col flex-grow">
        <div className="p-4">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} lg={11.9}>
              <Card
                sx={{
                  width: '100%',
                  height: 400,
                  borderRadius: '8px 0px 0px 0px',
                  border: '0.5px solid #e0e0e0',
                  opacity: 1,
                  overflow: 'hidden',
                }}
              >
                <CardContent
                  sx={{
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    '& .chart-container': {
                      height: '100%',
                      width: '100%',
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Daily Trend
                  </Typography>
                  <div className="chart-container">
                    <Line data={chartData} options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }} />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
