import React from 'react';

const BatteryIcon = ({ percentage }) => {
  // Calculate the width of the inner rectangle based on the percentage
  const getBatteryWidth = (percent) => {
    return Math.max(0, Math.min(100, percent)) + '%';
  };

  const batteryWidth = getBatteryWidth(percentage);

  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.4 2.4V4.8H21.6V7.2H20.4V9.6H2.4V2.4H20.4ZM21 0H1.8C0.805875 0 0 0.805875 0 1.8V10.2C0 11.1941 0.805875 12 1.8 12H21C21.9941 12 22.8 11.1941 22.8 10.2V9.6H23.1C23.5971 9.6 24 9.19706 24 8.7V3.3C24 2.80294 23.5971 2.4 23.1 2.4H22.8V1.8C22.8 0.805875 21.9941 0 21 0ZM15.6 3.6H3.6V8.4H15.6V3.6Z" fill="#1E1E1E"/>
      <rect x="3.6" y="3.6" width={batteryWidth} height="4.8" fill="#1E1E1E"/>
    </svg>
  );
};

export default BatteryIcon;
