import React from 'react';
import Lottie from "react-lottie";
import animationData from './working-man.json'


const WorkAnimation = ({ width, height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
}

export default WorkAnimation
