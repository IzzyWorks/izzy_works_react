import React from 'react';
import uuid from 'react-uuid';

//data
import articleDateArr from './data/articleDataArr';

//components
import WhitePaper from './WhitePaper';

function Section(props) {
  return (
    <section
      key={uuid()}
      id={props.sections.title}
      className={`section__wrapper ${props.sections.style}`}
    >
      {articleDateArr.map((articleData) =>
        articleData.id == props.sections.title ? (
          <WhitePaper key={uuid()} whitePaperData={articleData} />
        ) : null
      )}
    </section>
  );
}

export default Section;
