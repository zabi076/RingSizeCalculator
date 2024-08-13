"use client";
import React from 'react';
import RingSlider from './components/RingSliderPage';
import SizeChart from './components/SizeChartPage';

const RingSizeCalculator = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-start">
      <div className="flex items-center justify-between w-full max-w-md mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">RING SIZE CALCULATOR</h1>
      </div>

      <SizeChart />
      <RingSlider />
    </div>
  );
};

export default RingSizeCalculator;