import React from 'react';
import LottieWrapper from './lottie/LottieWrapper';

function Logo(props) {
  // console.log('props===>In logo===>', props);
  return (
    <div>
      <LottieWrapper
        animation={props.animation}
        animationData={props.animationData}
      />
    </div>
  );
}

export default Logo;
