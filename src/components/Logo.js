import React from 'react';
import Lottie from './LottiePlayer/Lottie';

function Logo(props) {
  console.log('props===>In logo===>', props);
  return (
    <div>
      <Lottie
        animationData={props.animationData}
        frames={{ frameStart: props.frameStart, frameEnd: props.frameEnd }}
      />
    </div>
  );
}

export default Logo;
