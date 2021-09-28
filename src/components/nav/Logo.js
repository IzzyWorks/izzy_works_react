import React from 'react';
import LottieWrapper from '../helper/LottieWrapper';

function Logo(props) {
  // console.log('inside Logo ===>', props);
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
