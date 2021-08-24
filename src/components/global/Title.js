import React from 'react';

function Title(props) {
  return (
    <React.Fragment>
      <h2 className='title'>{props.articleTitle}</h2>
    </React.Fragment>
  );
}

export default Title;
