import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import OfflineDevicesList from "../OfflineDevicesList/OfflineDevicesList";

const OfflineDevicesCard = ({ offlineDevices }) => (
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
    <CardContent sx={{ padding: 2, height: "100%" }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Offline Devices
      </Typography>
      <OfflineDevicesList offlineDevices={offlineDevices} />
    </CardContent>
  </Card>
);

export default OfflineDevicesCard;
