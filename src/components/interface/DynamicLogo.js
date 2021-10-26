import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onHover, onMouseLeave } from '../helper/lottieSlice';
import LottiePlayer from '../helper/LottiePlayer';
import logoAnimation from '../data/lottie/logo.json';

function Logo() {
  console.log('%cAnimating Logo ===>', 'color: darkgreen; font-size: 16px');
  console.log('Page Number', logoAnimation.pageNo);
  console.log('Start segment', logoAnimation.firstFrame);
  console.log('End segment', logoAnimation.lastFrame);
  console.log('Direction', logoAnimation.playDirection);

  const lottie = useSelector((state) => state.lottie);
  console.log('am I selecting the lottieSlice?', lottie);

  let newAnimationObj = {
    loop: false,
    speed: 1,
    play: true,
    animationData: logoAnimation,
    direction: logoAnimation.playDirection,
    segments: [logoAnimation.firstFrame, logoAnimation.lastFrame],
  };

  return (
    <Link
      to='/'
      onMouseEnter={onHover}
      onMouseLeave={onMouseLeave}
      className='navbar__logo-wrapper'
    >
      <LottiePlayer animationData={newAnimationObj} />
      <h3 className='logo-name'>izzy</h3>
    </Link>
  );
}

export default Logo;
