import React from 'react';

const Dots = ({ color }) => {
  
  return (
    <span className={`rounded-full bg-${color}-500 w-4 h-4 shadow-inner`}></span>
  );
}

export default Dots;