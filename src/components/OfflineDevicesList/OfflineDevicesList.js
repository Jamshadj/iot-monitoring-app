import React from 'react';
import { ListItem, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from './OfflineDevicesList.module.css';

const OfflineDevicesList = ({ offlineDevices }) => {
  return (
    <div className={styles.scrollableListContainer}>
      {offlineDevices.map((device, index) => (
        <ListItem key={index} className={styles.styledListItem}>
          <div className={styles.deviceName}>{device.name}</div>
          <div className={styles.time}>{device.time}</div>
          <div className={styles.locationContainer}>
            <LocationOnIcon sx={{ width: '8.62px', height: '11.5px', color: '#666666' }} />
            <div className={styles.locationText}>{device.location}</div>
          </div>
        </ListItem>
      ))}
    </div>
  );
};

export default OfflineDevicesList;
