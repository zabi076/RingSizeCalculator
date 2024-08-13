"use client";
import React, { useState } from 'react';
import { Sliders, CheckCircle, Edit } from 'lucide-react';
import Button from './button';

const RingSlider = () => {
  const [size, setSize] = useState(23.5);
  const [perfectSize, setPerfectSize] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleSizeChange = (newSize: number) => {
    setSize(newSize);
    if (perfectSize !== null) {
      setIsEditing(true);
    }
  };

  const handleSetPerfectSize = () => {
    setPerfectSize(size);
    setIsEditing(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    const newSize = ((touch.clientX - rect.left) / rect.width) * (30 - 18) + 15;
    const clampedSize = Math.min(Math.max(newSize, 18), 30);
    handleSizeChange(parseFloat(clampedSize.toFixed(1)));
  };

  const calculateRingCircumference = (diameter: number) => {
    return (diameter * Math.PI).toFixed(2);
  };

  return (
    <div 
      className="flex flex-col items-center"
      style={{
        maxWidth: '100%',
        width: '100%',
        height: '100vh',
        overflow: 'hidden', // Prevents scrolling on mobile
        touchAction: 'none', // Disables touch gestures like zoom
      }}
    >
      <div 
        className="w-40 h-40 bg-gray-200 rounded-full mb-8 mt-4 flex items-center justify-center relative"
        style={{ 
          padding: '10px', // Reduced padding for better mobile view
          margin: '10px', // Added margin for spacing
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transform: 'translateY(-20px)',
          pointerEvents: 'none' // Removed pointer events to make it non-interactive
        }}
      >
        <div 
          className="bg-white rounded-full"
          style={{
            width: `${size}mm`,
            height: `${size}mm`,
            border: '2px solid #4a5568'
          }}
        ></div>
      </div>
      <div className="text-2xl font-bold mb-4">
        Diameter: {size.toFixed(1)} mm
      </div>
      <div className="text-xl mb-4">
        Circumference: {calculateRingCircumference(size)} mm
      </div>
      <div className="w-full max-w-md mb-4">
        <input
          type="range"
          min="18"
          max="33"
          step="0.1"
          value={size}
          onChange={(e) => handleSizeChange(parseFloat(e.target.value))}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchStart={(e) => e.preventDefault()}
          className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer shadow-inner"
          style={{ touchAction: 'none' }} // Disable touch scrolling to avoid conflicts
        />
      </div>
      <div className="flex items-center mb-4">
        <Sliders className="mr-2" />
        <span>18 mm</span>
        <div className="flex-grow mx-2 h-px bg-gray-300"></div>
        <span>33 mm</span>
      </div>
      {perfectSize === null || isEditing ? (
        <Button onClick={handleSetPerfectSize}>
          {isEditing ? (
            <>
              <CheckCircle className="mr-2" />
              Update Perfect Size
            </>
          ) : (
            <>
              <CheckCircle className="mr-2" />
              Set Perfect Size
            </>
          )}
        </Button>
      ) : (
        <div className="text-lg mb-4">
          Your Perfect Size:
          <br />
          Diameter: {perfectSize.toFixed(1)} mm
          <br />
          Circumference: {calculateRingCircumference(perfectSize)} mm
          <button
            onClick={() => setIsEditing(true)}
            className="ml-4 mt-2 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-colors shadow-lg"
          >
            <Edit className="mr-2 inline" />
            Edit Size
          </button>
        </div>
      )}
    </div>
  );
};

export default RingSlider;
