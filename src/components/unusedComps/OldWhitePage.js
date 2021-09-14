import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { useHistory } from 'react-router-dom';

//components
import Title from './Title';
import Synopsis from './Synopsis';
import Details from './detailsComps/DetailsCard';

function WhitePaper(props) {
  const [pageNo, setPageNo] = useState(1);

  const pagePositionNScroll = {
    1: 'home',
    2: 'OBIC',
    3: 'tldnr',
    4: 'HapMap',
  };

  useEffect(() => {
    // setTimeout(()=>{
    //   let animationclasses = animateClass.concat(' targetAnimation');
    //   console.log("In Use effect after 3 Seconds ====>")
    //   setAnimateClass(animationclasses);
    // },5000);
    //console.log('In Use effect! =====>', pagePositionNScroll[pageNo]);
    //history.push(pagePositionNScroll[pageNo]);
    document.addEventListener('scroll', onScrollHandler);
  }, [pageNo]);

  const onScrollHandler = (e) => {
    let el = window;
    const widthNHeightObj = {
      x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
      y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
    };
    //console.log("widthNHeightObj ===>",widthNHeightObj,document.body.clientHeight);

    let whichPageIamIn = Math.ceil(
      widthNHeightObj.y / document.body.clientHeight
    );

    //console.log("786 ===>",whichPageIamIn);
    pageNo != whichPageIamIn ? setPageNo(whichPageIamIn) : '';
  };

  return (
    <article
      key={uuid()}
      className={`article__wrapper ${props.whitePaper.style}`}
    >
      <Title articleTitle={props.whitePaper.id} />
      <Synopsis articleSynopsis={props.whitePaper.synopsis} />
      <Details articleDetails={props.whitePaper.details} />
    </article>
  );
}

export default WhitePaper;
