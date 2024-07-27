import React from 'react';

const SignalIcon = ({ percentage }) => {
  // Number of lines to show based on percentage
  const getLinesCount = (percent) => {
    if (percent >= 100) return 5;
    if (percent >= 80) return 4;
    if (percent >= 60) return 3;
    if (percent >= 40) return 2;
    if (percent >= 20) return 1;
    return 0;
  };

  const linesCount = getLinesCount(percentage);

  // Create an array of line positions based on the number of lines to show
  const lines = [];
  for (let i = 0; i < 5; i++) {
    lines.push(
      <path
        key={i}
        d={`M${2 + i * 3.5} 12H${2.5 + i * 3.5}V${12 - (i * 2.4)}H${2 + i * 3.5}Z`}
        fill="#1E1E1E"
        opacity={i < linesCount ? 1 : 0.3} // Adjust opacity based on the number of lines to show
      />
    );
  }

  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      {lines}
    </svg>
  );
};

export default SignalIcon;
