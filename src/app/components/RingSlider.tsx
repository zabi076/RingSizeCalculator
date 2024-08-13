"use client";
import React, { useState } from 'react';
import { Sliders, CheckCircle, Edit } from 'lucide-react';
import Button from '../components/button';

const RingSlider = () => {
  const [size, setSize] = useState(18.1);
  const [perfectSize, setPerfectSize] = useState<number | null>(null);
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

  const handleTouchMove = (e: React.TouchEvent<HTMLInputElement>) => {
    const touch = e.touches[0];
    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    const newSize = ((touch.clientX - rect.left) / rect.width) * (23 - 14) + 14;
    setSize(Math.min(Math.max(newSize, 14), 23));
  };

  const calculateRingSize = (diameter: number) => {
    return (diameter * Math.PI).toFixed(2);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md">
      <div className="relative mb-8">
        <div
          className="border-4 border-gray-800 rounded-full transition-all duration-300 ease-in-out shadow-xl"
          style={{ width: `${size * 5}px`, height: `${size * 5}px`, backgroundColor: 'gray' }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-bold text-xl">
          {size} mm
        </div>
      </div>

      <div className="w-64 md:w-96">
        <input
          type="range"
          min="14"
          max="23"
          value={size}
          onChange={(e) => handleSizeChange(Number(e.target.value))}
          onTouchMove={handleTouchMove}
          className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer shadow-inner"
        />
        <div className="relative mt-2">
          <div className="absolute left-0 -ml-1">
            <Sliders size={20} className="text-gray-800" />
          </div>
          <div className="absolute right-0 -mr-1">
            <Sliders size={20} className="text-gray-800" />
          </div>
        </div>
      </div>

      <div className="mt-4 text-gray-800 text-xl font-semibold font-mono">
        Ring Circumference: {calculateRingSize(size)} mm
      </div>

      {perfectSize === null || isEditing ? (
        <Button onClick={handleSetPerfectSize}>
          {isEditing ? (
            <>
              <Edit size={20} className="inline-block mr-2" />
              Update Perfect Size
            </>
          ) : (
            <>
              <CheckCircle size={20} className="inline-block mr-2" />
              Set Perfect Size
            </>
          )}
        </Button>
      ) : (
        <div className="mt-4 text-gray-800 text-xl font-semibold">
          Your Perfect Size: {calculateRingSize(perfectSize)} mm
          <button
            onClick={() => setIsEditing(true)}
            className="ml-4 mt-2 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-colors shadow-lg"
          >
            <Edit size={20} className="inline-block mr-2" />
            Edit Size
          </button>
        </div>
      )}
    </div>
  );
};

export default RingSlider;