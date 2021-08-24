import React from 'react';

//components
import Title from './global/Title';
import Synopsis from './global/Synopsis';
import Details from './global/Details';

function WhitePaper(props) {
  return (
    <article key={props.obicData.id} className='article--wrapper slide-in'>
      <Title articleTitle={props.obicData.id} />
      <Synopsis articleSynopsis={props.obicData.synopsis} />
      <Details articleDetails={props.obicData.details} />
    </article>
  );
}

export default WhitePaper;
