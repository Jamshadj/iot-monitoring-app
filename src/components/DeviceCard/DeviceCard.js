import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DeviceCard.module.css";
import ConnectIcon from "../../svgs/connectIcon";
import BatteryIcon from "../../svgs/batteryIcon";
import SignalIcon from "../../svgs/signalIcon";
import StatusIcon from "../../svgs/statusIcon";
import LocationIcon from "../../svgs/locationIcon";
import InfoIcon from "../../svgs/infoIcon";

const DeviceCard = ({ device }) => {
  const navigate = useNavigate();
  const { deviceName, location, connectionStatus, hw_data } = device;
  const batteryPercentage = parseInt(hw_data.battery.percentage, 10);
  const signalStrength = parseInt(hw_data.sim.signalStrength, 10);
  const isOnline = new Date(connectionStatus.connected) > new Date(connectionStatus.disconnected);

  const handleClick = () => {
    navigate(`/devices/${deviceName}`);
  };

  return (
    <div className={styles.deviceCard} onClick={handleClick}>
      <div className={styles.deviceHeader}>
        <h3 className={styles.deviceName}>{deviceName}</h3>
        <div className={styles.deviceStatusContainer}>
          <ConnectIcon />
          <SignalIcon percentage={signalStrength} />
          <BatteryIcon percentage={batteryPercentage} />
        </div>
      </div>
      <div className={styles.locationContainer}>
        <StatusIcon status={isOnline ? "online" : "offline"} />
        <span className={styles.locationText}>{location.country}</span>
      </div>
      <div className={styles.locationContainer}>
        <LocationIcon />
        <span className={styles.locationText}>
          {`${location.building}, ${location.city}, ${location.district}, ${location.state}, ${location.country}`}
        </span>
      </div>
      <div className={styles.locationContainer}>
        <InfoIcon />
        <span className={styles.locationText}>
          <span className={styles.locationText}>Cell Info</span>
        </span>
      </div>
    </div>
  );
};

export default DeviceCard;
