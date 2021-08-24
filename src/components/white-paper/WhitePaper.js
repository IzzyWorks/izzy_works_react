import React from 'react';

//components
import Title from '../global/Title';
import Summary from '../global/Summary';
import Details from '../global/Details';

function WhitePaper(props) {
  return (
    <article key={props.articleData.id} className='article--wrapper slide-in'>
      <Title articleTitle={props.articleData.id} />
      <Summary articleSummary={props.articleData.synopsis} />
      <Details articleDetails={props.articleData.details} />
    </article>
  );
}

export default WhitePaper;
