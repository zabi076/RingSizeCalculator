import React from 'react';
import RingSlider from '../app/components/RingSliderPage';
import SizeChart from './components/SizeChartPage';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-start">
      <div className="w-full max-w-md mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
          Ring Size Calculator
        </h1>
      </div>
      <RingSlider />
      <SizeChart/>
    </div>
  );
};

export default HomePage;
