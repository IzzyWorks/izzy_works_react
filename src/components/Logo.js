import React from 'react';
import Lottie from './LottiePlayer/Lottie';

function Logo(props) {
  // console.log('props===>In logo===>', props);
  return (
    <div>
      <Lottie
        animationData={props.animationData}
        frames={{ startFrame: props.startFrame, setFrames: props.setFrames }}
      />
    </div>
  );
}

export default Logo;
