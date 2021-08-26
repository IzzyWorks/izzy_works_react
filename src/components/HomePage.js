import * as React from 'react';
// import { HashLink, NavHashLink } from 'react-router-hash-link';
import uuid from 'react-uuid';

//components
import WhitePaper from './WhitePaper';

//data
import articleDateArr from './data/articleDataArr';

const HomePage = () => {
  // console.log('home page props ===>', articleDateArr);
  return (
    <div className='home__wrapper'>
      {articleDateArr.map((articleData) => (
        <section key={uuid()} className='section__wrapper' id={articleData.id}>
          <WhitePaper whitePaperData={articleData} />
        </section>
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
