import React from 'react';
import uuid from 'react-uuid';

import LottieWrapper from '../lottie/LottieWrapper';

//components
import WhitePaper from '../WhitePaper';

function Section(props) {
  // console.log('inside section ====>', props);

  const lottiedata = {
    animation: props.lottieAnimation,
    obicAnim: props.obicAnimation,
    controlles: {
      //dynamic data
      segments: [frames[0], frames[1]],
      direction: 1,
      speed: 0.5,
      play: true,
      loop: false,
    },
  };

  return (
    <section
      key={uuid()}
      id={props.section.id}
      className={`section__wrapper ${props.section.style}`}
    >
      <LottieWrapper
        animation={lottiedata.obicAnim}
        animationData={lottiedata.controlles}
      />
      <WhitePaper key={uuid()} whitePaper={props.section} />
    </section>
  );
}

export default Section;
