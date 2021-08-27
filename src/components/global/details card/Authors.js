import React from 'react';
import uuid from 'react-uuid';

function Authors(props) {
  console.log("Props +++==>",props);
  return (
    <div key={uuid()} className='authors-section'>
        <div className='authors-wrapping'>
          <div className='author-name'>{props.author.name}</div>
          <div className='author-roll'>{props.author.roll}</div>
          <div className='author-contact'>{props.author.contact}</div>
        </div>
      ))
    </div>
  );
}

export default Authors;
