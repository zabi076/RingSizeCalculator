"use client";
import React, { useState } from 'react';

const RingSizeCalculator = () => {
  // Convert mm to pixels using a scale factor (approx. 3.78 pixels per mm for a typical screen)
  const mmToPx = (mm: number) => mm * 3.78;

  const [size, setSize] = useState(18); // Default size in mm (starting at 18mm)

  const handleSizeChange = (newSize: number) => {
    setSize(newSize);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-center">Ring Size Calculator</h1>

      {/* Circle */}
      <div 
        className="flex items-center justify-center mb-8"
        style={{
          width: `${mmToPx(size)}px`, // Convert mm to pixels for a realistic size
          height: `${mmToPx(size)}px`,
          borderRadius: '50%', // Ensure the element is a circle
          border: '2px solid #4a5568', // Add a solid border to make the circle visible
        }}
      ></div>

      {/* Slider */}
      <div className="w-full max-w-xs px-4">
        <input
          type="range"
          min="18"
          max="30"
          value={size}
          onChange={(e) => handleSizeChange(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          style={{ 
            appearance: 'none',
            outline: 'none',
          }}
        />
      </div>

      {/* Diameter Display */}
      <div className="mt-4 text-xl text-center">
        Diameter: {size.toFixed(1)} mm
      </div>
    </div>
  );
};

export default RingSizeCalculator;
