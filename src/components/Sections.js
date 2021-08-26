import React from 'react';
import uuid from 'react-uuid';

//data
import articleDateArr from './data/articleDataArr';

//components
import WhitePaper from './WhitePaper';

function Section(props) {
  console.log(props);
  return (
    <section
      key={uuid()}
      className={`section__wrapper ${props.sectionItem.style}`}
    >
      {props.sectionItem.title == articleDateArr.id
        ? articleDateArr.map((articleData) => (
            <WhitePaper whitePaperData={articleData} />
          ))
        : null}
    </section>
  );
}

export default Section;

{
  props.navBarData
    .filter(
      (navBarData) =>
        navBarData.desktop == props.hamburgerSwitch.hamburger ||
        !props.hamburgerSwitch.hamburger
    )
    .map((navBarData) => (
      <li key={uuid()} className='navbar__links'>
        <h3 className={'black'}>
          <HashNavWrapper navItem={navBarData} />
          {/* {navBarData.effect == 'smooth' ? (
                    <HashNavWrapper navItem={navBarData} />
                  ) : null} */}
        </h3>
      </li>
    ));
}
