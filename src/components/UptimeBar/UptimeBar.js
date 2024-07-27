import React from 'react';
import styles from './UptimeBar.module.css';
import { Typography } from '@mui/material';

const UptimeBar = ({ data }) => {
  const totalDuration = 24 * 60 * 60; 

  const calculateWidth = (duration) => {
    return (duration / totalDuration) * 100;
  };

  const totalEventDuration = data.reduce((sum, event) => sum + event.duration, 0);
  const remainingDuration = totalDuration - totalEventDuration;

  return (
    <div className={styles.uptimeBarContainer}>
        <Typography sx={{marginBottom:"16px"}}>Uptime Data</Typography>
      <div className={styles.uptimeBar}>
        {data.map((event, index) => (
          <div
            key={index}
            className={styles[event.event]}
            style={{ width: `${calculateWidth(event.duration)}%` }}
          ></div>
        ))}
        {remainingDuration > 0 && (
          <div
            className={styles.unknown}
            style={{ width: `${calculateWidth(remainingDuration)}%` }}
          ></div>
        )}
      </div>
      <div className={styles.timeLabels}>
        {Array.from({ length: 24 }, (_, i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </div>
  );
};

export default UptimeBar;
