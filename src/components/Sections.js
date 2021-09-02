import React from 'react';
import uuid from 'react-uuid';

//lottie Background POC animation Data
import lottieAnimationAE from './data/9878-background-full-screen.json';

import LottieWrapper from './lottie/LottieWrapper';

//components
import WhitePaper from './WhitePaper';

function Section(props) {
  // console.log('inside section ====>', props);

  const lottiedata = {
    animation : lottieAnimationAE,
    controlles : {
      //dynamic data
      segments: [frames[0], frames[1]],
      direction: 1,
      speed: 1,
      play: true,
      loop: false,
    }
  };

  return (
    <section
      key={uuid()}
      id={props.section.id}
      className={`section__wrapper ${props.section.style}`}
    >
      <LottieWrapper
        animation={lottiedata.animation}
        animationData={lottiedata.controlles}
      />
      <WhitePaper key={uuid()} whitePaper={props.section} />
    </section>
  );
}

export default Section;
