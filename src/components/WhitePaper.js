import React from 'react';
import uuid from 'react-uuid';

//components
import Title from './global/Title';
import Synopsis from './global/Synopsis';
import Details from './global/DetailsCard';

function WhitePaper(props) {
  // console.log('whitepaper ===>', props);
  return (
    <article
      key={uuid()}
      className={`article__wrapper ${props.whitePaper.style}`}
    >
      <Title articleTitle={props.whitePaper.id} />
      <Synopsis articleSynopsis={props.whitePaper.synopsis} />
      <Details articleDetails={props.whitePaper.details} />
    </article>
  );
}

export default WhitePaper;
