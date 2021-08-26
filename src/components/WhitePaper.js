import React from 'react';
import uuid from 'react-uuid';

//components
import Title from './global/Title';
import Synopsis from './global/Synopsis';
import Details from './global/Details';

function WhitePaper(props) {
  return (
    <article
      key={uuid()}
      className={`article__wrapper ${props.whitePaper.style}`}
    >
      {/* {console.log('white paper', props)} */}
      <Title articleTitle={props.whitePaper.id} />
      <Synopsis articleSynopsis={props.whitePaper.synopsis} />
      {/* <Details articleDetails={props.whitePaperData.details} /> */}
    </article>
  );
}

export default WhitePaper;
