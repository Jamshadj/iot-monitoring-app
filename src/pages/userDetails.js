import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

const UserDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="p-4">
          <Typography variant="h4" className="mb-4">User Details</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['User 01', 'User 02', 'User 03', 'User 04'].map(user => (
              <Card key={user}>
                <CardContent>
                  <div className="flex items-center">
                    <Avatar>{user.charAt(0)}</Avatar>
                    <Typography variant="h6" className="ml-2">{user}</Typography>
                  </div>
                  <Typography variant="body2">Email: {user.toLowerCase()}@example.com</Typography>
                  <Typography variant="body2">Role: Admin</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
