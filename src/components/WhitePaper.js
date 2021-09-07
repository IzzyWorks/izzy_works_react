import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';

//components
import Title from './global/Title';
import Synopsis from './global/Synopsis';
import Details from './global/DetailsCard';

function WhitePaper(props) {
  console.log('whitepaper ===>', props);
  const [animateClass, setAnimateClass] = useState('baseAnimation');

  useEffect(()=>{
    setTimeout(()=>{
      let animationclasses = animateClass.concat(' targetAnimation');
      console.log("In Use effect after 3 Seconds ====>")
      setAnimateClass(animationclasses);
    },3000);
  },[]);

  return (
    <article
      key={uuid()}
      className={`article__wrapper ${props.whitePaper.style}`}
    >
      <Title classes={animateClass} articleTitle={props.whitePaper.id} />
      <Synopsis articleSynopsis={props.whitePaper.synopsis} />
      <Details articleDetails={props.whitePaper.details} />
    </article>
  );
}

export default WhitePaper;
