"use client";
import React, { useState } from 'react';
import { Sliders, CheckCircle, Edit } from 'lucide-react';
import Button from './button';

const RingSlider = () => {
  const [size, setSize] = useState(23.5); // Default size in mm
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
    const newSize = ((touch.clientX - rect.left) / rect.width) * (40 - 18) + 18; // Adjusted range to 18 - 40 mm
    const clampedSize = Math.min(Math.max(newSize, 18), 40);
    handleSizeChange(parseFloat(clampedSize.toFixed(1)));
  };

  const calculateRingCircumference = (diameter: number) => {
    return (diameter * Math.PI).toFixed(2);
  };

  return (
    <div className="flex flex-col items-center w-full px-4 py-6 sm:py-8 md:py-12">
      <div 
        className="flex items-center justify-center relative bg-gray-200 rounded-full"
        style={{ 
          width: 'clamp(220px, 80vw, 440px)', // Adjust container size slightly larger
          height: 'clamp(220px, 80vw, 440px)', // Adjust container size slightly larger
          marginBottom: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '10px'
        }}
      >
        <div 
          className="bg-white rounded-full"
          style={{
            width: `${size}mm`, // Actual circle size in mm
            height: `${size}mm`, // Actual circle size in mm
            border: '2px solid #4a5568'
          }}
        ></div>
      </div>
      <div className="text-2xl font-bold mb-4 text-center">
        Diameter: {size.toFixed(1)} mm
      </div>
      <div className="text-xl mb-4 text-center">
        Circumference: {calculateRingCircumference(size)} mm
      </div>
      <div className="w-full max-w-md mb-4 px-4">
        <input
          type="range"
          min="18"
          max="40"
          step="0.1"
          value={size}
          onChange={(e) => handleSizeChange(parseFloat(e.target.value))}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchStart={(e) => e.preventDefault()}
          className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer shadow-inner"
          style={{ touchAction: 'none' }} 
        />
      </div>
      <div className="flex items-center mb-4 w-full px-4">
        <Sliders className="mr-2" />
        <span>18 mm</span>
        <div className="flex-grow mx-2 h-px bg-gray-300"></div>
        <span>40 mm</span>
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
        <div className="text-lg mb-4 text-center">
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
