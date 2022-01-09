import React from 'react';
import LottiePlayer from '../helper/LottiePlayer';
import logoAnimation from '../data/lottie/logo.json';
import useLocalStorage from '../hooks/useLocalStorage'; // key value pair

function Logo() {
  //hooks
  const [lottieObj, setLottieObj] = useLocalStorage('lottieData', {
    pageNo: 0,
    playDirection: 'down',
    firstFrame: 1,
    lastFrame: 1,
  });

  let newAnimationObj = {
    loop: false,
    speed: 0.5,
    play: true,
    animationData: logoAnimation,
    direction: lottieObj.playDirection,
    segments: [lottieObj.firstFrame, lottieObj.lastFrame],
  };

  const updateLocalStorage = (newLottieObj) => {
    setLottieObj(newLottieObj);
  };

  return (
    <Link
      to='/'
      // onMouseEnter={onHover}
      // onMouseLeave={onMouseLeave}
      className='navbar__logo-wrapper'
    >
      <LottiePlayer animationData={newAnimationObj} />
      <h3 className='logo-name'>izzy</h3>
    </Link>
  );
}

export default Logo;
