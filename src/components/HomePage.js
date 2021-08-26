import * as React from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';

//components
import WhitePaper from './WhitePaper';

//data
import articleDateArr from './data/articleDataArr';

const HomePage = () => {
  return (
    <div className='home__wrapper'>
      <section className='section__wrapper' id='section-0'>
        <h1 className='page-placeholder'>OBIC</h1>
        <WhitePaper obicData={articleDateArr[0]} />
      </section>
      <section className='section__wrapper' id='section-1'>
        <h1 className='page-placeholder'>tldnr</h1>
        <WhitePaper obicData={articleDateArr[0]} />
      </section>
      <section className='section__wrapper' id='section-2'>
        <h1 className='page-placeholder'>HAPMAP</h1>
        <WhitePaper obicData={articleDateArr[0]} />
      </section>
      {/* <section style={{ backgroundColor: '#E0E0E0' }} id='section-1'>
        <h1>tldnr</h1>
        <WhitePaper tldnrData={articleDateArr[1]} />
      </section>
      <section style={{ backgroundColor: '#D0D0D0' }} id='section-2'>
        <h1>HAPMAP</h1>
        <WhitePaper hapmapData={articleDateArr[2]} />
      </section> */}
    </div>
  );
};

export default HomePage;

/*
  data.map(()=>(
    <WtitePapper style="{{ backgroundColor: '#F0F0F0' }}" id={props.hashlink} />
  ))
*/
