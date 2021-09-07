import React from 'react';

function Title(props) {

  let classes = props.classes;

  return (
    <React.Fragment>
        <h2 className={`title ${classes}`}>{props.articleTitle}</h2>
    </React.Fragment>
  );
}

export default Title;
