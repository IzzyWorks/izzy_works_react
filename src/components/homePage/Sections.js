import React from 'react';

//components
import WhitePaper from '../whitepaperComps/WhitePaper';

function Section(props) {
  // console.log('inside section component ====>', props);
  // console.log('rendering section...');
  return (
    <section
      key={`section_${props.section.id}`}
      className={`section__wrapper ${props.section.style}`}
    >
      <WhitePaper key={props.section.id} whitePaper={props.section} />
    </section>
  );
}

export default Section;
