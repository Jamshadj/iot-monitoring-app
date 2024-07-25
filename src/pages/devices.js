import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const Devices = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="p-4">
          <Typography variant="h4" className="mb-4">Devices</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Device 01', 'Device 02', 'Device 03', 'Device 04'].map(device => (
              <Card key={device}>
                <CardContent>
                  <Typography variant="h6">{device}</Typography>
                  <Typography variant="body2">Location: Location {device}</Typography>
                  <Typography variant="body2">Status: Online</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
