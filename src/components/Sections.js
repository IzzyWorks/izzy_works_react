import React from 'react';
import uuid from 'react-uuid';

//components
import WhitePaper from './WhitePaper';

function Section(props) {
  console.log(props);
  return (
    <section
      key={uuid()}
      id={props.article.id}
      className={`section__wrapper ${props.article.style}`}
    >
      <WhitePaper key={uuid()} whitePaper={props.article} />
    </section>
  );
}

export default Section;
