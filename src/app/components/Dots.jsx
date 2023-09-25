import React from 'react';

const Dots = ({ bgColor }) => {

  return (
    <span className={`rounded-full ${bgColor} w-4 h-4 shadow-inner`}></span>
  );
}

export default Dots;