import * as React from 'react';

//components
import LandingPage from '../pages/LandingPage';
import Section from './Sections';
import About from '../pages/AboutPage';
import Documents from '../pages/Documents';

//data
import contentData from '../data/ContentData';

import TransgroupPoc from '../TransitionGroupPOC/index';

// 🔥🔥🔥 POC 🔥🔥🔥
//lottie Background POC animation Data
import obicAnimation from '../data/obic-transition.json';

const HomePage = () => {
  // console.log('Re-rendering Home Page =====>');
  return (
    <div className='home__wrapper'>
      <TransgroupPoc />
      <section id='home'>
        {/* <LandingPage id='Landing' className='section__wrapper landing' /> */}
      </section>
      {contentData.map((articleData) => (
        <Section
          key={articleData.id}
          lottieAnimation={obicAnimation}
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
