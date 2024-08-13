"use client";
import React from 'react';
import RingSlider from './components/RingSliderPage';
import SizeChart from './components/SizeChartPage';

const RingSizeCalculator = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-start">
    <div className="w-full max-w-md mb-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center">
          RING SIZE CALCULATOR</h1>
      </div>
      <RingSlider />
      <SizeChart />

    </div>
  );
};

export default RingSizeCalculator;