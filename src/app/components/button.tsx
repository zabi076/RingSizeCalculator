import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="mt-4 px-4 py-2 bg-white text-purple-600 rounded-md font-semibold hover:bg-gray-200 transition-colors shadow-lg"
  >
    {children}
  </button>
);

export default Button;
