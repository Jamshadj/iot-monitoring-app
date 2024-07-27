import React from 'react';
import DeviceCard from '../components/DeviceCard/DeviceCard';
import DeviceData from "../sample-datasets/deviceData.json"; // Correct path to your JSON file

const DeviceList = () => {
  return (
    <div className="device-list" style={{ marginTop: "6rem", display: "flex", flexWrap: "wrap", padding: "16px", gap: "16px" }}>
      {DeviceData.map((device, index) => (
        <DeviceCard key={index} device={device} />
      ))}
    </div>
  );
};

export default DeviceList;
