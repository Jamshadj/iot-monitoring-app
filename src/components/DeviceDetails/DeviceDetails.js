import React from "react";
import styles from "./DeviceDetails.module.css";
import StatusIcon from "../../svgs/statusIcon";
import LocationIcon from "../../svgs/locationIcon";
import InfoIcon from "../../svgs/infoIcon";
import ConnectIcon from "../../svgs/connectIcon";
import BatteryIcon from "../../svgs/batteryIcon";

const DeviceDetails = ({ device }) => {
  const { deviceName, connectionStatus, location, hw_data } = device;
  const isOnline =
    new Date(connectionStatus.connected) >
    new Date(connectionStatus.disconnected);


  return (
    <>
      <div className={styles.deviceCard}>
        <div className={styles.deviceHeader}>
          <h3 className={styles.deviceName}>{deviceName}</h3>
        </div>
        <div className={styles.locationContainer}>
          <StatusIcon
            className={styles.statusIcon}
            status={isOnline ? "online" : "offline"}
          />
          <span className={styles.availabilityText}>
            {isOnline ? "Online" : "Offline"}
          </span>
        </div>
        <div className={styles.locationContainer}>
          <span className={styles.lastConnectedText}>
            Last connected on{" "}
            {new Date(connectionStatus.connected).toLocaleString()}
          </span>
        </div>
      </div>
      <div className={styles.deviceCard}>
        <div className={styles.deviceHeader}>
          <LocationIcon />
          <h3 className={styles.detailsHeader}>Location</h3>
        </div>
        <div className={styles.locationContainer}>
          <span className={styles.lastConnectedText}>
            {location.building}, {location.city}, {location.district}, {location.state}, {location.country}, {location.pinCode}
          </span>
        </div>
      </div>
      <div className={styles.deviceCard}>
        <div className={styles.deviceHeader}>
          <InfoIcon />
          <h3 className={styles.detailsHeader}>Cell Info</h3>
        </div>
        <div className={styles.locationContainer}>
          <span className={styles.lastConnectedText}>Operator: {hw_data.sim.operator}</span>
        </div>
        <div className={styles.locationContainer}>
          <span className={styles.lastConnectedText}>Signal Strength: {hw_data.sim.signalStrength}</span>
        </div>
      </div>
      <div className={styles.deviceCard}>
        <div className={styles.deviceHeader}>
          <ConnectIcon />
          <h3 className={styles.detailsHeader}>USB Devices</h3>
        </div>
        <div className={styles.locationContainer}>
          <StatusIcon
            className={styles.statusIcon}
            status={"online"}
          />
          <span className={styles.availabilityText}>Device 1</span>
        </div>
        <div className={styles.locationContainer}>
          <StatusIcon
            className={styles.statusIcon}
            status={"online"}
          />
          <span className={styles.availabilityText}>Device 2</span>
        </div>
      </div>
      <div className={styles.deviceCard}>
        <div className={styles.deviceHeader}>
          <BatteryIcon />
          <h3 className={styles.detailsHeader}>Battery</h3>
        </div>
        <div className={styles.locationContainer}>
          <span className={styles.lastConnectedText}>Percentage: {hw_data.battery.percentage}</span>
        </div>
        <div className={styles.locationContainer}>
          <span className={styles.lastConnectedText}>Temperature: {hw_data.battery.temperature}</span>
        </div>
      </div>
    </>
  );
};

export default DeviceDetails;
