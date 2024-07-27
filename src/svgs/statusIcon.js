import React from 'react';

const StatusIcon = ({ status }) => {
  // Determine the color based on status
  const getColor = (status) => {
    switch (status) {
      case 'online':
        return '#3AE169'; // Green for online
      case 'offline':
        return '#DD3030'; // Red for offline
      default:
        return '#B4B7B7'; // Default gray color
    }
  };

  const color = getColor(status);

  return (
    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6.5" r="6" fill={color} />
    </svg>
  );
};

export default StatusIcon;
