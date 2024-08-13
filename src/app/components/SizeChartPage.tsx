import React from 'react';

const standardRingSizes = [
  { size: 'US 3', diameter: 14.0, uk: 'F', eu: '44.2', jp: '4', aus: 'F' },
  { size: 'US 4', diameter: 14.8, uk: 'H', eu: '46.8', jp: '7', aus: 'H' },
  { size: 'US 5', diameter: 15.7, uk: 'J 1/2', eu: '49.3', jp: '9', aus: 'J 1/2' },
  { size: 'US 6', diameter: 16.5, uk: 'L', eu: '51.9', jp: '12', aus: 'L' },
  { size: 'US 7', diameter: 17.3, uk: 'N', eu: '54.4', jp: '14', aus: 'N' },
  { size: 'US 8', diameter: 18.1, uk: 'P', eu: '56.9', jp: '16', aus: 'P' },
  { size: 'US 9', diameter: 19.0, uk: 'R', eu: '59.5', jp: '18', aus: 'R' },
  { size: 'US 10', diameter: 19.8, uk: 'T 1/2', eu: '62.1', jp: '20', aus: 'T 1/2' },
  { size: 'US 11', diameter: 20.6, uk: 'V 1/2', eu: '64.6', jp: '23', aus: 'V 1/2' },
  { size: 'US 12', diameter: 21.4, uk: 'Y', eu: '67.2', jp: '25', aus: 'Y' },
  { size: 'US 13', diameter: 22.2, uk: 'Z+1', eu: '69.7', jp: '27', aus: 'Z+1' },
  { size: 'US 14', diameter: 23.0, uk: 'Z+2', eu: '72.3', jp: '30', aus: 'Z+2' },
  { size: 'US 15', diameter: 23.8, uk: 'Z+3', eu: '74.8', jp: '32', aus: 'Z+3' },
  { size: 'US 16', diameter: 24.6, uk: 'Z+4', eu: '77.3', jp: '34', aus: 'Z+4' },
  { size: 'US 17', diameter: 25.4, uk: 'Z+5', eu: '79.8', jp: '36', aus: 'Z+5' },
  { size: 'US 18', diameter: 26.2, uk: 'Z+6', eu: '82.4', jp: '38', aus: 'Z+6' },
  { size: 'US 19', diameter: 27.0, uk: 'Z+7', eu: '85.0', jp: '40', aus: 'Z+7' },
  {size: 'US 20', diameter: 27.8, uk: 'Z+8', eu: '87.5', jp: '42', aus: 'Z+8' },
  { size: 'US 21', diameter: 28.6, uk: 'Z+9', eu: '90.1', jp: '44', aus: 'Z+9' },
  { size: 'US 22', diameter: 29.4, uk: 'Z+10', eu: '92.6', jp: '46', aus: 'Z+10' }, 
  { size: 'US 23', diameter: 30.2, uk: 'Z+11', eu: '95.2', jp: '48', aus: 'Z+11' }, 
  { size: 'US 24', diameter: 31.0, uk: 'Z+12', eu: '97.7', jp: '50', aus: 'Z+12' },
];


const SizeChart = () => {
  return (
    <div className="w-full bg-white rounded-md shadow-lg p-4 mb-8 overflow-x-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Standard Ring Sizes</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 py-2 px-4 text-purple-600 font-bold">US Size</th>
            <th className="border-b-2 py-2 px-4 text-blue-600 font-bold">UK Size</th>
            <th className="border-b-2 py-2 px-4 text-green-600 font-bold">EU Size</th>
            <th className="border-b-2 py-2 px-4 text-red-600 font-bold">JP Size</th>
            <th className="border-b-2 py-2 px-4 text-yellow-600 font-bold">AUS Size</th>
            <th className="border-b-2 py-2 px-4 text-gray-600 font-bold">Diameter (mm)</th>
          </tr>
        </thead>
        <tbody>
          {standardRingSizes.map((ring, index) => (
            <tr key={index} className="hover:bg-gray-100 transition-colors">
              <td className="border-b py-2 px-4 text-purple-700 font-medium">{ring.size}</td>
              <td className="border-b py-2 px-4 text-blue-700 font-medium">{ring.uk}</td>
              <td className="border-b py-2 px-4 text-green-700 font-medium">{ring.eu}</td>
              <td className="border-b py-2 px-4 text-red-700 font-medium">{ring.jp}</td>
              <td className="border-b py-2 px-4 text-yellow-700 font-medium">{ring.aus}</td>
              <td className="border-b py-2 px-4 text-gray-700 font-medium">{ring.diameter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SizeChart;
