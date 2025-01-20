'use client'; // Mark the component as client-side rendered (React 18)

import React, { useState } from 'react';
import './SwirlingButton.module.css'; // Import the CSS file for the button animation

const SwirlingButton = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Handle mouse enter and leave for hover effect
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <button
      className={`swirling-button ${isHovering ? 'hover' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      RGB Swirl Button
    </button>
  );
};

export default SwirlingButton;
