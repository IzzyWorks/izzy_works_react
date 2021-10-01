import React from 'react';
import LottieWrapper from '../helper/LottieWrapper';

function Logo({ animation, animationObj, passObj }) {
  console.log('Logo is Fiering!!!!', animation, animationObj, passObj);

  let newAnimationObj = {
    animation,
    segments: [
      parseInt(animationObj.firstFrame),
      parseInt(animationObj.lastFrame),
    ],
    direction: animationObj.playDirection,
    speed: 1,
    play: true,
    loop: false,
  };
  passObj(newAnimationObj);

  return (
    <div>
      <LottieWrapper animation={animation} animationData={animationObj} />
    </div>
  );
}

export default Logo;
