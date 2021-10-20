import React from 'react';
import LottieWrapper from '../helper/LottiePlayer';

function Logo({ animation, animationObj }) {
  console.log('%cAnimating Logo ===>', 'color: darkgreen; font-size: 16px');
  console.log('Page Number', animationObj.pageNo);
  console.log('Start segment', animationObj.firstFrame);
  console.log('End segment', animationObj.lastFrame);
  console.log('Direction', animationObj.playDirection);

  let newAnimationObj = {
    loop: false,
    speed: 1,
    play: true,
    animationData: animation,
    direction: animationObj.playDirection,
    segments: [animationObj.firstFrame, animationObj.lastFrame],
  };

  return (
    <div>
      <LottieWrapper animationData={newAnimationObj} />
    </div>
  );
}

export default Logo;
