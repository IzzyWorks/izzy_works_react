import React from 'react';
import uuid from 'react-uuid';

function Authors(props) {
  console.log("Props +++==>",props);
  return (
<<<<<<< HEAD:src/components/global/DetailsAuthors.js
    <div className='authors-section'>
      {props.authors.map((author) => (
        <div key={uuid()} className='authors-wrapping'>
          <div className='author-name'>{author.name}</div>
          <div className='author-roll'>{author.roll}</div>
          <div className='author-contact'>{author.contact}</div>
=======
    <div key={uuid()} className='authors-section'>
        <div className='authors-wrapping'>
          <div className='author-name'>{props.author.name}</div>
          <div className='author-roll'>{props.author.roll}</div>
          <div className='author-contact'>{props.author.contact}</div>
>>>>>>> 5cb0ff20b1e240fa870ab25e57c67b4cd7e4795f:src/components/global/details card/Authors.js
        </div>
      ))
    </div>
  );
}

export default Authors;
