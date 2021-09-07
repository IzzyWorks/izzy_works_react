import React from 'react';

// components
import Circles from './Circles';

//data
// import circleObicAnim from '../data/obic-home-transition.json';
import landingAnimationData from '../data/LandingAnimationData';

function LandingHero(props) {
  // const lottiedataObic = {
  //   animation: props.lottieAnimation,
  //   obicAnim: props.obicHomeAnimation,
  //   controlles: {
  //     //dynamic data
  //     segments: [frames[0], frames[1]],
  //     direction: 1,
  //     speed: 1,
  //     play: true,
  //     loop: true,
  //   },
  // };
  // const lottiedataTldnr = {
  //   animation: props.lottieAnimation,
  //   obicAnim: props.obicHomeAnimation,
  //   controlles: {
  //     //dynamic data
  //     segments: [frames[0], frames[1]],
  //     direction: 1,
  //     speed: 0.5,
  //     play: false,
  //     loop: true,
  //   },
  // };
  // const lottiedataHapMap = {
  //   animation: props.lottieAnimation,
  //   obicAnim: props.obicHomeAnimation,
  //   controlles: {
  //     //dynamic data
  //     segments: [frames[0], frames[1]],
  //     direction: 1,
  //     speed: 0.5,
  //     play: false,
  //     loop: true,
  //   },
  // };

  // const handleClick = (props, e) => {
  //   // console.log('inside eventhandler ===>', props);
  //   setSpeed(landingAnimationData.speed),
  //     setOnHover(landingAnimationData.onHover),
  //     setOnClick(landingAnimationData.onClick);
  // };

  console.log('props inside landging page', props);
  return (
    <div className='landing'>
      <div className={'landing__wrapper'}>
        {landingAnimationData.map((loadingAnimations) => (
          <Circles
            key={loadingAnimations.key}
            // lottieAnimation={circleObicAnim}
            animationData={loadingAnimations}
          />
        ))}
      </div>
      <ul className='circle--list'>
        <li className='circle--segment'>
          <ul className='circle--catagory hide'>
            <li>
              <div className='circle one'></div>
              <h3 className='circle--subtitle'>understand</h3>
            </li>
            <li>
              <div className='circle two'></div>
              <h3 className='circle--subtitle'>observe</h3>
            </li>
            <li>
              <div className='circle three'></div>
              <h3 className='circle--subtitle'>POV</h3>
            </li>
          </ul>
        </li>

        <li className='circle--segment'>
          <ul className='circle--catagory'>
            <li>
              <div className='circle four'></div>
              <h3 className='circle--subtitle'>ideate</h3>
            </li>
            <li>
              <div className='circle five'></div>
              <h3 className='circle--subtitle'>prototype</h3>
            </li>
            <li>
              <div className='circle six'></div>
              <h3 className='circle--subtitle'>test</h3>
            </li>
          </ul>
        </li>

        <li className='circle--segment'>
          <ul className='circle--catagory'>
            <li>
              <div className='circle seven'></div>
              <h3 className='circle--subtitle'>story telling</h3>
            </li>
            <li>
              <div className='circle eight'></div>
              <h3 className='circle--subtitle'>piolt</h3>
            </li>
            <li>
              <div className='circle nine'></div>
              <h3 className='circle--subtitle'>busines model</h3>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default LandingHero;

// const [frames, setFrames] = useState([0, 1]);
// const [speed, setSpeed] = useState([0]);
// const [onHover, setOnHover] = useState([0, 1]);
// const [onClick, setOnClick] = useState([0, 1]);
