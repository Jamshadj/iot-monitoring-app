IoT Device Monitoring Web App

# Overview
The IoT Device Monitoring Web App is designed to monitor and manage IoT devices used by brands and FMCGs to promote their products and track customer engagements. The application provides insights into device status, customer engagement data, battery, SIM data, and uptime metrics.

# Features
User Authentication:

Users can log in with email and password.
Upon login, users are redirected to the dashboard.

Dashboard:

Line Chart (Daily Trend): Visualizes data generated per hour over a 24-hour period.
Progress Bar Widgets: Display progress towards a target for data 2, showing contributions from data 0 and data 1.
Uptime Metrics: Bar graph showing device online/offline status and duration.
Navigation:

Profile Icon: Navigates to user details.
Logout Icon: Redirects to the Estro Tech Robotics website in a new tab.
Side Navigation Menu: Toggles side navigation menu.
Device List: Displays devices with details and allows navigation to the device list page.
Device Details: Displays detailed information and metrics for selected devices.
Device Monitoring:

Daily Trend Chart: Shows the hourly data of devices for data 0, data 1, and data 2.
Progress Bar Widgets: Indicate the percentage of data 0 and data 1 as parts of data 2 and progress towards the target.
Doughnut Chart: Visualizes device availability.
Offline Devices List: Displays a list of offline devices with timestamps.
Getting Started
Prerequisites
Node.js (v14 or later)
npm or yarn
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/Jamshadj/iot-monitoring-app
cd iot-monitoring-app
Install Dependencies:

bash
Copy code
npm install
# or
yarn install
Run the Development Server:

bash
Copy code
npm start
# or
yarn start
The app will be available at http://localhost:3000.