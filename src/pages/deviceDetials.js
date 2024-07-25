import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar';
import { Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';

const DeviceDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const data = {
    labels: Array.from({ length: 24 }, (_, i) => i),
    datasets: [
      { label: 'Data-0', data: Array.from({ length: 24 }, () => Math.random() * 20), borderColor: '#3b82f6', fill: false },
    ],
  };

  return (
    <div className="flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="p-4">
          <Typography variant="h4" className="mb-4">Device Details</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="col-span-2">
              <CardContent>
                <Typography variant="h6">Device Name: Device 01</Typography>
                <Typography variant="body2">Location: Location 01</Typography>
                <Typography variant="body2">Status: Online</Typography>
                <Typography variant="body2">Description: This is a sample device description.</Typography>
              </CardContent>
            </Card>
            <Card className="col-span-2">
              <CardContent>
                <Typography variant="h6">Device Trend</Typography>
                <Line data={data} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetails;
