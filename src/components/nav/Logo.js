import React from 'react';
import LottieWrapper from '../helper/LottieWrapper';

function Logo({ animation, animationObj, passObj }) {
  console.log('Logo is Fiering!!!!', animation, animationObj, passObj);

  let newAnimationObj = {
    animation,
    animationObj,
  };
  passObj(newAnimationObj);

  return (
    <div>
      <LottieWrapper animation={animation} animationData={animationObj} />
    </div>
  );
}

export default Logo;
