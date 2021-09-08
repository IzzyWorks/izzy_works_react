import React from 'react';

//components
import LottieWrapper from '../lottie/LottieWrapper';

//data temporarily static
import circleObicAnim from '../data/obic-home-transition.json';

function Circles(props) {
  console.log('inside section ====>', props);

  return (
    <div onClick={props.clickHandler} onMouseEnter={props.mouseEnter}>
      <LottieWrapper type={'circle'} animation={circleObicAnim} animationData={props.animationData} />
    </div>
  );
}

export default Circles;
