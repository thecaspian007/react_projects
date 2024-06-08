import React from 'react';

function Food({ position }) {
  return (
    <svg
      style={{
        position: "absolute",
        left: `${position.x}%`,
        top: `${position.y}%`,
        zIndex: 0,
      }}
      width="30" 
      height="30"
      viewBox="0 0 30 30"
    >
      {/* Apple Body */}
      <ellipse
        cx="15"
        cy="20"
        rx="10"
        ry="13"
        fill="#FF0000" // Red apple
      />
      {/* Apple Stem */}
      <rect
        x="13"
        y="6"
        width="4"
        height="10"
        fill="#8B4513" // Brown stem
      />
      {/* Apple Leaf */}
      <ellipse
        cx="20"
        cy="5"
        rx="4"
        ry="2"
        fill="#228B22" // Green leaf
        transform="rotate(-30, 20, 5)"
      />
    </svg>
  );
}

export default Food;
