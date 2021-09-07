import * as React from 'react';
import uuid from 'react-uuid';

//components
import LandingHero from './LandingHeroComp';
import Section from './Sections';
import About from '../About';
import Documents from '../Documents';

//data
import contentData from '../data/ContentData';
// import landingAnimationData from '../data/LandingAnimationData';

//lottie Background POC animation Data
import lottieAnimationAE from '../data/poc-background-animation.json';
import obicLottieAnimation from '../data/obic-home-transition.json';

const HomePage = (props) => {
  // console.log('Re-rendering Home Page =====>');
  return (
    <div className='home__wrapper'>
      <section id='home'>
        <LandingHero
        // obicHomeAnimation={obicLottieAnimation}
        // landingAnimationData={landingAnimationData}
        />
      </section>
      {contentData.map((articleData) => (
        <Section
          key={uuid()}
          lottieAnimation={lottieAnimationAE}
          obicAnimation={obicLottieAnimation}
          section={articleData}
        />
      ))}
      <section id='About' className='section__wrapper about'>
        <About />
      </section>
      <section id='Documents' className='section__wrapper documents'>
        <Documents />
      </section>
    </div>
  );
};

export default HomePage;

/*
  data.map(()=>(
    <WtitePapper style="{{ backgroundColor: '#F0F0F0' }}" id={props.hashlink} />
  ))
*/
