import React from 'react';

function Title(props) {
  return (
    <React.Fragment>
      {props.articleTitle.map((articleTitle) => (
        <h2 key={articleTitle.id} className='title'>
          {articleTitle.title}
        </h2>
      ))}
    </React.Fragment>
  );
}

export default Title;
