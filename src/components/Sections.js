import React from 'react';
import uuid from 'react-uuid';

//components
import WhitePaper from './WhitePaper';

function Section(props) {
  // console.log('inside section ====>', props);
  return (
    <section
      key={uuid()}
      id={props.section.id}
      className={`section__wrapper ${props.section.style}`}
    >
      <WhitePaper key={uuid()} whitePaper={props.section} />
    </section>
  );
}

export default Section;
