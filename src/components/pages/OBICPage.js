import React from 'react';

//components
import Title from './whitePaper/Title';
import Synopsis from './whitePaper/Synopsis';
import Details from './whitePaper/details/DetailsCard';

//data
import ContentData from '../data/ContentData';

const whitePaper = ContentData[0];

function OBICPage() {
  console.log('whitepaper ===>', ContentData[0]);

  return (
    <article
      key={whitePaper.id}
      className={`article__wrapper ${whitePaper.style}`}
    >
      <Title articleTitle={whitePaper.id} />
      <Synopsis articleSynopsis={whitePaper.synopsis} />
      <Details articleDetails={whitePaper.details} />
    </article>
  );
}

export default OBICPage;
