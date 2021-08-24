import React from 'react';
import WhitePaper from '../white-paper/WhitePaper';

// data
import articleDataArr from '../data/articleDataArr';

function HomePageComp() {
  return (
    <main className='main-wrapper'>
      <WhitePaper articleData={articleDataArr[0]} />
      <h1>Hello from landing page</h1>
    </main>
  );
}

export default HomePageComp;
