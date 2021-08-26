import * as React from 'react';
// import { HashLink, NavHashLink } from 'react-router-hash-link';
import uuid from 'react-uuid';

//components
import Section from './Sections';

// data
import sectionData from './data/navData';

const HomePage = () => {
  // console.log('home page props ===>', articleDateArr);
  return (
    <div className='home__wrapper'>
      {sectionData.map((sectionData) => (
        <Section key={uuid()} sections={sectionData} id={sectionData.title} />
      ))}
    </div>
  );
};

export default HomePage;

/*
  data.map(()=>(
    <WtitePapper style="{{ backgroundColor: '#F0F0F0' }}" id={props.hashlink} />
  ))
*/
