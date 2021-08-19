import React from 'react';
import Tldnr from '../white-paper/Tldnr';

//data
// import articleDate from './components/data/articleData';

function HomePageComp(props) {
  return (
    <main className='main--wrapper'>
      <Tldnr />
      <h1>Hello from landing page</h1>
    </main>
  );
}

export default HomePageComp;
