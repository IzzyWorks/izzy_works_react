import React from 'react';

//components
import Title from './whitePaper/Title';
import Synopsis from './whitePaper/Synopsis';
import Details from './whitePaper/details/DetailsCard';

function OBICPage(props) {
  const whitePaper = props.whitePaper;
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
