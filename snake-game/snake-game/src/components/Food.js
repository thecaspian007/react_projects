import React from "react";

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
        <polygon
          points="15,0 18,10 28,10 20,15 22,25 15,20 8,25 10,15 2,10 12,10"
          fill="#FF0000"
        />
      </svg>
    );
  }

export default Food;